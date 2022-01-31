import React from "react";
import {Typography, makeStyles, Grid, Select, MenuItem, FormControl, InputLabel} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addEval } from "../../redux/sectionSlice";

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

const SPEval = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const {evalSection} = useSelector((state) => state.section)
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(addEval({name, value}))
    }   

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">SP Evaluation</Typography>
                <Grid container spacing={3}>
                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Planned Volume Attained</InputLabel>
                            <Select 
                            defaultValue = ''
                            name='plan_vol_att'
                            value={evalSection.plan_vol_att || ''}
                            onChange={handleChange}>
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Production No. Off Specs</InputLabel>
                            <Select
                            defaultValue = ''
                            name='prod_num_offspecs'
                            value={evalSection.prod_num_offspecs || ''}
                            onChange={handleChange}>
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Specific Usage lte Standard</InputLabel>
                            <Select 
                            defaultValue = ''
                            name='spec_usage'
                            value={evalSection.spec_usage || ''}
                            onChange={handleChange}>
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Process Control within Range</InputLabel>
                            <Select 
                            defaultValue = ''
                            name='proc_ctrl_range'
                            value={evalSection.proc_ctrl_range || ''}
                            onChange={handleChange}>
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Manpower no 24hrs duty</InputLabel>
                            <Select 
                            defaultValue = ''
                            name='manpower_no_24duty'
                            value={evalSection.manpower_no_24duty || ''}
                            onChange={handleChange}>
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Shift Report Completeness</InputLabel>
                            <Select
                            defaultValue = ''
                            name='shift_report_completeness'
                            value={evalSection.shift_report_completeness || ''}
                            onChange={handleChange}>
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Shift Rating</InputLabel>
                            <Select
                            defaultValue = ''
                            name='shift_rating'
                            value={evalSection.shift_rating || ''}
                            onChange={handleChange}>
                                <MenuItem value={'FAIL'}>FAILURE</MenuItem>
                                <MenuItem value={'POOR'}>POOR</MenuItem>
                                <MenuItem value={'LOW SATISFACTORY'}>LOW SATISFACTORY</MenuItem>
                                <MenuItem value={'SATISFACTORY'}>SATISFACTORY</MenuItem>
                                <MenuItem value={'HIGH SATISFACTORY'}>HIGH SATISFACTORY</MenuItem>
                                <MenuItem value={'PERFECT'}>PERFECT</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SPEval