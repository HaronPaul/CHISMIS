import React from "react";
import OSRTabs from "../components/Tabs";
import { Typography, Paper, Grid, FormControl, InputLabel, MenuItem, Select, Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { changeDate, changeShift } from "../redux/sectionSlice"
import { addErrors } from "../redux/errorSlice";
import DateFnsUtils from '@date-io/date-fns';

import axios from 'axios'

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
    const {currentSupervisor, date, shift} = useSelector((state) => state.section)

    const handleDateChange = (date) => {
        const DD = String(date.getDate()).padStart(2, '0');
        const MM = String(date.getMonth() + 1).padStart(2, '0');
        const YYYY = date.getFullYear();
        const dateCreated = `${MM}/${DD}/${YYYY}`
        console.log(dateCreated) 
        dispatch(changeDate(dateCreated))
    }

    const handleSubmitButton = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/v1/shift_report', shiftReportData)
            console.log(response.data.errors)
            dispatch(addErrors(response.data.errors))
        } catch(error) {
            console.log(error)
        }
    }
    return(
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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                style={{minWidth: '90%'}}
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label="Date Created"
                                format="MM/dd/yyyy"
                                InputAdornmentProps={{ position: "start" }}
                                value={date || null}    
                                onChange={date => handleDateChange(date)}
                            />
                        </MuiPickersUtilsProvider>
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
            onClick={handleSubmitButton}>Submit Report</Button>
        </div>
    )
}

export default CreateSR