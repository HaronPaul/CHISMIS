import React, {useEffect} from "react";
import OSRTabs from "../components/Tabs";


import ShiftReportBox from "../components/ShiftReportBox";
// Material UI Imports
import { Typography, Paper, Grid, FormControl, InputLabel, MenuItem, Select, Button, TextField, Modal} from "@mui/material";
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
    }
})

const CreateSR = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const shiftReportData = useSelector((state) => state.section)
    const {currentSupervisor, date, shift, usagesSection, electroSection, controlRoomSection, hclSection, evapSection} = useSelector((state) => state.section)
    const {ac_salt, ac_soda_ash, ac_naoh, ac_hcl, ac_bacl2, ac_flocullant, ac_na2so3,ac_alpha_cellulose, ac_power, ac_steam_brine} = usagesSection

    // Modal states and function
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 
    const handleDateChange = (date) => {
        try {
            const dateString = date.toString()
            if(dateString !== "Invalid Date") {
                const DD = String(date.getDate()).padStart(2, '0');
                const MM = String(date.getMonth() + 1).padStart(2, '0');
                const YYYY = date.getFullYear();
                const dateCreated = `${MM}/${DD}/${YYYY}`
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
        try {
            const response = await axios.post('http://localhost:8000/api/v1/shift_report/validate', shiftReportData, {validateStatus: function(status){
                    return status < 500;
                }
            }) 
            if(response.data.success) {
                 // This will get the Per DMT NaOH MTD for the specific usages 
                if(date) {
                    const splitDate = shiftReportData.date.split('/')
                    const day = splitDate[1]
                    
                    // When it is first day of the month and first day
                    if(parseInt(day) === 1 && parseInt(shift) === 1) {
                        // Add the current actual consumption with 0
                        dispatch(addUsages({name: 'mtd_salt', value: usagesSection.ac_salt}))
                        dispatch(addUsages({name: 'mtd_soda_ash', value: usagesSection.ac_soda_ash}))
                        dispatch(addUsages({name: 'mtd_naoh', value: usagesSection.ac_naoh}))
                        dispatch(addUsages({name: 'mtd_hcl', value: usagesSection.ac_hcl}))
                        dispatch(addUsages({name: 'mtd_bacl2', value: usagesSection.ac_bacl2}))
                        dispatch(addUsages({name: 'mtd_flocullant', value: usagesSection.ac_flocullant}))
                        dispatch(addUsages({name: 'mtd_na2so3', value: usagesSection.ac_na2so3}))
                        dispatch(addUsages({name: 'mtd_alpha_cellulose', value: usagesSection.ac_alpha_cellulose}))
                        dispatch(addUsages({name: 'mtd_power', value: usagesSection.ac_power}))
                        dispatch(addUsages({name: 'mtd_steam_evap', value: usagesSection.ac_steam_evap}))
                        dispatch(addUsages({name: 'mtd_steam_brine', value: usagesSection.ac_steam_brine}))
                    } else {
                        // Get the response from the DB query here
                        dispatch(addUsages({name: 'mtd_salt', value: 0}))
                        dispatch(addUsages({name: 'mtd_soda_ash', value: 0}))
                        dispatch(addUsages({name: 'mtd_naoh', value: 0}))
                        dispatch(addUsages({name: 'mtd_hcl', value: 0}))
                        dispatch(addUsages({name: 'mtd_bacl2', value: 0}))
                        dispatch(addUsages({name: 'mtd_flocullant', value: 0}))
                        dispatch(addUsages({name: 'mtd_na2so3', value: 0}))
                        dispatch(addUsages({name: 'mtd_alpha_cellulose', value: 0}))
                        dispatch(addUsages({name: 'mtd_power', value: 0}))
                        dispatch(addUsages({name: 'mtd_steam_evap', value: 0}))
                        dispatch(addUsages({name: 'mtd_steam_brine', value: 0}))
                    }
                }
                    handleOpen()
            } else {
                // Print the errors on the DOM
                dispatch(addErrors(response.data.errors))
                console.log(response.data)
            }
        } catch(error) {
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
            <OSRTabs> </OSRTabs>
            <Button 
            variant="contained" 
            style={{alignSelf: 'flex-end', marginRight: '5%', marginTop: '1%', marginBottom: '1%'}}
            onClick={handleSubmitButton}>Submit</Button> 
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{display: 'flex', justifyContent: 'center', padding: '0.5%'}}
            >   
                <>
                    <ShiftReportBox/>
                </>
            </Modal>
        </div>
        
       </>
    )
}

export default CreateSR