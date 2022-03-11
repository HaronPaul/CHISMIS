import { Typography,FormControl, InputLabel, Select, MenuItem, Button, TextField} from '@mui/material'
import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import AttendanceDoc from '../components/AttendanceDoc'

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

const Attendance = () => {
    const [selectedMonth, setSelectedMonth] = useState(1)
    const [selectedSection, setSelectedSection] = useState(1)
    const [selectedYear, setSelectedYear] = useState('')

    const handleChange = (e, changed) => {
        if(changed === 'date') {
            setSelectedMonth(e.target.value)
        } else {
            setSelectedSection(e.target.value)
        }
    }

    const handleGenerateButton = async () => {
        console.log(`Button is clicked with month ${selectedMonth}`)
        // Request for the report here using axios
        const response = await axios.get(`http://localhost:8000/api/v1/attendance/${selectedYear}/${selectedMonth}/${selectedSection}`)
        if(response.data.success) {
            console.log(response.data.section1)
        }
    }

    return(
        <MainContainer>
            <Container>
            <Typography variant='h2' style={{marginBottom: '1.5%'}}> Attendance Report </Typography>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                    <FormControl style={{width: '20%'}}>
                        <InputLabel id="month">Month</InputLabel>
                        <Select 
                        labelId="month"
                        label="Month"
                        defaultValue = ''
                        value={selectedMonth || ''}
                        onChange={(e) => handleChange(e, 'date')}
                        >
                            <MenuItem value={1}>January</MenuItem>
                            <MenuItem value={2}>February</MenuItem>
                            <MenuItem value={3}>March</MenuItem>
                            <MenuItem value={4}>April</MenuItem>
                            <MenuItem value={5}>May</MenuItem>
                            <MenuItem value={6}>June</MenuItem>
                            <MenuItem value={7}>July</MenuItem>
                            <MenuItem value={8}>August</MenuItem>
                            <MenuItem value={9}>September</MenuItem>
                            <MenuItem value={10}>October</MenuItem>
                            <MenuItem value={11}>November</MenuItem>
                            <MenuItem value={12}>December</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{width: '20%', marginLeft: '10px'}}>
                        <InputLabel id="section">Section</InputLabel>
                        <Select 
                        labelId="section"
                        label="Section"
                        defaultValue = ''
                        value={selectedSection || ''}
                        onChange={(e) => handleChange(e, 'section')}
                        >
                            <MenuItem value={1}>Control Room {'&'} HCL</MenuItem>
                            <MenuItem value={2}>PB {'&'} Evap</MenuItem>
                            <MenuItem value={3}>Waste {'&'} Elec</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField 
                    style={{marginLeft: '10px'}} 
                    type='number' 
                    label="Year"
                    value={selectedYear || ''}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    autoComplete='off'
                    />
                    <Button style={{marginLeft: '1.5%'}} variant='contained' onClick={handleGenerateButton}>Generate Report</Button>
                </div>
            <AttendanceDoc />
            </Container>
        </MainContainer>
    )
}

export default Attendance 