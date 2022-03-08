import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import axios from 'axios'

import { Typography, Paper, Button } from "@mui/material";
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
    display: flex;
    flex-direction: column;
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

const initState = {
    ac_salt: null,
    ac_soda_ash: null,
    ac_naoh: null,
    ac_hcl: null,
    ac_bacl2: null,
    ac_flocullant: null,
    ac_na2so3: null
}

const Inventory = () => {
    const classes = useStyle()
    const [currentInventory, setInventory] = useState(initState)

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('http://localhost:8000/api/v1/inventory/getInventory')
            console.log(response)
            if(response.status === 200) {
                setInventory(response.data.data)
            }
        }

        getData().catch(console.error)

    }, [])

    const handleUpdateButton = () => {
        console.log('Button is clicked')
    }
        
    return(
        <MainContainer>
            <Container>
                <div className={classes.headerStyle}>
                    <img src={inventory} style={{objectFit: 'contain', height: '100%'}} alt="inventory icon"></img>
                    <Typography variant='h2' style={{marginBottom: '1.5%'}}> Current Inventory </Typography>
                </div>
                <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent:'center'}}>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> {currentInventory?.ac_salt || ''} MT </Typography>
                        <Typography variant='h4'>Salt</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> {currentInventory?.ac_bacl2 || ''} MT </Typography>
                        <Typography variant='h4'>Barium Chloride</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> {currentInventory?.ac_soda_ash || ''} MT </Typography>
                        <Typography variant='h4'>Soda Ash</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> {currentInventory?.ac_flocullant || ''} MT </Typography>
                        <Typography variant='h4'>Flocullant</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                       <Typography variant='h3' style={{fontWeight: '600'}}> {currentInventory?.ac_naoh || ''} MT </Typography>
                        <Typography variant='h4'>NaOH</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                      <Typography variant='h3' style={{fontWeight: '600'}}> {currentInventory?.ac_hcl || ''} MT </Typography>
                        <Typography variant='h4'>HCl</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.paperStyle}>
                        <Typography variant='h3' style={{fontWeight: '600'}}> {currentInventory?.ac_na2so3 || ''} MT </Typography>
                        <Typography variant='h4'>Sodium Sulfite</Typography>
                    </Paper>
                </div>
                <Button variant="contained" onClick={handleUpdateButton} style={{marginTop: '30px', width: '20%', alignSelf: 'flex-end'}}>Update Inventory</Button>
            </Container>
        </MainContainer>
    )
}   

export default Inventory