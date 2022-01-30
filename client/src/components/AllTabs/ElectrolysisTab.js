import React from "react";
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel, makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addElectro } from "../../redux/sectionSlice";

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

const ElectrolysisTab = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const {electroSection} = useSelector((state) => state.section)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addElectro({name, value}))
    }

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">Operators</Typography>
                <Grid container spacing={3}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Previous Operator</InputLabel>
                            <Select
                            defaultValue = ""
                            name='previous_operator'
                            value={electroSection.previous_operator || ''}
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
                            value={electroSection.present_operator || ''}
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
                    <Grid item lg= {2} sm={4} xs={6}>
                        <TextField 
                        label='Electrolyzer Efficiency'
                        placeholder="" 
                        className={classes.input}
                        name='electro_eff'
                        value={electroSection.electro_eff || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='Cell Liquor Production' 
                        placeholder="11.90"
                        className={classes.input}
                        name='cell_liq_prod'
                        value={electroSection.cell_liq_prod || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField
                        label='SPB Inlet Temperature'
                        placeholder="60-90"
                        className={classes.input}
                        name='spb_inlet_temp'
                        value={electroSection.spb_inlet_temp || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='NaOH Inlet Temperature'
                        placeholder="60-90"
                        className={classes.input}
                        name='naoh_inlet_temp'
                        value={electroSection.naoh_inlet_temp || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='Chelate Operating Hours Tower A'
                        placeholder="42hrs/tk"
                        className={classes.input}
                        name='chelate_op_hours_ta'
                        value={electroSection.chelate_op_hours_ta || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='Chelate Operating Hours Tower B'
                        placeholder="42hrs/tk"
                        className={classes.input}
                        name='chelate_op_hours_tb'
                        value={electroSection.chelate_op_hours_tb || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField
                        label='NaOH Concentration'
                        placeholder="30% - 32%"
                        className={classes.input}
                        name='naoh_conc'
                        value={electroSection.naoh_conc || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='NaOH Specific Gravity'
                        placeholder="" 
                        className={classes.input}
                        name='naoh_sg'
                        value={electroSection.naoh_sg || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='NaOH Flow Rate'
                        placeholder="21 m³/hr" 
                        className={classes.input}
                        name='naoh_flowrate'
                        value={electroSection.naoh_flowrate || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='DB Free Chlorine Quality' 
                        placeholder="" 
                        className={classes.input}
                        name='db_free_cl_qual'
                        value={electroSection.db_free_cl_qual || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='Nitrogen Cylinders Available' 
                        placeholder="" 
                        className={classes.input}
                        name='num_n_cylinders'
                        value={electroSection.num_n_cylinders || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='Decomposer Operating Temp' 
                        placeholder="" 
                        className={classes.input}
                        name='decomposer_op_temp'
                        value={electroSection.decomposer_op_temp || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='DB Concentration'
                        placeholder="180-220" 
                        className={classes.input}
                        name='db_conc'
                        value={electroSection.db_conc || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        label='SPB concentration'
                        placeholder="280-320" 
                        className={classes.input}
                        name='spb_conc'
                        value={electroSection.spb_conc || ''}
                        onChange={handleChange}></TextField>
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
                            value={electroSection.remarks || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ElectrolysisTab