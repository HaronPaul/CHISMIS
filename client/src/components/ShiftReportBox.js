import React from "react";
import { Typography, Button, Box } from "@mui/material";
import ShiftReportDoc from "./ShiftReportDoc";
import {useSelector} from 'react-redux'
import axios from 'axios'

const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '70vw',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 5,
    overflowY: 'scroll',
};

const ShiftReportBox = () => {
    const shiftReportData = useSelector((state) => state.section)

    const handleSubmit = () => {
        axios.post('http://localhost:8000/api/v1/shift_report/create', shiftReportData)
    }

    return(
        <Box sx={style}>
            <Typography variant="h4" textAlign={"center"}>Preview Shift Report</Typography>
            <ShiftReportDoc/>
            <Button variant="contained" style={{marginTop: '20px'}} onClick={handleSubmit}>Submit Report</Button>
        </Box>
    )
}

export default ShiftReportBox