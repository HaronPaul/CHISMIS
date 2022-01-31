import React from "react";
import {Typography, makeStyles, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useSelector, useDispatch} from 'react-redux'
import { addUsages } from "../../redux/sectionSlice";

const useStyles = makeStyles({
    formControl: {
        minWidth: '100%',
    },
    input: {
        minWidth: '100%',
    },
    container: {
        marginBottom: '3%',
    }
})

const SpecificUsagesTab = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const {usagesSection} = useSelector((state) => state.section)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addUsages({name, value}))
    }   

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">Specific Usages - Actual Consumption</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='Salt' placeholder="" className={classes.input}
                        name='ac_salt'
                        value={usagesSection.ac_salt || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Soda Ash' placeholder="" className={classes.input}
                        name='ac_soda_ash'
                        value={usagesSection.ac_soda_ash || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOH' placeholder="" className={classes.input}
                        name='ac_naoh'
                        value={usagesSection.ac_naoh || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='HCl' placeholder="" className={classes.input}
                        name='ac_hcl'
                        value={usagesSection.ac_hcl || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='BaCl2' placeholder="" className={classes.input}
                        name='ac_bacl2'
                        value={usagesSection.ac_bacl2 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Flocullant' placeholder="" className={classes.input}
                        name='ac_flocullant'
                        value={usagesSection.ac_flocullant || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Sodium Sulfite' placeholder="" className={classes.input}
                        name='ac_na2so3'
                        value={usagesSection.ac_na2so3 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Alpha Cellulose' placeholder="" className={classes.input}
                        name='ac_alpha_cellulose'
                        value={usagesSection.ac_alpha_cellulose || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Power' placeholder="" className={classes.input}
                        name='ac_power'
                        value={usagesSection.ac_power || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Evaporation' placeholder="" className={classes.input}
                        name='ac_steam_evap'
                        value={usagesSection.ac_steam_evap || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Brine' placeholder="" className={classes.input}
                        name='ac_steam_brine'
                        value={usagesSection.ac_steam_brine || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Specific Usages - per DMT NaOH</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='Salt' placeholder="" className={classes.input}
                        name='pdn_salt'
                        value={usagesSection.pdn_salt || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Soda Ash' placeholder="" className={classes.input}
                        name='pdn_soda_ash'
                        value={usagesSection.pdn_soda_ash || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOH' placeholder="" className={classes.input}
                        name='pdn_naoh'
                        value={usagesSection.pdn_naoh || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='HCl' placeholder="" className={classes.input}
                        name='pdn_hcl'
                        value={usagesSection.pdn_hcl || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='BaCl2' placeholder="" className={classes.input}
                        name='pdn_bacl2'
                        value={usagesSection.pdn_bacl2 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Flocullant' placeholder="" className={classes.input}
                        name='pdn_folcullant'
                        value={usagesSection.pdn_folcullant || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Sodium Sulfite' placeholder="" className={classes.input}
                        name='pdn_na2so3'
                        value={usagesSection.pdn_na2so3 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={3} sm={2} xs={6}>
                        <TextField label='Alpha Cellulose' placeholder="" className={classes.input}
                        name='pdn_alpha_cellulose'
                        value={usagesSection.pdn_alpha_cellulose || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Power' placeholder="" className={classes.input}
                        name='pdn_power'
                        value={usagesSection.pdn_power || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Evaporation' placeholder="" className={classes.input}
                        name='pdn_steam_evap'
                        value={usagesSection.pdn_steam_evap || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Brine' placeholder="" className={classes.input}
                        name='pdn_steam_brine'
                        value={usagesSection.pdn_steam_brine || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Environment Monitoring</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='CLT pH' placeholder="" className={classes.input}
                        name='clt_ph'
                        value={usagesSection.clt_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Cold Well pH' placeholder="" className={classes.input}
                         name='cold_well_ph'
                        value={usagesSection.cold_well_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Total pH' placeholder="" className={classes.input}
                         name='total_ph'
                        value={usagesSection.total_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='After Digester pH' placeholder="" className={classes.input}
                        name='after_digester_ph'
                        value={usagesSection.after_digester_ph || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Product Transfers</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='50% NaOH' placeholder="" className={classes.input}
                        name='naoh_50'
                        value={usagesSection.naoh_50 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='32% NaOH' placeholder="" className={classes.input}
                         name='naoh_32'
                        value={usagesSection.naoh_32 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='HCl' placeholder="" className={classes.input}
                         name='hcl'
                        value={usagesSection.hcl || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOCl' placeholder="" className={classes.input}
                         name='naocl'
                        value={usagesSection.naocl || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOCl to waste treatment' placeholder="" className={classes.input}
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