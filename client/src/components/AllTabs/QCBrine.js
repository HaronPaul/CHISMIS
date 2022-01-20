import React from "react";
import {Select, MenuItem, FormControl, InputLabel, Typography, makeStyles, Grid} from "@material-ui/core";
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

const NaCLOTab = () => {
    
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
                <Typography variant="h4">NaCLO Concentration</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField label='Circulation Tank I' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Circulation Tank II' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Circulation Tank III' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Circulation Tank IV' placeholder="" className={classes.input}></TextField>
                    </Grid>
                </Grid>
            </div>
            
            <div className={classes.container}>
                <Typography variant="h4">Filter Batches</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField label='Filter Line I' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Filter Line II' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Filter Line III' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Filter Line IV' placeholder="" className={classes.input}></TextField>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Excess NaOH Concentration</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField label='Circulation Tank I' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Circulation Tank II' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Circulation Tank III' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Circulation Tank IV' placeholder="" className={classes.input}></TextField>
                    </Grid>
                </Grid>
            </div>
            
            <div className={classes.container}>
                <Typography variant="h4">Storage</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField label='Storage I' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Storage II' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Storage III' placeholder="" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='Storage IV' placeholder="" className={classes.input}></TextField>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default NaCLOTab