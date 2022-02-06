import React, { useState } from "react"
import { Typography, Grid, TextField, Button, Alert } from "@mui/material"

// Redux related improts
import {useDispatch} from 'react-redux'
import {login} from '../redux/apiCalls'

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

const LogIn = ({handleClick}) => {
    const dispatch = useDispatch()  

    // States
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(0)
    const [message, setMessage] = useState("")

    const handleLoginButton = async ( ) => {
      const body = {username,password}
      login(dispatch, body)
    }

    return(
      <>
        <Typography variant="h2" style={{margin: '1%', textAlign: 'center'}}>Sign In</Typography>
        <Grid container spacing={2}>
          <Grid item lg={12} sm={12} xs={12}>
            <TextField variant="outlined" label="Username" 
            style={{ minWidth: '100%'}} 
            onChange={(e)=>setUsername(e.target.value)} />
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <TextField variant="outlined" 
            label="Password" 
            style={{ minWidth: '100%'}} 
            type='password' 
            onChange={(e)=>setPassword(e.target.value)}></TextField>
          </Grid>
          {alert === 1 && <SuccessAlert message={message}/>}
          {alert === -1 && <ErrorAlert message={message}/>}
          <Grid item lg={12} sm={12} xs={12}>
            <Button size="large" variant="contained" color='primary' onClick={handleLoginButton} disableElevation style={{minWidth: '100%'}}>Sign In</Button>
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