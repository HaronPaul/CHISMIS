import React from "react";
import { Typography, Grid, FormControl, Select, InputLabel, makeStyles, MenuItem, TextField, Button }
from "@material-ui/core";

const useStyles = makeStyles({
    textArea: {
        minWidth: '100%',
        marginBottom: '3%',
    }
})

const Register = ({handleClick}) => {
    const classes = useStyles()
    
    return(
      <>
        <Typography variant="h2" style={{margin: '1%', textAlign: 'center'}}>Register</Typography>
        <Grid container spacing={1}>
          <Grid item lg={6} sm={12} xs={12}>
            <TextField variant="outlined" label="First Name" className={classes.textArea}></TextField>
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>  
            <TextField variant="outlined" label="Last Name" className={classes.textArea}></TextField>
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <TextField variant="outlined" label="Username" className={classes.textArea}></TextField>
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <TextField type='password' variant="outlined" label="Password" className={classes.textArea}></TextField>
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
              <FormControl className={classes.textArea}>
                  <InputLabel>Role</InputLabel>
                  <Select defaultValue = "" >
                      <MenuItem value={'Supervisor'}>SUPERVISOR</MenuItem>
                      <MenuItem value={'Manager'}>MANAGER</MenuItem>
                      <MenuItem value={'Administrator'}>ADMINISTRATOR</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <Button size="large" variant="contained" color='primary' disableElevation style={{minWidth: '100%'}}>Register</Button>
          </Grid>
          <Grid item>
              <Typography style={{marginRight: '10px'}}>Already have an account?</Typography>
              <Button size="small" variant="outlined" onClick={() => handleClick()}>Sign In</Button>
          </Grid>
        </Grid>
      </>
    )
}

export default Register