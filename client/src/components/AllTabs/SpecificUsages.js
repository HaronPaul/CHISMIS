import React from "react";
import {Typography, Grid, TextField} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
import { addUsages } from "../../redux/sectionSlice";
import ErrorSection from './ErrorSection'

const SpecificUsagesTab = () => {
    const dispatch = useDispatch()
    const {usagesSection} = useSelector((state) => state.section)
    const {usagesErrors} = useSelector((state)=>state.error)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addUsages({name, value}))
    }   

    return(
        <>
            {usagesErrors.length === 0? <></>:<ErrorSection errors={usagesErrors} type="usages"/>}
            <div style={{marginBottom: '3%'}}>
                <Typography variant="h4" style={{marginBottom: '1%'}}>Specific Usages - Actual Consumption</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='Salt' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_salt'
                        error={usagesSection.ac_salt? (usagesSection.ac_salt > 1.74? true: false):false}
                        placeholder="<= 1.74"
                        value={usagesSection.ac_salt || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Soda Ash' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_soda_ash'
                        placeholder="<= 5.6"
                        error={usagesSection.ac_soda_ash? (usagesSection.ac_soda_ash > 5.6? true: false):false}
                        value={usagesSection.ac_soda_ash || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_naoh'
                        placeholder="<= 0.014"
                        error={usagesSection.ac_naoh? (usagesSection.ac_naoh > 0.014? true: false):false}
                        value={usagesSection.ac_naoh || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='HCl' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_hcl'
                        placeholder="<= 0.0244"
                        error={usagesSection.ac_hcl? (usagesSection.ac_hcl > 0.0244? true: false):false}
                        value={usagesSection.ac_hcl || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='BaCl2' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_bacl2'
                        placeholder="<= 1.6"
                        error={usagesSection.ac_bacl2? (usagesSection.ac_bacl2 > 1.6? true: false):false}
                        value={usagesSection.ac_bacl2 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Flocullant' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_flocullant'
                        placeholder="<= 13.9"
                        error={usagesSection.ac_flocullant? (usagesSection.ac_flocullant > 13.9? true: false):false}
                        value={usagesSection.ac_flocullant || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Sodium Sulfite' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_na2so3'
                        placeholder="<= 2.2"
                        error={usagesSection.ac_na2so3? (usagesSection.ac_na2so3 > 2.2? true: false):false}
                        value={usagesSection.ac_na2so3 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Alpha Cellulose' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_alpha_cellulose'
                        placeholder="<= 30"
                        error={usagesSection.ac_alpha_cellulose? (usagesSection.ac_alpha_cellulose > 30? true: false):false}
                        value={usagesSection.ac_alpha_cellulose || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Power' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_power'
                        placeholder="<= 2350"
                        error={usagesSection.ac_power? (usagesSection.ac_power > 2350? true: false):false}
                        value={usagesSection.ac_power || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Evaporation' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_steam_evap'
                        placeholder="<= 1.31"
                        error={usagesSection.ac_steam_evap? (usagesSection.ac_steam_evap > 1.31? true: false):false}
                        value={usagesSection.ac_steam_evap || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Brine' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_steam_brine'
                        placeholder="<= 0.30"
                        error={usagesSection.ac_steam_brine? (usagesSection.ac_steam_brine > 0.30? true: false):false}
                        value={usagesSection.ac_steam_brine || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            {/* <div style={{marginBottom: '3%'}}>
                <Typography variant="h4" style={{marginBottom: '1%'}}>Specific Usages - per DMT NaOH</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='Salt' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_salt'
                        value={usagesSection.pdn_salt || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Soda Ash' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_soda_ash'
                        value={usagesSection.pdn_soda_ash || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_naoh'
                        value={usagesSection.pdn_naoh || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='HCl' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_hcl'
                        value={usagesSection.pdn_hcl || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='BaCl2' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_bacl2'
                        value={usagesSection.pdn_bacl2 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Flocullant' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_folcullant'
                        value={usagesSection.pdn_folcullant || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Sodium Sulfite' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_na2so3'
                        value={usagesSection.pdn_na2so3 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={3} sm={2} xs={6}>
                        <TextField label='Alpha Cellulose' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_alpha_cellulose'
                        value={usagesSection.pdn_alpha_cellulose || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Power' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_power'
                        value={usagesSection.pdn_power || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Evaporation' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_steam_evap'
                        value={usagesSection.pdn_steam_evap || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Brine' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='pdn_steam_brine'
                        value={usagesSection.pdn_steam_brine || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div> */}

            <div style={{marginBottom: '3%'}}>
                <Typography variant="h4" style={{marginBottom: '1%'}}>Environment Monitoring</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='CLT pH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='clt_ph'
                        value={usagesSection.clt_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Cold Well pH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='cold_well_ph'
                        value={usagesSection.cold_well_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Total pH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='total_ph'
                        value={usagesSection.total_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='After Digester pH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='after_digester_ph'
                        value={usagesSection.after_digester_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div style={{marginBottom: '3%'}}>
                <Typography variant="h4" style={{marginBottom: '1%'}}>Product Transfers</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='50% NaOH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='naoh_50'
                        value={usagesSection.naoh_50 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='32% NaOH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='naoh_32'
                        value={usagesSection.naoh_32 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='HCl' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='hcl'
                        value={usagesSection.hcl || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOCl' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='naocl'
                        value={usagesSection.naocl || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOCl to waste treatment' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='naocl_waste'
                        value={usagesSection.naocl_waste || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SpecificUsagesTab