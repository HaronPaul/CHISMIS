import React from "react"
import { Typography, Grid, TextField, Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles( theme => ({
    textArea: {
      minWidth: '100%',
      marginBottom: '3%',
    },
  
  }))


const LogIn = ({handleClick}) => {
    const classes = useStyles()
    return(
      <>
        <Typography variant="h2" style={{margin: '1%', textAlign: 'center'}}>Sign In</Typography>
        <Grid container spacing={2}>
          <Grid item lg={12} sm={12} xs={12}>
            <TextField variant="outlined" label="Username" className={classes.textArea}></TextField>
          </Grid>
  
          <Grid item lg={12} sm={12} xs={12}>
            <TextField variant="outlined" label="Password" className={classes.textArea} type='password'></TextField>
          </Grid>
  
          <Grid item lg={12} sm={12} xs={12}>
            <Button size="large" variant="contained" color='primary' disableElevation style={{minWidth: '100%'}}>Sign In</Button>
          </Grid>
          <Grid item>
              <Typography style={{marginRight: '10px'}}>Don't have an account yet?</Typography>
              <Button size="small" variant="outlined" onClick={() => handleClick()}>Register Here</Button>
          </Grid>
        </Grid>
      </>
    )
}

export default LogIn  