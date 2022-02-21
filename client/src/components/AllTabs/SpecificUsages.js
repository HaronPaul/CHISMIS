import React, { useEffect, useState } from "react";
import {Typography, Grid, TextField} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
import { addUsages, calculatePDN } from "../../redux/sectionSlice";
import ErrorSection from './ErrorSection'
let actual_consumptions = ['ac_salt', 'ac_soda_ash', 'ac_naoh', 'ac_hcl', 'ac_bacl2', 'ac_flocullant', 'ac_na2so3', 'ac_alpha_cellulose', 'ac_power', 'ac_steam_brine']

const SpecificUsagesTab = () => {
    const dispatch = useDispatch()
    const {usagesSection, electroSection, evapSection} = useSelector((state) => state.section)
    const {usagesErrors} = useSelector((state)=>state.error)
    const [selectedState, setSelectedState] = useState('')
   

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setSelectedState(name)

        //  Change the Actual Consumption value
        dispatch(addUsages({name, value}))

        var pdn_value
        if(actual_consumptions.includes(name) && electroSection.cell_liq_prod) {
            // console.log(name.slice(3, name.length))
            pdn_value = value / electroSection.cell_liq_prod
            // Change the perDMT value
            dispatch(addUsages({name: `pdn_${name.slice(3, name.length)}`, value: parseFloat(pdn_value).toFixed(2)}))   
        } else {
            dispatch(addUsages({name: `pdn_${name.slice(3, name.length)}`, value: ''}))
        }
    }

    // Side effect when actual steam evap and naoh production is changed
    useEffect(() => {
        if(usagesSection.ac_steam_evap && evapSection.naoh_prod) {
            var pdn_value = usagesSection.ac_steam_evap / evapSection.naoh_prod
            dispatch(addUsages({name: `pdn_steam_evap`, value: parseFloat(pdn_value).toFixed(2)}))
        }
    }, [usagesSection.ac_steam_evap, evapSection.naoh_prod])

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
                        value={usagesSection.ac_salt || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Soda Ash' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_soda_ash'
                        value={usagesSection.ac_soda_ash || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_naoh'
                        value={usagesSection.ac_naoh || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='HCl' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_hcl'
                        value={usagesSection.ac_hcl || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='BaCl2' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_bacl2'
                        value={usagesSection.ac_bacl2 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Flocullant' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_flocullant'
                        value={usagesSection.ac_flocullant || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Sodium Sulfite' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_na2so3'
                        value={usagesSection.ac_na2so3 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Alpha Cellulose' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_alpha_cellulose'
                        value={usagesSection.ac_alpha_cellulose || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Power' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_power'
                        value={usagesSection.ac_power || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Evaporation' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_steam_evap'
                        value={usagesSection.ac_steam_evap || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Brine' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='ac_steam_brine'
                        value={usagesSection.ac_steam_brine || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div style={{marginBottom: '3%'}}>
                <Typography variant="h4" style={{marginBottom: '1%'}}>Specific Usages - per DMT NaOH</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <Typography variant="h6">Salt: {usagesSection.pdn_salt} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">Soda Ash: {usagesSection.pdn_soda_ash} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">NaOH: {usagesSection.pdn_naoh} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">HCl: {usagesSection.pdn_hcl} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">BaCl2: {usagesSection.pdn_bacl2} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">Flocullant: {usagesSection.pdn_flocullant} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">Na2SO3: {usagesSection.pdn_na2so3} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">Alpha Cellulose: {usagesSection.pdn_alpha_cellulose} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">Power: {usagesSection.pdn_power} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">Steam Evap: {usagesSection.pdn_steam_evap} </Typography>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <Typography variant="h6">Steam Brine: {usagesSection.pdn_steam_brine} </Typography>
                    </Grid>
                </Grid>
            </div>

            <div style={{marginBottom: '3%'}}>
                <Typography variant="h4" style={{marginBottom: '1%'}}>Environment Monitoring</Typography>
                <Grid container spacing={1}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='CLT pH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='clt_ph'
                        error = {usagesSection.clt_ph? (usagesSection.clt_ph < 6.5 || usagesSection.clt_ph > 9? true: false):false}
                        value={usagesSection.clt_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Cold Well pH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='cold_well_ph'
                        error = {usagesSection.cold_well_ph? (usagesSection.cold_well_ph < 6.5 || usagesSection.cold_well_ph > 9? true: false):false}
                        value={usagesSection.cold_well_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Total pH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='total_ph'
                        error = {usagesSection.total_ph? (usagesSection.total_ph < 6.5 || usagesSection.total_ph > 9? true: false):false}
                        value={usagesSection.total_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='After Digester pH' placeholder="" style={{minWidth: '100%'}}
                        type="number"
                        name='after_digester_ph'
                        error = {usagesSection.after_digester_ph? (usagesSection.after_digester_ph < 6.5 || usagesSection.after_digester_ph > 9? true: false):false}
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