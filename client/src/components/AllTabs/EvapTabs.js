import React, { useState } from "react";
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel, TextField} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addEvap } from "../../redux/sectionSlice";
import ErrorSection from "./ErrorSection";

const EvapTabs = () => {
    const dispatch = useDispatch()
    const {evapSection} = useSelector((state) => state.section)
    const {evapErrors} = useSelector((state) => state.error)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addEvap({name, value}))
    }   

    return(
        <>
            <div style={{ marginBottom: '3%'}}>
                {evapErrors.length === 0? <></>:<ErrorSection errors={evapErrors} type="evap"/>}
                <Typography variant="h4" style={{ marginBottom: '1%'}}>Operators</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl style = {{minWidth: '100%'}}>
                            <InputLabel id="prev_op_evap">Previous Operator</InputLabel>
                            <Select
                            labelid="prev_op_evap"
                            label="Previous Operator"
                            defaultValue = ""
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
                        <FormControl style = {{minWidth: '100%'}}>
                            <InputLabel id="pres_op_evap">Present Operator</InputLabel>
                            <Select 
                            labelid="pres_op_evap"
                            label="Present Operator"
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
            <div style={{ marginBottom: '3%'}}>
                <Typography variant="h4" style={{ marginBottom: '1%'}}>Parameters</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={4} xs={4}>
                        <Typography>HCl Synthesis Efficiency: [Value placeholder]</Typography>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='NaOH Production'
                        placeholder=""
                        type="number"
                        style = {{minWidth: '100%'}}
                        name='naoh_prod'
                        value={evapSection.naoh_prod || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Evap Feed Flow Rate'
                        placeholder=""
                        type="number"
                        style = {{minWidth: '100%'}}
                        name='evap_feed_flowrate'
                        value={evapSection.evap_feed_flowrate || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='NaOH Concentration' 
                        placeholder=""
                        type="number" 
                        style = {{minWidth: '100%'}}
                        name='naoh_conc'
                        value={evapSection.naoh_conc || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='NaOH Specific Gravity' 
                        placeholder=""
                        type="number" 
                        style = {{minWidth: '100%'}}
                        name='naoh_sg'
                        value={evapSection.naoh_sg || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Tank 8 Level'
                        placeholder=""
                        type="number" 
                        style = {{minWidth: '100%'}}
                        name='t8_level'
                        value={evapSection.t8_level || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Tank 9 Level' 
                        placeholder=""
                        type="number" 
                        style = {{minWidth: '100%'}}
                        name='t9_level'
                        value={evapSection.t9_level || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Vacuum Pressure' 
                        placeholder=""
                        type="number" 
                        style = {{minWidth: '100%'}}
                        name='vacuum_pressure'
                        value={evapSection.vacuum_pressure || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div style={{ marginBottom: '3%'}}>
                <Typography variant="h4" style={{ marginBottom: '1%'}}>Operational Remarks</Typography>
                <Grid container spacing={4}>
                    <Grid item lg={12} sm={12} xs={12}>
                        <TextField
                            variant="outlined"
                            label="Operational Remarks"
                            multiline
                            maxRows={4}
                            style = {{minWidth: '100%'}}
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