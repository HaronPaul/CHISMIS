import React from "react";
import {Select, MenuItem, FormControl, InputLabel, makeStyles, Typography} from '@material-ui/core'
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

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
    
    const classes = useStyles()

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">Operators</Typography>
                <Grid container spacing={2}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Previous Operator</InputLabel>
                            <Select defaultValue = "" >
                                <MenuItem value={'Haron Paul Lorente'}> Haron Paul Lorente</MenuItem>
                                <MenuItem value={'Hannah Patriz Lorente'}>Hannah Patriz Lorente</MenuItem>
                                <MenuItem value={'Jazon Troy Jaralve'}>Jazon Troy Jaralve</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Present Operator</InputLabel>
                            <Select defaultValue = "" >
                                <MenuItem value={'Haron Paul Lorente'}> Haron Paul Lorente</MenuItem>
                                <MenuItem value={'Hannah Patriz Lorente'}>Hannah Patriz Lorente</MenuItem>
                                <MenuItem value={'Jazon Troy Jaralve'}>Jazon Troy Jaralve</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            
            <div className={classes.container}>
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
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ControlRoomTab