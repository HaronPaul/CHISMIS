import React from "react";
import {Select, MenuItem, FormControl, InputLabel, Typography, Grid, TextField} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
import { addQcbrine } from "../../redux/sectionSlice";

const QCBrine = () => {
    const dispatch = useDispatch()

    const {qcBrineSection} = useSelector((state) => state.section)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addQcbrine({name, value}))
    }   

    return(
        <>
            <div style = {{marginBottom: '3%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Quality Control Brine</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='SPB Ca+MG' 
                        placeholder="15+5 ppb mx" 
                        style = {{minWidth: '100%'}}
                        name='spb_camg'
                        value={qcBrineSection.spb_camg || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='SPB NaClO3' 
                        placeholder="20 gpl max" 
                        style = {{minWidth: '100%'}}
                        name='spb_naclo3'
                        value={qcBrineSection.spb_naclo3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='SPB Na2SO4' 
                        placeholder="7 gpl max" 
                        style = {{minWidth: '100%'}}
                        name='spb_na2so4'
                        value={qcBrineSection.spb_na2so4 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='DB NaClO3' 
                        placeholder="20 gpl mx" 
                        style = {{minWidth: '100%'}}
                        name='db_naclo3'
                        value={qcBrineSection.db_naclo3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='DB NaCl' 
                        placeholder=" gpl mx" 
                        style = {{minWidth: '100%'}}
                        name='db_nacl'
                        value={qcBrineSection.db_nacl || ''}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>

            <div style = {{marginBottom: '3%'}}>
                <Typography variant="h4" style = {{marginBottom: '1%'}}>Quality Control Brine and Product</Typography>
                <Grid container spacing={1}>
                    <Grid item lg={3} sm={4} xs={6}>
                        <FormControl style = {{minWidth: '100%'}}>
                            <InputLabel id="dbfree">DB Free Cl Quality</InputLabel>
                            <Select
                            labelid="dbfree"
                            label="DB Free Cl Quality"
                            defaultValue = ""
                            name='db_free_cl'
                            value={qcBrineSection.db_free_cl || ''}
                            onChange={handleChange}>
                                <MenuItem value={'POSITIVE'}> Positive</MenuItem>
                                <MenuItem value={'NEGATIVE'}>Negative</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField
                        type="number" 
                        label='50% NaOH Concentration' 
                        placeholder="48-50" 
                        style = {{minWidth: '100%'}}
                        name='naoh_conc_50'
                        value={qcBrineSection.naoh_conc_50 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        type="number"
                        label='32% NaOH Concentration' 
                        placeholder="30-32" 
                        style = {{minWidth: '100%'}}
                        name='naoh_conc_32'
                        value={qcBrineSection.naoh_conc_32 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField
                        type="number" 
                        label='NaOH Fe Concentration' 
                        placeholder="5 ppm max" 
                        style = {{minWidth: '100%'}}
                        name='naohfe_conc'
                        value={qcBrineSection.naohfe_conc || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField
                        type="number" 
                        label='HCl on-line' 
                        placeholder="32-33.5" 
                        style = {{minWidth: '100%'}}
                        name='hcl_online'
                        value={qcBrineSection.hcl_online || ''}
                        onChange={handleChange} />
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
                            value={qcBrineSection.remarks || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default QCBrine