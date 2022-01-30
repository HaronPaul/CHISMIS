import React from "react";
import {Select, MenuItem, FormControl, InputLabel, Typography, makeStyles, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useSelector, useDispatch} from 'react-redux'
import { addQcbrine } from "../../redux/sectionSlice";

const useStyles = makeStyles({
    formControl: {
        minWidth: '100%',
    },
    input: {
        minWidth: '100%',
    },
    container: {
        marginBottom: '3%',
    },  
    header: {
        marginBottom: '1%'
    }
})

const QCBrine = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const {qcBrineSection} = useSelector((state) => state.section)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addQcbrine({name, value}))
    }   

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">Quality Control Brine</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField 
                        label='SPB Ca+MG' 
                        placeholder="15+5 ppb mx" 
                        className={classes.input}
                        name='spb_camg'
                        value={qcBrineSection.spb_camg || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='SPB NaClO3' 
                        placeholder="20 gpl max" 
                        className={classes.input}
                        name='spb_naclo3'
                        value={qcBrineSection.spb_naclo3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='SPB Na2SO4' 
                        placeholder="7 gpl max" 
                        className={classes.input}
                        name='spb_na2so4'
                        value={qcBrineSection.spb_na2so4 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='DB NaClO3' 
                        placeholder="20 gpl mx" 
                        className={classes.input}
                        name='db_naclo3'
                        value={qcBrineSection.db_naclo3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='DB NaCl' 
                        placeholder=" gpl mx" 
                        className={classes.input}
                        name='db_nacl'
                        value={qcBrineSection.db_nacl || ''}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Quality Control Brine and Product</Typography>
                <Grid container spacing={3}>
                    <Grid item lg={3} sm={4} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>DB Free Cl Quality</InputLabel>
                            <Select 
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
                        label='50% NaOH Concentration' 
                        placeholder="48-50" 
                        className={classes.input}
                        name='naoh_conc_50'
                        value={qcBrineSection.naoh_conc_50 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='32% NaOH Concentration' 
                        placeholder="30-32" 
                        className={classes.input}
                        name='naoh_conc_32'
                        value={qcBrineSection.naoh_conc_32 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='NaOH Fe Concentration' 
                        placeholder="5 ppm max" 
                        className={classes.input}
                        name='naohfe_conc'
                        value={qcBrineSection.naohfe_conc || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='HCl on-line' 
                        placeholder="32-33.5" 
                        className={classes.input}
                        name='hcl_online'
                        value={qcBrineSection.hcl_online || ''}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4" className={classes.header}>Operational Remarks</Typography>
                <Grid container spacing={4}>
                    <Grid item lg={12} sm={12} xs={12}>
                        <TextField
                            variant="outlined"
                            label="Operational Remarks"
                            multiline
                            maxRows={4}
                            className={classes.input}
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