import React from "react";
import {Select, MenuItem, FormControl, InputLabel, Typography, makeStyles} from '@material-ui/core'
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

const HCLTab = () => {
    
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
                <Typography variant="h4">Other Information</Typography>
                <Grid container spacing={4}>
                    <Grid item lg= {2} sm={4} xs={4}>
                        <TextField label='HCL Synthesis Efficiency' placeholder="< 11.1 dmt" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='HCL Production' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='Scrubbed Chlorine Temperature' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='HCL product temperature' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='HCL concentration' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='HCL specific gravity' placeholder="> 3.4" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='Sigri cooling water' placeholder="< 299.2" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='HCL Space' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='ClH2O flow rate' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='Sigri inlet pressure chlorine' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField label='Sigri inlet pressure hydrogen' placeholder="" className={classes.input}></TextField>
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

export default HCLTab