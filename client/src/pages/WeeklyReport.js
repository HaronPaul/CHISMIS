import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Typography, TextField, Button, Modal, Box, CircularProgress, Paper, Alert} from '@mui/material'
import WeeklyReportDoc from '../components/WeeklyReportDoc'
import axios from 'axios'

// Date Imports
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns  from '@mui/lab/AdapterDateFns'


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

// Style for loading modal
const loadingModalStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    p: '2%',
    height: '10%'
  };


const WeeklyReport = () => {
    const [weeklyData, setWeeklyData] = useState(null)
    const [startDate, changeStartDate] = useState('')
    const [endDate, changeEndDate] = useState('') 
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    
    // State for showing weekly report document
    const [showReport, setShowReport] = useState(false)

    // Loading modal state
    const [openLoadingModal, setOpenLoadingModal] = useState(false)

    const handleSubmitButton = async () => {
        setShowReport(false)
        setOpenLoadingModal(true)
        setError(false)
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/weekly_report/get/${startDate}/${endDate}`)
            if(response.data.success) {
                setOpenLoadingModal(false)
                setShowReport(true)
                setWeeklyData(response.data.data)
                console.log(response.data.data)
            } else {
                setOpenLoadingModal(false)
                setError(true)
                setErrorMessage(response.data.message)
            }
        } catch(err) {
            setOpenLoadingModal(false)
            setError(true)
            console.log(err)
        } 
    }

    const handleDateChange = (newDate, type) => {
        try {
            const dateString = newDate.toString()
            if(dateString !== "Invalid Date") {
                const DD = String(newDate.getDate()).padStart(2, '0');
                const MM = String(newDate.getMonth() + 1).padStart(2, '0');
                const YYYY = newDate.getFullYear();
                const dateCreated = `${MM}-${DD}-${YYYY}`
                type ==='start'? changeStartDate(dateCreated):changeEndDate(dateCreated)
            } else {
                setError(true)
                type ==='start'? changeStartDate(''):changeEndDate('')
            }
        } catch(err) {
            console.log('No date inputted')
        }
    }

    useEffect(() => {
        (startDate && endDate)? setError(false):setError(true)
        setErrorMessage('Date range not valid')
    }, [startDate, endDate])

    return(
        <>
        <MainContainer> 
            <Container>
                <Typography variant='h2' style={{marginBottom: '1.5%'}}> View a Weekly Report </Typography>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                            label="Start Date"
                            inputFormat="MM/dd/yyyy"
                            value={startDate || null}
                            onChange={(newDate)=>handleDateChange(newDate, 'start')}
                            renderInput={(params) => <TextField {...params} style={{marginRight: '20px'}} />}
                            />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                            label="End Date"
                            inputFormat="MM/dd/yyyy"
                            value={endDate || null} 
                            onChange={(newDate)=>handleDateChange(newDate, 'end')}
                            renderInput={(params) => <TextField {...params} style={{marginRight: '20px'}} />}
                            />
                    </LocalizationProvider>
                    <Button variant="contained" size="large" onClick={handleSubmitButton} disabled={error? true:false}> View Weekly Report</Button>
                </div>
                {error && <Alert severity='error' style={{marginTop: '2%'}}> {errorMessage} </Alert>}
                {showReport && <WeeklyReportDoc data={weeklyData}/>}
            </Container>
        </MainContainer>
        <Modal
            open={openLoadingModal}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,padding: '0.5%'}}
        >
            <Paper sx={loadingModalStyle} elevation={5}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CircularProgress style={{marginRight: '20px'}} />
                    <Typography variant="h5"> Generating weekly report </Typography>
                </div>
            </Paper>
        </Modal>
        </>
    )
}

export default WeeklyReport