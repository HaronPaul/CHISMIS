import React, {useState} from "react";
import OSRTabs from "../components/Tabs";
import { Typography, Paper, Grid, FormControl, InputLabel, MenuItem, Select, Button, TextField, Modal, Box, autocompleteClasses} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { changeDate, changeShift } from "../redux/sectionSlice"
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns  from '@mui/lab/AdapterDateFns'
import axios from 'axios'
import ModalReport from "../components/ModalReport";
import ShiftReportDoc from "../components/ShiftReportDoc";
import { addErrors } from "../redux/errorSlice";

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

// Style for modal
const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '70vw',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 5,
    overflowY: 'scroll',
};

const CreateSR = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const shiftReportData = useSelector((state) => state.section)
    const {currentSupervisor, date, shift} = useSelector((state) => state.section)
    
    // Modal states and function
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 
    const handleDateChange = (date) => {
        try {
            const dateString = date.toString()
            if(dateString !== "Invalid Date") {
                console.log(dateString)
                const DD = String(date.getDate()).padStart(2, '0');
                const MM = String(date.getMonth() + 1).padStart(2, '0');
                const YYYY = date.getFullYear();
                const dateCreated = `${MM}/${DD}/${YYYY}`
                dispatch(changeDate(dateCreated))
            }
        } catch(err) {
            console.log('No date inputted')
        }
    }

    const handleSubmitButton = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/v1/shift_report', shiftReportData)
            if(response.data.success) {
                handleOpen()
                // Create a PDF modal containing the data
            } else {
                // Print the errors on the DOM
                dispatch(addErrors(response.data.errors))
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
                <Box sx={style}>
                    <Typography variant="h4" textAlign={"center"}>Preview Shift Report</Typography>
                    <ShiftReportDoc/>
                    <Button variant="contained" style={{marginTop: '20px'}}>Submit Report</Button>
                </Box>

            </Modal>
        </div>
        
       </>
    )
}

export default CreateSR