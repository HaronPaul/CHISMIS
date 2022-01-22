import React from "react";
import {Typography, makeStyles, Grid, Select, MenuItem, FormControl, InputLabel} from "@material-ui/core";


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
    
    const classes = useStyles()

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">SP Evaluation</Typography>
                <Grid container spacing={3}>
                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Planned Volume Attained</InputLabel>
                            <Select defaultValue = '' >
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Production No. Off Specs</InputLabel>
                            <Select defaultValue = '' >
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Specific Usage lte Standard</InputLabel>
                            <Select defaultValue = '' >
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Process Control within Range</InputLabel>
                            <Select defaultValue = '' >
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Manpower no 24hrs duty</InputLabel>
                            <Select defaultValue = '' >
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Shift Report Completeness</InputLabel>
                            <Select defaultValue = '' >
                                <MenuItem value={'YES'}>YES</MenuItem>
                                <MenuItem value={'NO'}>NO</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={3} sm={6} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Shift Rating</InputLabel>
                            <Select defaultValue = '' >
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