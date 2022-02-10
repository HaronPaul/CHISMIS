import React from "react";
import {Select, MenuItem, FormControl, InputLabel, Typography, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux'
import { addNaocl } from "../../redux/sectionSlice";
import ErrorSection from "./ErrorSection";

const NaCLOTab = () => {
    const dispatch = useDispatch()
    const {nacloSection} = useSelector((state) => state.section)
    const {nacloErrors} = useSelector((state)=>state.error)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addNaocl({name, value}))
    }   

    return(
        <>
            <div style = {{marginBottom: '3%'}}>
                {nacloErrors.length === 0? <></>:<ErrorSection errors={nacloErrors} type="naclo"/>}
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Operators</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl style = {{minWidth: '100%'}}>
                            <InputLabel id="prev_op_naclo">Previous Operator</InputLabel>
                            <Select 
                            labelid="prev_op_naclo"
                            label="Previous Operator"
                            defaultValue = ""
                            name='previous_operator'
                            value={nacloSection.previous_operator || ''}
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
                            <InputLabel id="pres_op_naclo">Present Operator</InputLabel>
                            <Select
                            labelid="pres_op_naclo"
                            label="Present Operator" 
                            defaultValue = ""
                            name='present_operator'
                            value={nacloSection.present_operator || ''}
                            onChange={handleChange}>
                                <MenuItem value={'Haron Paul Lorente'}> Haron Paul Lorente</MenuItem>
                                <MenuItem value={'Hannah Patriz Lorente'}>Hannah Patriz Lorente</MenuItem>
                                <MenuItem value={'Jazon Troy Jaralve'}>Jazon Troy Jaralve</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>

            <div style = {{marginBottom: '3%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>NaCLO Concentration</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField
                        type="number" 
                        label='Circulation Tank I' 
                        placeholder=""
                        style = {{minWidth: '100%'}}
                        name='naclo_ct1'
                        value={nacloSection.naclo_ct1 || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField
                        type="number" 
                        label='Circulation Tank II' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='naclo_ct2'
                        value={nacloSection.naclo_ct2 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField
                        type="number"
                        label='Circulation Tank III'
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='naclo_ct3'
                        value={nacloSection.naclo_ct3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Circulation Tank IV' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='naclo_ct4'
                        value={nacloSection.naclo_ct4 || ''}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>
            
            <div style = {{marginBottom: '3%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Filter Batches</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField
                        type="number" 
                        label='Filter Line I'
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='fline1'
                        value={nacloSection.fline1 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField
                        type="number" 
                        label='Filter Line II'
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='fline2'
                        value={nacloSection.fline2 || ''}
                        onChange={handleChange}/ >
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Filter Line III'
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='fline3'
                        value={nacloSection.fline3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Filter Line IV' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='fline4'
                        value={nacloSection.fline4 || ''}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>

            <div style = {{marginBottom: '3%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Excess NaOH Concentration</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Circulation Tank I' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='naoh_ct1'
                        value={nacloSection.naoh_ct1 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Circulation Tank II' 
                        placeholder="" 
                        style = {{minWidth: '100%'}} 
                        name='naoh_ct2'
                        value={nacloSection.naoh_ct2 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Circulation Tank III'
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='naoh_ct3'
                        value={nacloSection.naoh_ct3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Circulation Tank IV' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='naoh_ct4'
                        value={nacloSection.naoh_ct4 || ''}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>
            
            <div style = {{marginBottom: '3%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Storage</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Storage I' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='storage1'
                        value={nacloSection.storage1 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField
                        type="number" 
                        label='Storage II' 
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='storage2'
                        value={nacloSection.storage2 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField
                        type="number" 
                        label='Storage III'
                        placeholder="" 
                        style = {{minWidth: '100%'}}
                        name='storage3'
                        value={nacloSection.storage3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='Storage IV' 
                        placeholder="" 
                        style = {{minWidth: '100%'}} 
                        name='storage4'
                        value={nacloSection.storage4 || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div style = {{marginBottom: '3%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Production and Space</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={6} sm={4} xs={6}>
                        <TextField
                            variant="outlined"
                            label="Space"
                            type="number"
                            multiline
                            maxRows={4}
                            style = {{minWidth: '100%'}}
                            name='space'
                            value={nacloSection.space || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={6} sm={4} xs={6}>
                        <TextField
                            variant="outlined"
                            label="Production"
                            type="number"
                            multiline
                            maxRows={4}
                            style = {{minWidth: '100%'}}
                            name='production'
                            value={nacloSection.production || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </div>

            <div style = {{marginBottom: '3%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Operational Remarks</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={12} sm={12} xs={12}>
                        <TextField
                            variant="outlined"
                            label="Operational Remarks"
                            multiline
                            maxRows={4}
                            style = {{minWidth: '100%'}}
                            name='remarks'
                            value={nacloSection.remarks || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default NaCLOTab