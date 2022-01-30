import React from "react";
import {Select, MenuItem, FormControl, InputLabel, Typography, makeStyles, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from 'react-redux'
import { addNaocl } from "../../redux/sectionSlice";

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

const NaCLOTab = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const {nacloSection} = useSelector((state) => state.section)

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

export default NaCLOTab