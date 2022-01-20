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

const EvapTabs = () => {
    
    const classes = useStyles()

    return(
        <>
            <div className={classes.container}>
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
                    <TextField label='Evaporator Efficiency' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='NaOH Production' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Evap Feed Flow Rate' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='NaOH Concentration' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='NaOH Specific Gravity' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Tank 8 Level' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Tank 9 Level' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <TextField label='Vacuum Pressure' placeholder="" className={classes.input}></TextField>
                </Grid>
            </Grid>
        </>
    )
}

export default EvapTabs