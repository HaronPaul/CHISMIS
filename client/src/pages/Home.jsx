import React from "react";
import styled from "styled-components";
import HomeImage from '../assets/MVC-364.jpg'
import { Grid, Paper, Typography, TextField, makeStyles, Button } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const LeftContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const useStyles = makeStyles({
  paperContainer: {
    minWidth: '80%',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column'
  },

  title: {
    margin: '1%',
    textAlign: 'center'
  },

  textArea: {
    minWidth: '100%',
    marginBottom: '3%',
  },

  button: {
    minWidth: '100%',
  },

  miniContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minicontent: {
    marginRight: '10px'
  }
})

const Home = () => {
    const classes = useStyles()

    return(
      <Container>
        <LeftContainer>
          <Paper className={classes.paperContainer} elevation={3}>
            <Typography variant="h2" className={classes.title}>Sign In</Typography>
            <Grid container spacing={2}>
              <Grid item lg={12} sm={12} xs={12}>
                <TextField variant="outlined" label="Username" className={classes.textArea}></TextField>
              </Grid>

              <Grid item lg={12} sm={12} xs={12}>
                <TextField variant="outlined" label="Password" className={classes.textArea} type='password'></TextField>
              </Grid>

              <Grid item lg={12} sm={12} xs={12}>
                <Button size="large" variant="contained" color='primary' disableElevation className={classes.button}>Sign In</Button>
              </Grid>
              <Grid item>
                  <Typography className={classes.minicontent}>Don't have an account yet?</Typography>
                  <Button size="small" variant="outlined">Register Here</Button>
              </Grid>
            </Grid>
          </Paper>
        </LeftContainer>
      </Container>
    )
}

export default Home