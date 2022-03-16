import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@mui/styles'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

const TableContainer  = styled.div`
    width: 100%;
    overflow: scroll;
`

const TableStyle = styled.table`
    width: 100%;
    font-family: 'Arial';
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TableColumn = styled.td`
    background-color: ${props => props.bg === 1? '#64b5f6': '#eeeeee'};
    padding: 3px;
    max-width: 3px;
    text-align: center;
`

const Cell = styled.td`
    background-color: ${props => props.bg > 2? 'red':(props.bg == 2? '#ffb74d':'#eeeeee' )};
    padding: 3px;
    max-width: 3px;
    text-align: center;
`
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const useStyle = makeStyles({
    saveButtonStyle: {
        width: '20%',
        marginTop: '20px',
        backgroundColor: '#1976d2',
        padding: '10px',
        borderRadius: '7px',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Roboto',
        fontSize: '14px',
        alignSelf: 'flex-end',
        '&:hover': {
            backgroundColor: '#1769aa',
            
        }
    },
    
    tableColumnStyle: {
        backgroundColor: '#eeeeee',
        padding: '10px',
        maxWidth: '3px'
    }
})


const AttendanceDoc = ({attendance1, attendance2, section1, section2, month}) => {
    const classes = useStyle()

    return(
        <MainContainer>
        <TableContainer>
            <TableStyle id="attendanceTable">
                <tr>
                    <th className={classes.tableColumnStyle} colSpan={32} bgColor="#EEEEEE">{monthNames[month - 1]}</th>
                </tr>
                <tr>
                    <TableColumn style={{maxWidth: '40px'}}> <b>Name</b></TableColumn>
                    <th bgColor="#EEEEEE"> 1 </th>
                    <th bgColor="#EEEEEE"> 2 </th>
                    <th bgColor="#EEEEEE"> 3 </th>
                    <th bgColor="#EEEEEE"> 4 </th>
                    <th bgColor="#EEEEEE"> 5 </th>
                    <th bgColor="#EEEEEE"> 6 </th>
                    <th bgColor="#EEEEEE"> 7 </th>
                    <th bgColor="#EEEEEE"> 8 </th>
                    <th bgColor="#EEEEEE"> 9 </th>
                    <th bgColor="#EEEEEE"> 10 </th>
                    <th bgColor="#EEEEEE"> 11 </th>
                    <th bgColor="#EEEEEE"> 12 </th>
                    <th bgColor="#EEEEEE"> 13 </th>
                    <th bgColor="#EEEEEE"> 14 </th>
                    <th bgColor="#EEEEEE"> 15 </th>
                    <th bgColor="#EEEEEE"> 16 </th>
                    <th bgColor="#EEEEEE"> 17 </th>
                    <th bgColor="#EEEEEE"> 18 </th>
                    <th bgColor="#EEEEEE"> 19 </th>
                    <th bgColor="#EEEEEE"> 20 </th>
                    <th bgColor="#EEEEEE"> 21 </th>
                    <th bgColor="#EEEEEE"> 22 </th>
                    <th bgColor="#EEEEEE"> 23 </th>
                    <th bgColor="#EEEEEE"> 24 </th>
                    <th bgColor="#EEEEEE"> 25 </th>
                    <th bgColor="#EEEEEE"> 26 </th>
                    <th bgColor="#EEEEEE"> 27 </th>
                    <th bgColor="#EEEEEE"> 28 </th>
                    <th bgColor="#EEEEEE"> 29 </th>
                    <th bgColor="#EEEEEE"> 30 </th>
                    <th bgColor="#EEEEEE"> 31 </th>
                </tr>
                <tr>
                    <th colSpan={32} bgColor="#64b5f6">{section1 || ''}</th>
                </tr>
                {attendance1 && Object.keys(attendance1).map((k, i) => {
                    return (
                    <tr key={k}>
                        <th
                        bgColor="#EEEEEE"
                        style={{ padding: '2px', textAlign: 'center',  textOverflow: 'ellipsis'}}> 
                            {k} 
                        </th>
                        {attendance1[k]?.map((a, i) => {
                            return(
                                <td 
                                key={i} 
                                bgColor={a.split('\\').length > 2? 'red':(a.split('\\').length == 2? '#ffb74d':'#eeeeee' )}
                                style={{ textAlign: 'center',  textOverflow: 'ellipsis', width: 'auto'}}>
                                    {a.trim() === ''? '-':a}
                                </td>
                            ) 
                        })}
                    </tr>)
                    })
                }

                <tr>
                    <th colSpan={32} bgColor="#64b5f6">{section2 || ''}</th>
                </tr>
                {attendance2 && Object.keys(attendance2).map((k, i) => {
                    return (
                    <tr key={k}>
                        <th
                        bgColor="#EEEEEE"
                        style={{ padding: '2px', textAlign: 'center',  textOverflow: 'ellipsis'}}> 
                            {k} 
                        </th>
                        {attendance2[k]?.map((a, i) => {
                            return(
                                <td 
                                key={i} 
                                bgColor={a.split('\\').length > 2? 'red':(a.split('\\').length == 2? '#ffb74d':'#eeeeee' )}
                                style={{ padding: '2px', textAlign: 'center',  textOverflow: 'ellipsis'}}>
                                    {a.trim() === ''? '-':a}
                                </td>
                            )
                        })}
                    </tr>)
                    })
                }
            </TableStyle>
        </TableContainer>
        <ReactHTMLTableToExcel
            className={classes.saveButtonStyle}
            table="attendanceTable"
            filename="attendance"
            sheet="Attendance Sheet"
            buttonText="Save Attendance Report"/>
        </MainContainer>
    )
}

export default AttendanceDoc    