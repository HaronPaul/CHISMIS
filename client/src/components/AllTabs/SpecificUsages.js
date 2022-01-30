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
                        name='present_operator'
                        value={usagesSection.present_operator || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Alpha Cellulose' placeholder="" className={classes.input}
                        name='present_operator'
                        value={usagesSection.present_operator || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Power' placeholder="" className={classes.input}
                        name='present_operator'
                        value={usagesSection.present_operator || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Evaporation' placeholder="" className={classes.input}
                        name='present_operator'
                        value={usagesSection.present_operator || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Brine' placeholder="" className={classes.input}
                         name='present_operator'
                        value={usagesSection.present_operator || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Specific Usages - per DMT NaOH</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='Salt' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Soda Ash' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOH' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='HCl' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='BaCl2' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Flocullant' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Sodium Sulfite' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={3} sm={2} xs={6}>
                        <TextField label='Alpha Cellulose - kg used backwash to date' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Power' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Evaporation' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Steam Brine' placeholder="" className={classes.input}/>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Environment Monitoring</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='CLT pH' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Cold Well pH' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='Total pH' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='After Digester pH' placeholder="" className={classes.input}/>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Product Transfers</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {2} sm={2} xs={6}>
                        <TextField label='50% NaOH' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='32% NaOH' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='HCl' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOCl' placeholder="" className={classes.input}/>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={6}>
                        <TextField label='NaOCl to waste treatment' placeholder="" className={classes.input}/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SpecificUsagesTab