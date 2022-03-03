import React, {useState} from 'react'
import styled from 'styled-components'
import {Typography, TextField, Button} from '@mui/material'

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


const WeeklyReport = () => {
    const [date, changeDate] = useState('')
    const [error, setError] = useState(true)

    const handleDateChange = (newDate) => {
        try {
            const dateString = newDate.toString()
            if(dateString !== "Invalid Date") {
                setError(false)
                const DD = String(newDate.getDate()).padStart(2, '0');
                const MM = String(newDate.getMonth() + 1).padStart(2, '0');
                const YYYY = newDate.getFullYear();
                const dateCreated = `${MM}-${DD}-${YYYY}`
                console.log(dateCreated)
                changeDate(dateCreated)
            } else {
                setError(true)
                changeDate('')
                console.log("Date is invalid")
            }
        } catch(err) {
            console.log('No date inputted')
        }
    }


    return(
        <MainContainer> 
            <Container>
                <Typography variant='h2' style={{marginBottom: '1.5%'}}> View a Weekly Report </Typography>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                            label="Start Date"
                            inputFormat="MM/dd/yyyy"
                            // value={date || null}
                            // onChange={(newDate)=>handleDateChange(newDate)}
                            renderInput={(params) => <TextField {...params} style={{marginRight: '20px'}} />}
                            />
                    </LocalizationProvider>
                    {/* <Button variant="contained" size="large" onClick={handleViewButton} disabled={error? true: false}> View Report</Button> */}
                </div>
            </Container>
        </MainContainer>
    )
}

export default WeeklyReport