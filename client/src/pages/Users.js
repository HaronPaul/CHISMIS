import React, {useState, useEffect} from "react";
import {Grid, Paper, Typography, Button} from '@mui/material'
import { makeStyles } from '@mui/styles'
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    background: linear-gradient(to right, #4568dc, #b06ab3);
    display: flex;
    flex-direction: column;
    padding: 3%;
    margin: 1.5%;
    border-radius: 20px;
`

const MiniContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: "blue";
`

const useStyles = makeStyles({
    paperContainer: {
        margin: '10px 0',
        padding: '20px',
    },

    gridContainer: {
        display: 'flex',
        alignItems: 'center'
    }
})

const UserDetails = ({user, handleClick, index}) => {
    const classes = useStyles()

    
    return(
        <Paper elevation={6} className={classes.paperContainer}>
            <Grid container spacing={1} className={classes.gridContainer}> 
                <Grid item lg={6} sm={4} xs={6}>
                    <Typography variant="h6">{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</Typography>
                </Grid>
                <Grid item lg={2} sm={6} xs={6}>
                    <MiniContainer>
                        <Typography style={{textAlign: 'center'}}>Role: {user.role}</Typography>
                    </MiniContainer>
                </Grid>
                <Grid item lg={2} sm={6} xs={12}>
                    <Button variant="contained" color="primary" style={{minWidth: '100%'}} onClick={() => handleClick(index)}>Verify</Button>
                </Grid>
                <Grid item lg={2} sm={6} xs={12}>
                    <Button variant="contained" color="secondary" style={{minWidth: '100%'}}>Delete</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

const Users = () => {
    const classes = useStyles()
    const [unverifiedUsers, setUnverifiedUsers] = useState([])
    const [verifiedUsers, setVerifiedUser] = useState([])

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/user') 
            console.log(response.data)
            setUnverifiedUsers(response.data)
        } catch(error) {
            console.log(error.message)
        }
    }

    const handleVerifyClick = async (index) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/v1/user/${unverifiedUsers[index]._id}`, {verified: true})
            if(response.status === 200)
                setUnverifiedUsers((unverifiedUsers) => unverifiedUsers.filter((_, i)=> i !== index))
        } catch(error) {
            console.log(error.message)
        }

    }

    useEffect(()=> {
        getUsers()
    }, [])

    return(
        <>
            <Typography variant="h1" style={{color: 'black', marginLeft: '1.5%'}}> Manage Users </Typography>
            <Container>
                <Typography variant="h4" style={{color: 'white'}}> Pending users</Typography>
                {unverifiedUsers.map((user, index) => {
                    if(!user.verified) {
                        return(
                            <UserDetails user={user} key={index} handleClick={handleVerifyClick} index={index}></UserDetails>
                        )
                    }
                })}
            </Container>
        </>
    )
}

export default Users