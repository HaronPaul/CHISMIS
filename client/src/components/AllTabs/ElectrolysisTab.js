import React from "react";
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel, TextField} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addElectro } from "../../redux/sectionSlice";
import ErrorSection from './ErrorSection'

const ElectrolysisTab = () => {
    const dispatch = useDispatch()
    const {electroSection} = useSelector((state) => state.section)
    const {electroErrors} = useSelector((state) => state.error)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addElectro({name, value}))
    }

    return(
        <>
            <div style = {{  marginBottom: '3%'}}>
                {electroErrors.length === 0? <></>:<ErrorSection errors={electroErrors} type="electro"/>}
                <Typography variant="h4" style = {{  marginBottom: '1%'}}>Operators</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl style = {{minWidth: '100%'}}>
                            <InputLabel id="prev_op_electro">Previous Operator</InputLabel>
                            <Select
                            labelid="prev_op_electro"
                            label="Previous Operator"
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
                        <FormControl style = {{minWidth: '100%'}}>
                            <InputLabel id="pres_op_electro">Present Operator</InputLabel>
                            <Select 
                            labelid="pres_op_electro"
                            label="Present Operator"
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
            
            <div style = {{  marginBottom: '3%'}}>
                <Typography variant="h4" style = {{  marginBottom: '1%'}}>Other Information</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={4} xs={6}>
                        <TextField
                        type="number"
                        label='Electrolyzer Efficiency'
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='electro_eff'
                        value={electroSection.electro_eff || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Cell Liquor Production' 
                        placeholder="11.90"
                        style = {{minWidth: '100%'}}
                        name='cell_liq_prod'
                        value={electroSection.cell_liq_prod || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField
                        type="number"
                        label='SPB Inlet Temperature'
                        placeholder="60-90"
                        style = {{minWidth: '100%'}}
                        name='spb_inlet_temp'
                        value={electroSection.spb_inlet_temp || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='NaOH Inlet Temperature'
                        placeholder="60-90"
                        style = {{minWidth: '100%'}}
                        name='naoh_inlet_temp'
                        value={electroSection.naoh_inlet_temp || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Chelate Operating Hours Tower A'
                        placeholder="42hrs/tk"
                        style = {{minWidth: '100%'}}
                        name='chelate_op_hours_ta'
                        value={electroSection.chelate_op_hours_ta || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Chelate Operating Hours Tower B'
                        placeholder="42hrs/tk"
                        style = {{minWidth: '100%'}}
                        name='chelate_op_hours_tb'
                        value={electroSection.chelate_op_hours_tb || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField
                        type="number"
                        label='NaOH Concentration'
                        placeholder="30% - 32%"
                        style = {{minWidth: '100%'}}
                        name='naoh_conc'
                        value={electroSection.naoh_conc || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='NaOH Specific Gravity'
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='naoh_sg'
                        value={electroSection.naoh_sg || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='NaOH Flow Rate'
                        placeholder="21 m³/hr" 
                        style = {{minWidth: '100%'}}
                        name='naoh_flowrate'
                        value={electroSection.naoh_flowrate || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='DB Free Chlorine Quality' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='db_free_cl_qual'
                        value={electroSection.db_free_cl_qual || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Nitrogen Cylinders Available' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='num_n_cylinders'
                        value={electroSection.num_n_cylinders || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Decomposer Operating Temp' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='decomposer_op_temp'
                        value={electroSection.decomposer_op_temp || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='DB Concentration'
                        placeholder="180-220" 
                        style = {{minWidth: '100%'}}
                        name='db_conc'
                        value={electroSection.db_conc || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='SPB concentration'
                        placeholder="280-320" 
                        style = {{minWidth: '100%'}}
                        name='spb_conc'
                        value={electroSection.spb_conc || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                </Grid>
            </div>

            <div style = {{  marginBottom: '3%'}}>
                <Typography variant="h4" style = {{  marginBottom: '1%'}}>Operational Remarks</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={12} sm={12} xs={12}>
                        <TextField
                            variant="outlined"
                            label="Operational Remarks"
                            multiline
                            maxRows={4}
                            style = {{minWidth: '100%'}}
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