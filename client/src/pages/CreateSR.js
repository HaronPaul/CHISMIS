import React, {useEffect, useState} from "react";
import OSRTabs from "../components/Tabs";
import ShiftReportBox from "../components/ShiftReportBox";
import ErrorSection from '../components/AllTabs/ErrorSection'

// Material UI Imports
import { Typography, Paper, Grid, FormControl, InputLabel, MenuItem, Select, Button, TextField, Modal, CircularProgress} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns  from '@mui/lab/AdapterDateFns'
import axios from 'axios'


// Redux Imports
import { changeDate, changeShift, addUsages, addHcl, addEvap, addElectro} from "../redux/sectionSlice"
import {addErrors} from '../redux/errorSlice'
let actual_consumptions = ['ac_salt', 'ac_soda_ash', 'ac_naoh', 'ac_hcl', 'ac_bacl2', 'ac_flocullant', 'ac_na2so3', 'ac_alpha_cellulose', 'ac_power', 'ac_steam_brine']

const useStyles = makeStyles({
    mainContainerStyle : {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
    },
    titleStyle: {
        alignSelf: 'flex-start',
        marginTop: '2% !important',
        marginBottom: '1% !important',
        marginLeft: '5% !important',
    },
    paperContainerStyle : {
        width: '90%', 
        padding:'1%', 
        boxSizing: 'border-box', 
        marginBottom: '1%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorContainer: {
        height: '150px',
    }
})

const validationModalStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    p: '2%',
    height: '10%'
  };

const CreateSR = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const shiftReportData = useSelector((state) => state.section)
    const {currentSupervisor, date, shift, usagesSection, electroSection, controlRoomSection, hclSection, evapSection} = useSelector((state) => state.section)
    const {ac_salt, ac_soda_ash, ac_naoh, ac_hcl, ac_bacl2, ac_flocullant, ac_na2so3,ac_alpha_cellulose, ac_power, ac_steam_brine} = usagesSection
    const {shiftReportErrors} = useSelector((state) => state.error)

    // Modal states and function
    const [open, setOpen] = useState(false);
    const [openValidationModal, setOpenValidationModal] = useState(false)

    // For opening and closing the modal document report
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 
    const handleDateChange = (date) => {
        try {
            const dateString = date.toString()
            if(dateString !== "Invalid Date") {
                const DD = String(date.getDate()).padStart(2, '0');
                const MM = String(date.getMonth() + 1).padStart(2, '0');
                const YYYY = date.getFullYear();
                const dateCreated = `${MM}-${DD}-${YYYY}`
                dispatch(changeDate(dateCreated))
            } else {
                dispatch(changeDate(''))
                console.log("Date is invalid")
            }
        } catch(err) {
            console.log('No date inputted')
        }
    }

    // Calculate each Per DMT from actual consumption and cell liquor PDN
    useEffect(()=> {
        let calculatePDN
        actual_consumptions.forEach((param) => {
            if(usagesSection[param] && electroSection.cell_liq_prod) {  
                calculatePDN = usagesSection[param] / electroSection.cell_liq_prod
                dispatch(addUsages({name: `pdn_${param.slice(3, param.length)}`, value: parseFloat(calculatePDN).toFixed(2)}))
            } else {
                dispatch(addUsages({name: `pdn_${param.slice(3, param.length)}`, value: ''}))
            }
        })
    }, [electroSection.cell_liq_prod, ac_salt, ac_soda_ash, ac_naoh, ac_hcl, ac_bacl2, ac_flocullant, ac_na2so3, ac_alpha_cellulose, ac_power, ac_steam_brine])

    // Calculate the HCl Synthesis Efficiency
    useEffect(()=> {
        if(controlRoomSection.hours && controlRoomSection.avg_load && hclSection.hcl) {
            var theoretical = (1.36 * controlRoomSection.hours * controlRoomSection.avg_load * controlRoomSection.cells * 0.94) / 1000
            var eff = parseFloat((hclSection.hcl * 100) / theoretical).toFixed(2) 
            console.log(`Efficiency = ${eff}`)
            dispatch(addHcl({name: 'hcl_synth_eff', value: eff}))
        } else {  
            dispatch(addHcl({name: 'hcl_synth_eff', value: ''}))
        }
    }, [controlRoomSection.hours, controlRoomSection.avg_load, hclSection.hcl, controlRoomSection.cells])

    // Calculate the Evaporator efficiency
    useEffect(()=> {
        if(evapSection.naoh_total_volume && electroSection.naoh_sg && electroSection.naoh_conc && evapSection.naoh_prod) {
            var naoh_total = (evapSection.naoh_total_volume * electroSection.naoh_sg * electroSection.naoh_conc) / 100
            dispatch(addEvap({name: 'theoretical', value: naoh_total}))

            var eff = parseFloat((evapSection.naoh_prod * 100) / naoh_total).toFixed(2)
            dispatch(addEvap({name: 'evap_eff', value: eff}))
        } else {
            dispatch(addEvap({name: 'evap_eff', value: eff}))
        }
    }, [evapSection.naoh_total_volume, electroSection.naoh_sg, electroSection.naoh_conc, evapSection.naoh_prod])

    // Calculating the electrolysis efficiency
    useEffect(()=> {
        if(controlRoomSection.hours && controlRoomSection.avg_load && electroSection.cell_liq_prod) {
            var theoretical = (1.4925 * controlRoomSection.hours * controlRoomSection.avg_load * controlRoomSection.cells * 0.94) / 1000
            var eff = parseFloat(((electroSection.cell_liq_prod * 100) / theoretical)).toFixed(2) 
            dispatch(addElectro({name: 'electro_eff', value: eff}))
        } else {
            dispatch(addElectro({name: 'electro_eff', value: ''}))
        }
    }, [controlRoomSection.hours, controlRoomSection.avg_load, electroSection.cell_liq_prod, controlRoomSection.cells])

    // Calculating the Steam Evap actual consumption
    useEffect(() => {
        if(usagesSection.ac_steam_evap && evapSection.naoh_prod) {
            var pdn_value = usagesSection.ac_steam_evap / evapSection.naoh_prod
            dispatch(addUsages({name: `pdn_steam_evap`, value: parseFloat(pdn_value).toFixed(2)}))
        }
    }, [usagesSection.ac_steam_evap, evapSection.naoh_prod])

    // Button for viewing the report in tabuler form
    const handleSubmitButton = async () => {
        setOpenValidationModal(true)
        try {
            const response = await axios.post('http://localhost:8000/api/v1/shift_report/validate', shiftReportData, {validateStatus: function(status){
                    return status < 500;
                }
            }) 
            if(response.data.success) {
                 // This will get the Per DMT NaOH MTD for the specific usages 
                if(date) {
                    const splitDate = shiftReportData.date.split('-')
                    const day = splitDate[1]
                    // When it is first day of the month and first day
                    if(parseInt(day) === 1 && parseInt(shift) === 1) {
                        console.log('In zero MTD')
                        // Add the current actual consumption with 0
                        dispatch(addUsages({name: 'mtd_salt', value: usagesSection.pdn_salt}))
                        dispatch(addUsages({name: 'mtd_soda_ash', value: usagesSection.pdn_soda_ash}))
                        dispatch(addUsages({name: 'mtd_naoh', value: usagesSection.pdn_naoh}))
                        dispatch(addUsages({name: 'mtd_hcl', value: usagesSection.pdn_hcl}))
                        dispatch(addUsages({name: 'mtd_bacl2', value: usagesSection.pdn_bacl2 }))
                        dispatch(addUsages({name: 'mtd_flocullant', value: usagesSection.pdn_flocullant }))
                        dispatch(addUsages({name: 'mtd_na2so3', value: usagesSection.pdn_na2so3}))
                        dispatch(addUsages({name: 'mtd_alpha_cellulose', value: usagesSection.pdn_alpha_cellulose}))
                        dispatch(addUsages({name: 'mtd_power', value: usagesSection.pdn_power}))
                        dispatch(addUsages({name: 'mtd_steam_evap', value: usagesSection.pdn_steam_evap}))
                        dispatch(addUsages({name: 'mtd_steam_brine', value: usagesSection.pdn_steam_brine}))
                    } else {
                        console.log('In MTD')
                        // Get the response from the DB query here
                        const mtdResponse = await axios.get(`http://localhost:8000/api/v1/shift_report/getMTD/${date}/${shift}`)
                        if(mtdResponse.data.success) {
                            console.log(mtdResponse.data)
                            const acSum = mtdResponse.data.mtdAcSum
                            const {ac_alpha_cellulose, ac_bacl2, ac_flocullant, ac_hcl, ac_na2so3, ac_naoh, ac_power, ac_salt, ac_soda_ash, ac_steam_brine, ac_steam_evap,} = acSum
                            const cellLiquorSum = parseFloat(mtdResponse.data.mtdCellLiquorSum) + parseFloat(electroSection.cell_liq_prod)

                            dispatch(addUsages({name: 'mtd_salt', value: ((parseFloat(usagesSection.ac_salt) + parseFloat(ac_salt)) / cellLiquorSum).toFixed(2) }) )
                            dispatch(addUsages({name: 'mtd_soda_ash', value: ((parseFloat(usagesSection.ac_soda_ash) + parseFloat(ac_soda_ash)) / cellLiquorSum).toFixed(2) }) )
                            dispatch(addUsages({name: 'mtd_naoh', value: ((parseFloat(usagesSection.ac_naoh) + parseFloat(ac_naoh)) / cellLiquorSum).toFixed(2) }) )
                            dispatch(addUsages({name: 'mtd_hcl', value: ((parseFloat(usagesSection.ac_hcl) + parseFloat(ac_hcl)) / cellLiquorSum).toFixed(2) }) )
                            dispatch(addUsages({name: 'mtd_bacl2', value: ((parseFloat(usagesSection.ac_bacl2) + parseFloat(ac_bacl2)) / cellLiquorSum).toFixed(2) }))
                            dispatch(addUsages({name: 'mtd_flocullant', value: ((parseFloat(usagesSection.ac_flocullant) + parseFloat(ac_flocullant)) / cellLiquorSum).toFixed(2) }) )
                            dispatch(addUsages({name: 'mtd_na2so3', value: ((parseFloat(usagesSection.ac_na2so3) + parseFloat(ac_na2so3)) / cellLiquorSum).toFixed(2) }))
                            dispatch(addUsages({name: 'mtd_alpha_cellulose', value: ((parseFloat(usagesSection.ac_alpha_cellulose) + parseFloat(ac_alpha_cellulose)) / cellLiquorSum).toFixed(2) }) )
                            dispatch(addUsages({name: 'mtd_power', value: ((parseFloat(usagesSection.ac_power) + parseFloat(ac_power)) / cellLiquorSum).toFixed(2) }))
                            dispatch(addUsages({name: 'mtd_steam_evap', value: ((parseFloat(usagesSection.ac_steam_evap) + parseFloat(ac_steam_evap)) / cellLiquorSum).toFixed(2) }) )
                            dispatch(addUsages({name: 'mtd_steam_brine', value: ((parseFloat(usagesSection.ac_steam_brine) + parseFloat(ac_steam_brine)) / cellLiquorSum).toFixed(2) }) )
                        }
                    }
                }
                    setOpenValidationModal(false)
                    handleOpen()
            } else {
                // Print the errors on the DOM
                setOpenValidationModal(false)
                dispatch(addErrors(response.data.errors))
            }
        } catch(error) {
            console.log(error)
        }
    }

    const handleValidateButton = async () => {
        setOpenValidationModal(true)
        try {
            const response = await axios.post('http://localhost:8000/api/v1/shift_report/validate', shiftReportData)
            if(response) setOpenValidationModal(false)
            dispatch(addErrors(response.data.errors)) 
        } catch(error) {
            setOpenValidationModal(false)
            console.log(error)
        }
    }

    return(
        <>
        <div className={classes.mainContainerStyle}>
            <Typography variant="h2" className={classes.titleStyle}>Create Operation Shift Report</Typography>
            <Paper 
            className={classes.paperContainerStyle}
            elevation={4}>
                <Grid container spacing={2}>
                    <Grid item lg={4}>
                        <Typography variant="h6">Supervisor: {currentSupervisor} </Typography>
                    </Grid>
                    <Grid item lg={4}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={date || null}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    </Grid> 
                    <Grid item lg={4}>
                    <FormControl style={{minWidth: '100%'}}>
                        <InputLabel labelid="shift">Shift</InputLabel>
                        <Select
                        id="shift"
                        label="Shift"
                        defaultValue = ""
                        name='shift'
                        value={shift || ''}
                        onChange={(e) => dispatch(changeShift(e.target.value))}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                </Grid>
            </Paper>  
            <div style={{width: '90%' }}>
                {shiftReportErrors.length === 0? <></>:<ErrorSection errors={shiftReportErrors} type="shiftreport"/>}
            </div>
            <OSRTabs> </OSRTabs>
            <div style={{display: 'flex', width: '90%', justifyContent: 'flex-end'}}>
                <Button 
                variant="contained" 
                style={{marginRight: '2%', marginTop: '1%', marginBottom: '1%', width: '10%'}}
                onClick={handleSubmitButton}>Submit</Button>
                <Button 
                style={{ marginTop: '1%', marginBottom: '1%', width: '10%'}}
                variant="contained"
                onClick={handleValidateButton}>
                    Validate
                </Button>
            </div> 
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{display: 'flex', justifyContent: 'center', padding: '0.5%'}}
            >   
                <>
                    <ShiftReportBox closeDocModal={handleClose}/>
                </>
            </Modal>
            <Modal
                open={openValidationModal}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,padding: '0.5%'}}
            >
                <Paper sx={validationModalStyle} elevation={5}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <CircularProgress style={{marginRight: '20px'}} />
                        <Typography variant="h5"> Validating data... </Typography>
                    </div>
                </Paper>
            </Modal>
        </div>
        
       </>
    )
}

export default CreateSR