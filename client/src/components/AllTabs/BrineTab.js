import React from "react";
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel, TextField} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addPrBrine } from "../../redux/sectionSlice";
import ErrorSection from './ErrorSection'


const BrineTab = () => {
    const dispatch = useDispatch()
    const {prBrineSection} = useSelector((state) => state.section)
    const {prBrineErrors} = useSelector((state) => state.error)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addPrBrine({name, value}))
    }

    return(
        <>
            <div style ={{marginBottom: '3%'}}>
                {prBrineErrors.length === 0? <></>:<ErrorSection errors={prBrineErrors} type="prbrine"/>}
                <Typography variant="h6" style ={{marginBottom: '1%'}}> MTD Salt Loaded: </Typography>
                <Typography variant="h4" style ={{marginBottom: '1%'}}>Operators</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl style ={{minWidth: '100%'}}>
                            <InputLabel id="prev_op_brine">Previous Operator</InputLabel>
                            <Select 
                            labelid="prev_op_brine"
                            label="Previous Operator"
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
                        <FormControl style ={{minWidth: '100%'}}>
                            <InputLabel id="pres_op_brine">Present Operator</InputLabel>
                            <Select
                            labelid="pres_op_brine"
                            label="Present Operator"
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
            
            <div style ={{marginBottom: '3%'}}>
                <Typography variant="h4" style ={{marginBottom: '1%'}}>Parameters</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={4} xs={4}>
                        <TextField
                        label='Salt loaded'
                        placeholder="6-10"
                        type="number"
                        style ={{minWidth: '100%'}}
                        name='salt_loaded'
                        value={prBrineSection.salt_loaded || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Polished Brine Concentration'
                        placeholder="280-320 gpl"
                        type="number"
                        style ={{minWidth: '100%'}}
                        name='pbrine_conc'
                        value={prBrineSection.pbrine_conc || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Precoat Operating Hours' 
                        placeholder=">= 75 hours" 
                        type="number"
                        style ={{minWidth: '100%'}}
                        name='precoat_op_hours'
                        value={prBrineSection.precoat_op_hours || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Ca+Mg Concentration' 
                        placeholder="5 max" 
                        type="number"
                        style ={{minWidth: '100%'}}
                        name='camg_conc'
                        value={prBrineSection.camg_conc || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Excess NaOH Concentration' 
                        placeholder="0.1 - 1.5" 
                        type="number"
                        style ={{minWidth: '100%'}}
                        name='xcess_naoh_conc'
                        value={prBrineSection.xcess_naoh_conc || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Differential Pressure in Precoat' 
                        placeholder="0.2" 
                        type="number"
                        style ={{minWidth: '100%'}}
                        name='diff_pressure_precoat'
                        value={prBrineSection.diff_pressure_precoat || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Brine Overflow'
                        placeholder=""
                        type="number"
                        style ={{minWidth: '100%'}}
                        name='brine_overflow'
                        value={prBrineSection.brine_overflow || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField
                        label='Excess Na2CO3 Concentration'
                        placeholder="0.1 - 1.5"
                        type="number"
                        style ={{minWidth: '100%'}}
                        name='xcess_na2co3_conc'
                        value={prBrineSection.xcess_na2co3_conc || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={4} xs={4}>
                        <TextField 
                        label='Precoat Flow Rate' 
                        placeholder="20 minutes"
                        type="number"
                        style ={{minWidth: '100%'}}
                        name='precoat_flowrate'
                        value={prBrineSection.precoat_flowrate || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div style ={{marginBottom: '3%'}}>
                <Typography variant="h4" style ={{marginBottom: '1%'}}>Operational Remarks</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={12} sm={12} xs={12}>
                        <TextField
                            variant="outlined"
                            label="Operational Remarks"
                            multiline
                            maxRows={4}
                            style ={{minWidth: '100%'}}
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