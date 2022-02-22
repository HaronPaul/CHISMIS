import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper'
import ShiftReportDoc from "./ShiftReportDoc";
import { useSelector, useDispatch } from "react-redux";
import {addUsages} from "../redux/sectionSlice"

const container = {
    position: 'fixed',  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
    zIndex: '3',
    height: '100%',
    padding: '2%',
    marginTop: '2%',
    backgroundColor: 'white',
}

const ModalReport = ({show}) => {
    if(!show) return null

    return (
        <div style={container}>
            <Typography variant="h3" style={{marginBottom: '20px', textAlign: 'center'}}>Preview Shift Report</Typography>
            <Button>Submit Report</Button>
            <ShiftReportDoc />
        </div>
    );
}

export default ModalReport