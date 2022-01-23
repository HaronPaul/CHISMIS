import React, {useState} from "react";
import styled from "styled-components";
import HomeImage from '../assets/MVC-364.jpg'
import { Grid, Paper, Typography, TextField, makeStyles, Button, MenuItem,
Select, InputLabel, FormControl, useMediaQuery, useTheme} from "@material-ui/core";
import Register from '../components/Register'
import LogIn from "../components/Login";

const useStyles = makeStyles( theme => ({
  paperContainer: {
    width: '70%',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column'
  },

  mainTitle: {
    color: 'white',
    textAlign: 'center'
  },
  // Containers styles
  
  mainContainer:{
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap'

  },

  rightGrid: {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${HomeImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      padding: '3%',
    }
  },

  leftGrid: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
      height: 'auto',
      paddingTop: '5%',
      marginBottom: '3%'
    }
  },
}))


const Home = () => {
    const classes = useStyles()

    const [isLogin, setLogin] = useState(1)

    const handleClick = () => {
      isLogin? setLogin(0):setLogin(1)
      console.log(isLogin)
    }

    return(
      <Grid container className={classes.mainContainer}>
        <Grid item lg={6} sm={12} className={classes.rightGrid}>
            <Typography variant="h1" className={classes.mainTitle}>CHISMIS</Typography>
            <Typography variant="h4" className={classes.mainTitle}>Centralized Historical and Integrated Shift Management Information System</Typography>
        </Grid>
        <Grid item lg={6} sm={12} className={classes.leftGrid}>
          <Paper className={classes.paperContainer} elevation={5}>
            {isLogin==1? <LogIn handleClick={handleClick}/>:<Register handleClick={handleClick}/>}
          </Paper>
        </Grid>
      </Grid>
    )
}

export default Home