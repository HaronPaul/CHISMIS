import React from "react";
import {Select, MenuItem, FormControl, InputLabel, Typography, makeStyles, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from 'react-redux'
import { addNaocl } from "../../redux/sectionSlice";

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

const NaCLOTab = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const {nacloSection} = useSelector((state) => state.section)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addNaocl({name, value}))
    }   

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">Operators</Typography>
                <Grid container spacing={2}>
                    <Grid item lg={6} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Previous Operator</InputLabel>
                            <Select 
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
                        <FormControl className={classes.formControl}>
                            <InputLabel>Present Operator</InputLabel>
                            <Select defaultValue = ""
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

            <div className={classes.container}>
                <Typography variant="h4">NaCLO Concentration</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField 
                        label='Circulation Tank I' 
                        placeholder=""
                        className={classes.input}
                        name='naclo_ct1'
                        value={nacloSection.naclo_ct1 || ''}
                        onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Circulation Tank II' 
                        placeholder="" 
                        className={classes.input}
                        name='naclo_ct2'
                        value={nacloSection.naclo_ct2 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField
                        label='Circulation Tank III'
                        placeholder="" 
                        className={classes.input}
                        name='naclo_ct3'
                        value={nacloSection.naclo_ct3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Circulation Tank IV' 
                        placeholder="" 
                        className={classes.input}
                        name='naclo_ct4'
                        value={nacloSection.naclo_ct4 || ''}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>
            
            <div className={classes.container}>
                <Typography variant="h4">Filter Batches</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField 
                        label='Filter Line I'
                        placeholder="" 
                        className={classes.input}
                        name='fline1'
                        value={nacloSection.fline1 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Filter Line II'
                        placeholder="" 
                        className={classes.input}
                        name='fline2'
                        value={nacloSection.fline2 || ''}
                        onChange={handleChange}/ >
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Filter Line III'
                        placeholder="" 
                        className={classes.input}
                        name='fline3'
                        value={nacloSection.fline3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Filter Line IV' 
                        placeholder="" 
                        className={classes.input}
                        name='fline4'
                        value={nacloSection.fline4 || ''}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Excess NaOH Concentration</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField 
                        label='Circulation Tank I' 
                        placeholder="" 
                        className={classes.input}
                        name='naoh_ct1'
                        value={nacloSection.naoh_ct1 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Circulation Tank II' 
                        placeholder="" 
                        className={classes.input} 
                        name='naoh_ct2'
                        value={nacloSection.naoh_ct2 || ''}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Circulation Tank III'
                        placeholder="" 
                        className={classes.input}
                        name='naoh_ct3'
                        value={nacloSection.naoh_ct3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Circulation Tank IV' 
                        placeholder="" 
                        className={classes.input}
                        name='naoh_ct4'
                        value={nacloSection.naoh_ct4 || ''}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>
            
            <div className={classes.container}>
                <Typography variant="h4">Storage</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField 
                        label='Storage I' 
                        placeholder="" 
                        className={classes.input}
                        name='storage1'
                        value={nacloSection.storage1 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Storage II' 
                        placeholder="" 
                        className={classes.input}
                        name='storage2'
                        value={nacloSection.storage2 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Storage III'
                        placeholder="" 
                        className={classes.input}
                        name='storage3'
                        value={nacloSection.storage3 || ''}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField 
                        label='Storage IV' 
                        placeholder="" 
                        className={classes.input} 
                        name='storage4'
                        value={nacloSection.storage4 || ''}
                        onChange={handleChange}/>
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