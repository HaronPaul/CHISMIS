import React from "react";
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel, makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addPrBrine } from "../../redux/sectionSlice";

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

const BrineTab = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const {prBrineSection} = useSelector((state) => state.section)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addPrBrine({name, value}))
    }

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h6"> MTD Salt Loaded: </Typography>
                <Typography variant="h4">Operators</Typography>
                <Grid container spacing={3}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Previous Operator</InputLabel>
                            <Select 
                            defaultValue = ""
                            name='previous_operator'
                            value={prBrineSection.previous_operator || ''}
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
                            value={prBrineSection.present_operator || ''}
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
                        label='Salt loaded'
                        placeholder="6-10"
                        className={classes.input}
                        name='salt_loaded'
                        value={prBrineSection.salt_loaded || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Polished Brine Concentration'
                        placeholder="280-320 gpl"
                        className={classes.input}
                        name='pbrine_conc'
                        value={prBrineSection.pbrine_conc || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Precoat Operating Hours' 
                        placeholder=">= 75 hours" 
                        className={classes.input}
                        name='precoat_op_hours'
                        value={prBrineSection.precoat_op_hours || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Ca+Mg Concentration' 
                        placeholder="5 max" 
                        className={classes.input}
                        name='camg_conc'
                        value={prBrineSection.camg_conc || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Excess NaOH Concentration' 
                        placeholder="0.1 - 1.5" 
                        className={classes.input}
                        name='xcess_naoh_conc'
                        value={prBrineSection.xcess_naoh_conc || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Differential Pressure in Precoat' 
                        placeholder="0.2" 
                        className={classes.input}
                        name='diff_pressure_precoat'
                        value={prBrineSection.diff_pressure_precoat || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Brine Overflow'
                        placeholder=""
                        className={classes.input}
                        name='brine_overflow'
                        value={prBrineSection.brine_overflow || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Excess Na2CO3 Concentration'
                        placeholder="0.1 - 1.5"
                        className={classes.input}
                        name='xcess_na2co3_conc'
                        value={prBrineSection.xcess_na2co3_conc || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Precoat Flow Rate' 
                        placeholder="20 minutes"
                        className={classes.input}
                        name='precoat_flowrate'
                        value={prBrineSection.precoat_flowrate || ''}
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
                            value={prBrineSection.remarks || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default BrineTab