import React from "react";
import {useStyles} from './styles'
import {Select, MenuItem, FormControl, InputLabel, makeStyles} from '@material-ui/core'
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


const ControlRoomTab = () => {
    
    const classes = useStyles()

    return(
        <Grid container spacing={4}>
            <Grid item lg={2} sm={4} xs={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Interlock Engaged</InputLabel>
                    <Select defaultValue = "" >
                        <MenuItem value={'YES'}>Yes</MenuItem>
                        <MenuItem value={'NO'}>No</MenuItem>
                        <MenuItem value={'PARTIAL'}>Partial</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item lg={2} sm={4} xs={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel>DAQ Operational</InputLabel>
                    <Select defaultValue = "" >
                        <MenuItem value={'YES'}>Yes</MenuItem>
                        <MenuItem value={'NO'}>No</MenuItem>
                        <MenuItem value={'PARTIAL'}>Partial</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item lg={2} sm={4} xs={4}>
                <TextField label='Rectifier Raw Water' placeholder=">= 250" className={classes.input}></TextField>
            </Grid>
            <Grid item lg={2} sm={4} xs={4}>
                <TextField label='Cells' placeholder="" className={classes.input}></TextField>
            </Grid>
            <Grid item lg={2} sm={4} xs={4}>
                <TextField label='Average Load' placeholder="<= 13.25" className={classes.input}></TextField>
            </Grid>
            <Grid item lg={2} sm={4} xs={4}>
                <TextField label='End of Shift Load' placeholder="" className={classes.input}></TextField>
            </Grid>
            <Grid item lg={2} sm={4} xs={4}>
                <TextField label='Rectifier Demi water' placeholder=">= 180" className={classes.input}></TextField>
            </Grid>
            <Grid item lg={2} sm={4} xs={4}>
                <TextField label='Cells with voltage' placeholder="> 3.4" className={classes.input}></TextField>
            </Grid>
            <Grid item lg={2} sm={4} xs={4}>
                <TextField label='Cells total voltage' placeholder="< 299.2" className={classes.input}></TextField>
            </Grid>
            <Grid item lg={2} sm={4} xs={4}>
                <TextField label='Transformer oil temperature' placeholder="< 90 °C" className={classes.input}></TextField>
            </Grid>
        </Grid>
    )
}

export default ControlRoomTab