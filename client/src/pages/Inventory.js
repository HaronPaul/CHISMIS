import React  from "react";
import styled from "styled-components";
import { Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import inventory from '../assets/icons/inventory.svg'

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    padding: 2%;
    width: 90%;
    margin-top: 2%;
    border-radius: 20px;
`

const useStyle = makeStyles({
    paperStyle: {
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flexBasis: '400px',
    },

    headerStyle: {
        display: 'flex', 
        width: 'auto', 
        height: '150px', 
        alignItems: 'center', 
        gap: '25px', 
        marginBottom: '2%'
    }
})



const Inventory = () => {
    const classes = useStyle()
        
    return(
        <MainContainer>
            <Container>
                <div className={classes.headerStyle}>
                    <img src={inventory} style={{objectFit: 'contain', height: '100%'}}></img>
                    <Typography variant='h2' style={{marginBottom: '1.5%'}}> Current Inventory </Typography>
                </div>
                <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent:'center'}}>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> 240 MT </Typography>
                        <Typography variant='h4'>Salt</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> 435 MT </Typography>
                        <Typography variant='h4'>Barium Chloride</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> 345 MT </Typography>
                        <Typography variant='h4'>Soda Ash</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> 154 MT </Typography>
                        <Typography variant='h4'>Flocullant</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                       <Typography variant='h3' style={{fontWeight: '600'}}> 345 MT </Typography>
                        <Typography variant='h4'>NaOH</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                      <Typography variant='h3' style={{fontWeight: '600'}}> 573 MT </Typography>
                        <Typography variant='h4'>HCl</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> 254 MT </Typography>
                        <Typography variant='h4'>Sodium Sulfite</Typography>
                    </Paper>
                </div>
            </Container>
        </MainContainer>
    )
}   

export default Inventory