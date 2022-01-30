import React from "react";
import {Select, MenuItem, FormControl, InputLabel, makeStyles, Typography} from '@material-ui/core'
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addControlRoom } from "../../redux/sectionSlice";

const useStyles = makeStyles({
    formControl: {
        minWidth: '100%',
    },
    input: {
        minWidth: '100%',
    },
    container: {
        marginBottom: '3%',
    },  
    header: {
        marginBottom: '1%'
    }
})

const ControlRoomTab = () => {
    const dispatch = useDispatch()
    const {controlRoomSection} = useSelector((state) => state.section)
    const classes = useStyles()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addControlRoom({name, value}))
    }   

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">Operators</Typography>
                <Grid container spacing={2}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Previous Operator</InputLabel>
                            <Select 
                            defaultValue = ''
                            name='previous_operator'
                            value={controlRoomSection.previous_operator || ''}
                            onChange={handleChange}>
                                <MenuItem value={'Haron Paul Lorente'}> Haron Paul Lorente</MenuItem>
                                <MenuItem value={'Hannah Patriz Lorente'}>Hannah Patriz Lorente</MenuItem>
                                <MenuItem value={'Jazon Troy Jaralve'}>Jazon Troy Jaralve</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Present Operator</InputLabel>
                            <Select
                            defaultValue = ""
                            name='present_operator'
                            value={controlRoomSection.present_operator || ''}
                            onChange={handleChange}
                            >
                                <MenuItem value={'Haron Paul Lorente'}> Haron Paul Lorente</MenuItem>
                                <MenuItem value={'Hannah Patriz Lorente'}>Hannah Patriz Lorente</MenuItem>
                                <MenuItem value={'Jazon Troy Jaralve'}>Jazon Troy Jaralve</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Other Information</Typography>
                <Grid container spacing={4}>
                    <Grid item lg={2} sm={4} xs={4}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Interlock Engaged</InputLabel>
                            <Select
                            defaultValue = ""
                            name='interlock_engaged'
                            value={controlRoomSection.interlock_engaged || ''}
                            onChange={handleChange}>
                                <MenuItem value={'YES'}>Yes</MenuItem>
                                <MenuItem value={'NO'}>No</MenuItem>
                                <MenuItem value={'PARTIAL'}>Partial</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={2} sm={4} xs={4}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>DAQ Operational</InputLabel>
                            <Select
                            defaultValue = ""
                            name='daq_operational'
                            value={controlRoomSection.daq_operational || ''}
                            onChange={handleChange}>
                                <MenuItem value={'YES'}>Yes</MenuItem>
                                <MenuItem value={'NO'}>No</MenuItem>
                                <MenuItem value={'PARTIAL'}>Partial</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Rectifier Raw Water'
                        placeholder=">= 250"
                        className={classes.input} 
                        name='rr_water'
                        value={controlRoomSection.rr_water || ''}
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Cells'
                        placeholder=""
                        className={classes.input}
                        name='cells'
                        value={controlRoomSection.cells || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Average Load'
                        placeholder="<= 13.25"
                        className={classes.input}
                        name='avg_load'
                        value={controlRoomSection.avg_load || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='End of Shift Load'
                        placeholder=""
                        className={classes.input}
                        name='eos_load'
                        value={controlRoomSection.eos_load || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Rectifier Demi water'
                        placeholder=">= 180"
                        className={classes.input}
                        name='rd_water'
                        value={controlRoomSection.rd_water || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Cells with voltage'
                        placeholder="> 3.4"
                        className={classes.input}
                        name='cells_voltage'
                        value={controlRoomSection.cells_voltage || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='Cells total voltage'
                        placeholder="< 299.2"
                        className={classes.input}
                        name='cells_total_voltage'
                        value={controlRoomSection.cells_total_voltage || ''}
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Transformer oil temperature'
                        placeholder="< 90 °C"
                        className={classes.input}
                        name='xformer_oil_temp'
                        value={controlRoomSection.xformer_oil_temp || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4" className={classes.header}>Operational Remarks</Typography>
                <Grid container spacing={4}>
                    <Grid item lg={12} sm={12} xs={12}>
                        <TextField
                            variant="outlined"
                            label="Operational Remarks"
                            multiline
                            maxRows={4}
                            className={classes.input}
                            name='remarks'
                            value={controlRoomSection.remarks || ''}
                            onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ControlRoomTab