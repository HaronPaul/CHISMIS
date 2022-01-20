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

const ElectrolysisTab = () => {
    
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
                <Grid item lg= {2} sm={4} xs={6}>
                    <TextField label='Electrolyzer Efficiency' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='Cell Liquor Production' placeholder="11.90" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='SPB Inlet Temperature' placeholder="60-90" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='NaOH Inlet Temperature' placeholder="60-90" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='Chelate Operating Hours Tower A' placeholder="42hrs/tk" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='Chelate Operating Hours Tower B' placeholder="42hrs/tk" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='NaOH Concentration' placeholder="30% - 32%" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='NaOH Specific Gravity' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='NaOH Flow Rate' placeholder="21 m³/hr" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='DB Free Chlorine Quality' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='Number of Nitrogen Cylinders Available' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='Decomposer Operating Temperature' placeholder="" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='DB Concentration' placeholder="180-220" className={classes.input}></TextField>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <TextField label='SPB concentration' placeholder="280-320" className={classes.input}></TextField>
                </Grid>
            </Grid>
        </>
    )
}

export default ElectrolysisTab