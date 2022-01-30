import React from "react";
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel, makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addEvap } from "../../redux/sectionSlice";

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

const EvapTabs = () => {
    const dispatch = useDispatch()
    const {evapSection} = useSelector((state) => state.section)
    const classes = useStyles()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addEvap({name, value}))
    }   

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">Operators</Typography>
                <Grid container spacing={3}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Previous Operator</InputLabel>
                            <Select defaultValue = ""
                            name='previous_operator'
                            value={evapSection.previous_operator || ''}
                            onChange={handleChange}
                            >
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
                            value={evapSection.present_operator || ''}
                            onChange={handleChange}>
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
                        <TextField
                        label='Evaporator Efficiency'
                        placeholder=""
                        className={classes.input}
                        name='evap_eff'
                        value={evapSection.evap_eff || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='NaOH Production'
                        placeholder=""
                        className={classes.input}
                        name='naoh_prod'
                        value={evapSection.naoh_prod || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Evap Feed Flow Rate'
                        placeholder=""
                        className={classes.input}
                        name='evap_feed_flowrate'
                        value={evapSection.evap_feed_flowrate || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='NaOH Concentration' 
                        placeholder="" 
                        className={classes.input}
                        name='naoh_conc'
                        value={evapSection.naoh_conc || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='NaOH Specific Gravity' 
                        placeholder="" 
                        className={classes.input}
                        name='naoh_sg'
                        value={evapSection.naoh_sg || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Tank 8 Level'
                        placeholder="" 
                        className={classes.input}
                        name='t8_level'
                        value={evapSection.t8_level || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Tank 9 Level' 
                        placeholder="" 
                        className={classes.input}
                        name='t9_level'
                        value={evapSection.t9_level || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Vacuum Pressure' 
                        placeholder="" 
                        className={classes.input}
                        name='vacuum_pressure'
                        value={evapSection.vacuum_pressure || ''}
                        onChange={handleChange}/>
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
                            value={evapSection.remarks || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default EvapTabs