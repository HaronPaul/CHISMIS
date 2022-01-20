import React from "react";
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel, makeStyles} from "@material-ui/core";
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
    }
})

const BrineTab = () => {
    
    const classes = useStyles()

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h6"> MTD Salt Loaded: </Typography>
                <Typography variant="h4">Operators</Typography>
                <Grid container spacing={3}>
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
            
            <Typography variant="h4">Other Information</Typography>
            <Grid container spacing={4}>
                <Grid item lg= {2} sm={4} xs={4}>
                    <TextField label='Salt loaded' placeholder="6-10" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Polished Brine Concentration' placeholder="280-320 gpl" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Precoat Operating Hours' placeholder=">= 75 hours" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Ca+Mg Concentration' placeholder="5 max" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Excess NaOH Concentration' placeholder="0.1 - 1.5" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Differential Pressure in Precoat' placeholder="0.2" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Brine Overflow' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Excess Na2CO3 Concentration' placeholder="0.1 - 1.5" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Precoat Flow Rate ' placeholder="20 minutes" className={classes.input}></TextField>
                </Grid>
            </Grid>
        </>
    )
}

export default BrineTab