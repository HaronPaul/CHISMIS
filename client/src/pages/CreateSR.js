import React from "react";
import OSRTabs from "../components/Tabs";
import { Typography, makeStyles, Button, Paper, Grid, FormControl, InputLabel, Select, MenuItem, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { changeDate, changeShift } from "../redux/sectionSlice"
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios'

const useStyles = makeStyles({
    mainContainer: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
    },

    title: {
        alignSelf: 'flex-start',
        marginTop: '2%',
        marginBottom: '1%',
        marginLeft: '5%',
    },

    paperContainer: {
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
        console.log(shiftReportData)
        try {
            const response = await axios.post('http://localhost:8000/api/v1/shift_report')
            console.log(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <div className={classes.mainContainer}>
            <Typography variant="h2" className={classes.title}>Create Operation Shift Report</Typography>
            <Paper 
            className={classes.paperContainer}
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
                                value={date || new Date()}    
                                onChange={date => handleDateChange(date)}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item lg={4}>
                    <FormControl style={{minWidth: '100%'}}>
                        <InputLabel>Shift</InputLabel>
                        <Select
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
            style={{alignSelf: 'flex-end', marginRight: '5%', marginTop: '1%'}}
            onClick={handleSubmitButton}>Submit Report</Button>
        </div>
    )
}

export default CreateSR