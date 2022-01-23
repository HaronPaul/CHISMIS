import React, {useState} from "react";
import { Typography, Grid, FormControl, Select, InputLabel, makeStyles, MenuItem, TextField, Button}
from "@material-ui/core";
import {Alert} from '@material-ui/lab'

import axios from 'axios'

const useStyles = makeStyles({
    textArea: {
        minWidth: '100%',
        marginBottom: '3%',
    }
})

let initialCreds = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  role: ''
}

const SuccessAlert = ({message}) => {
  return(
    <Grid item lg={12} sm={12}>
      <Alert severity="success">{message}</Alert>
    </Grid>
  )
}

const ErrorAlert = ({message}) => {
  return(
    <Grid item lg={12} sm={12}>
      <Alert severity="error">{message}</Alert>
    </Grid>
  )
}

const Register = ({handleClick}) => {
    const classes = useStyles()
    const [credentials, setCredentials] = useState(initialCreds)
    const [alert, setAlert] = useState(0)
    const [message, setMessage] = useState("")

    const handleInputChange = e => {
      const {name, value} = e.target
      setCredentials({
        ...credentials,
        [name]: value
      })
    }

    const handleRegisterButton = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/v1/user', credentials)
        console.log(response.data.message)

        response.data.success? setAlert(1):setAlert(-1)
        setMessage(response.data.message)

        response.data.success? setAlert(1):setAlert(-1)

      } catch(err) {
        console.log(err.message)
      }
    }

    return(
      <>
        <Typography variant="h2" style={{margin: '1%', textAlign: 'center'}}>Register</Typography>
        <Grid container spacing={1}>
          <Grid item lg={6} sm={12} xs={12}>
            <TextField
            variant="outlined"
            label="First Name"
            name="firstName"
            className={classes.textArea}
            onChange={handleInputChange}
            value={credentials.firstName}
            /> 
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>  
            <TextField
            variant="outlined"
            name='lastName'
            label="Last Name"
            className={classes.textArea}
            onChange={handleInputChange}
            value={credentials.lastName}> </TextField>
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <TextField 
            variant="outlined"
            label="Username"
            className={classes.textArea}
            name="username"
            onChange={handleInputChange}
            value={credentials.username}></TextField>
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <TextField 
            type='password'
            variant="outlined"
            label="Password"
            className={classes.textArea}
            name="password"
            onChange={handleInputChange}
            value={credentials.password}></TextField>
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
              <FormControl className={classes.textArea}>
                  <InputLabel>Role</InputLabel>
                  <Select defaultValue = "" name="role" onChange={handleInputChange}>
                      <MenuItem value={'SUPERVISOR'}>SUPERVISOR</MenuItem>
                      <MenuItem value={'MANAGER'}>MANAGER</MenuItem>
                      <MenuItem value={'ADMINISTRATOR'}>ADMINISTRATOR</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          {alert == 1 && <SuccessAlert message={message}/>}
          {alert == -1 && <ErrorAlert message={message}/>}
          <Grid item lg={12} sm={12} xs={12}>
            <Button size="large" variant="contained" color='primary' disableElevation style={{minWidth: '100%'}} onClick={() => handleRegisterButton()}>Register</Button>
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