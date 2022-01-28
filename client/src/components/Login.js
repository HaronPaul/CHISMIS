import React, { useState } from "react"
import { Typography, Grid, TextField, Button, makeStyles } from "@material-ui/core"
import axios from 'axios'
import {Alert} from '@material-ui/lab'
import jwt from 'jwt-decode'
import { useNavigate } from "react-router-dom"


const useStyles = makeStyles( theme => ({
    textArea: {
      minWidth: '100%',
      marginBottom: '3%',
    },
  }))

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
    const classes = useStyles()
    const navigate = useNavigate()

    // States
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(0)
    const [message, setMessage] = useState("")

    const handleLoginButton = async ( ) => {
      const body = {username,password}

      try {
        const response = await axios.post('http://localhost:8000/api/v1/user/login', body)

        if(!response.data.success) {
          console.log(response)
          setAlert(-1)
          setMessage(response.data.message)
        }

        else {
          const token = response.data.token
          if(response.data.token) {
            localStorage.setItem('token', JSON.stringify(token))
            const decodedToken = jwt(token)
          }
        }
      } catch(error) {
        console.log(error)
      }
    }

    return(
      <>
        <Typography variant="h2" style={{margin: '1%', textAlign: 'center'}}>Sign In</Typography>
        <Grid container spacing={2}>
          <Grid item lg={12} sm={12} xs={12}>
            <TextField variant="outlined" label="Username" className={classes.textArea} onChange={(e)=>setUsername(e.target.value)}></TextField>
          </Grid>
  
          <Grid item lg={12} sm={12} xs={12}>
            <TextField variant="outlined" label="Password" className={classes.textArea} type='password' onChange={(e)=>setPassword(e.target.value)}></TextField>
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