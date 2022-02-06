import React from "react";
import {Select, MenuItem, FormControl, InputLabel, Typography, Grid, TextField} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { addHcl } from "../../redux/sectionSlice";
import { addErrors } from "../../redux/errorSlice";
import ErrorSection from "./ErrorSection";

const HCLTab = () => {
    const dispatch = useDispatch()
    const {hclSection} = useSelector((state) => state.section)
    const {hclErrors} = useSelector((state) => state.error)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addHcl({name, value}))
    }   

    return( 
        <>
            <div style={{ marginBottom: '2%'}}>
                {hclErrors.length === 0? <></>:<ErrorSection errors={hclErrors}/>}
                <Typography variant="h4" style={{marginBottom: '1%'}}>Operators</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl style={{minWidth: '100%'}}>
                            <InputLabel id="prev_op_hcl">Previous Operator</InputLabel>
                            <Select
                            labelid="prev_op_hcl"
                            label="Previous Operator"
                            defaultValue = ""
                            name='previous_operator'
                            value={hclSection.previous_operator || ''}
                            onChange={handleChange}>
                                <MenuItem value={'Haron Paul Lorente'}> Haron Paul Lorente</MenuItem>
                                <MenuItem value={'Hannah Patriz Lorente'}>Hannah Patriz Lorente</MenuItem>
                                <MenuItem value={'Jazon Troy Jaralve'}>Jazon Troy Jaralve</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl style={{minWidth: '100%'}}>
                            <InputLabel id="pres_op_hcl">Present Operator</InputLabel>
                            <Select
                            labelid="pres_op_hcl"
                            label="Present Operator"
                            defaultValue = ""
                            name='present_operator'
                            value={hclSection.present_operator || ''}
                            onChange={handleChange}>
                                <MenuItem value={'Haron Paul Lorente'}> Haron Paul Lorente</MenuItem>
                                <MenuItem value={'Hannah Patriz Lorente'}>Hannah Patriz Lorente</MenuItem>
                                <MenuItem value={'Jazon Troy Jaralve'}>Jazon Troy Jaralve</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            
            <div style={{ marginBottom: '2%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Other Information</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={4} xs={4}>
                        <TextField 
                        label='HCL Synthesis Efficiency'
                        placeholder="< 11.1 dmt"
                        style= {{minWidth: '100%'}}
                        type="number"
                        name='hcl_synth_eff'
                        value={hclSection.hcl_synth_eff || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='HCL Production'
                        type="number"
                        style= {{minWidth: '100%'}}
                        name='hcl_prod'
                        value={hclSection.hcl_prod || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Scrubbed Chlorine Temperature'
                        type="number"
                        style= {{minWidth: '100%'}}
                        name='scrubbed_cl_temp'
                        value={hclSection.scrubbed_cl_temp || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='HCL product temperature'
                        type="number"
                        style= {{minWidth: '100%'}}
                        name='hcl_prod_temp'
                        value={hclSection.hcl_prod_temp || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='HCL concentration'
                        type="number"
                        style= {{minWidth: '100%'}}
                        name='hcl_conc'
                        value={hclSection.hcl_conc || ''}
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='HCL specific gravity'
                        placeholder="> 3.4"
                        style= {{minWidth: '100%'}}
                        name='hcl_sg'
                        value={hclSection.hcl_sg || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Sigri cooling water'
                        placeholder="< 299.2"
                        style= {{minWidth: '100%'}}
                        name='sigri_cooling_water'
                        value={hclSection.sigri_cooling_water || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='HCL Space'
                        type="number"
                        style= {{minWidth: '100%'}}
                        name='hcl_space'
                        value={hclSection.hcl_space || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='ClH2O flow rate'
                        type="number"
                        style= {{minWidth: '100%'}}
                        name='clh20_flowrate'
                        value={hclSection.clh20_flowrate || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Sigri inlet pressure chlorine'
                        type="number"
                        style= {{minWidth: '100%'}}
                        name='sigri_inlet_pressure_c'
                        value={hclSection.sigri_inlet_pressure_c || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Sigri inlet pressure hydrogen'
                        type="number"
                        style= {{minWidth: '100%'}}
                        name='sigri_inlet_pressure_h'
                        value={hclSection.sigri_inlet_pressure_h || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div style={{ marginBottom: '2%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Operational Remarks</Typography>
                <Grid container spacing={4}>
                    <Grid item lg={12} sm={12} xs={12}>
                        <TextField
                            variant="outlined"
                            label="Operational Remarks"
                            multiline
                            maxRows={4}
                            style= {{minWidth: '100%'}}
                            name='remarks'
                            value={hclSection.remarks || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HCLTab