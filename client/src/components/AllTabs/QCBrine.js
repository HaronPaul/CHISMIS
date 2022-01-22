import React from "react";
import {Select, MenuItem, FormControl, InputLabel, Typography, makeStyles, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

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
    
    const classes = useStyles()

    return(
        <>
            <div className={classes.container}>
                <Typography variant="h4">Quality Control Brine</Typography>
                <Grid container spacing={3}>
                    <Grid item lg= {3} sm={4} xs={6}>
                        <TextField label='SPB Ca+MG' placeholder="15+5 ppb mx" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='SPB NaClO3' placeholder="20 gpl max" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='SPB Na2SO4' placeholder="7 gpl max" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='DB NaClO3' placeholder="20 gpl mx" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='DB NaCl' placeholder=" gpl mx" className={classes.input}></TextField>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.container}>
                <Typography variant="h4">Quality Control Brine and Product</Typography>
                <Grid container spacing={3}>
                    <Grid item lg={3} sm={4} xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>DB Free Cl Quality</InputLabel>
                            <Select defaultValue = "" >
                                <MenuItem value={'POSITIVE'}> Positive</MenuItem>
                                <MenuItem value={'NEGATIVE'}>Negative</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='50% NaOH Concentration' placeholder="48-50" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='32% NaOH Concentration' placeholder="30-32" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='NaOH Fe Concentration' placeholder="5 ppm max" className={classes.input}></TextField>
                    </Grid>
                    <Grid item lg={3} sm={4} xs={6}>
                        <TextField label='HCl on-line' placeholder="32-33.5" className={classes.input}></TextField>
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
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default QCBrine