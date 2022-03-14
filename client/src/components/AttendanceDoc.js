import React from 'react'
import styled from 'styled-components'

const TableContainer  = styled.div`
    width: 100%;
`

const TableStyle = styled.table`
    width: 100%;
    font-family: 'Arial'
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

const AttendanceDoc = ({attendance1, attendance2, section1, section2, month}) => {
    return(
        <TableContainer>
        <TableStyle>
            <thead>
                <tr>
                    <TableColumn colSpan={32}>{monthNames[month - 1]}</TableColumn>
                </tr>
                <tr>
                    <TableColumn style={{maxWidth: '40px'}}> <b>Name</b></TableColumn>
                    <TableColumn> 1 </TableColumn>
                    <TableColumn> 2 </TableColumn>
                    <TableColumn> 3 </TableColumn>
                    <TableColumn> 4 </TableColumn>
                    <TableColumn> 5 </TableColumn>
                    <TableColumn> 6 </TableColumn>
                    <TableColumn> 7 </TableColumn>
                    <TableColumn> 8 </TableColumn>
                    <TableColumn> 9 </TableColumn>
                    <TableColumn> 10 </TableColumn>
                    <TableColumn> 11 </TableColumn>
                    <TableColumn> 12 </TableColumn>
                    <TableColumn> 13 </TableColumn>
                    <TableColumn> 14 </TableColumn>
                    <TableColumn> 15 </TableColumn>
                    <TableColumn> 16 </TableColumn>
                    <TableColumn> 17 </TableColumn>
                    <TableColumn> 18 </TableColumn>
                    <TableColumn> 19 </TableColumn>
                    <TableColumn> 20 </TableColumn>
                    <TableColumn> 21 </TableColumn>
                    <TableColumn> 22 </TableColumn>
                    <TableColumn> 23 </TableColumn>
                    <TableColumn> 24 </TableColumn>
                    <TableColumn> 25 </TableColumn>
                    <TableColumn> 26 </TableColumn>
                    <TableColumn> 27 </TableColumn>
                    <TableColumn> 28 </TableColumn>
                    <TableColumn> 29 </TableColumn>
                    <TableColumn> 30 </TableColumn>
                    <TableColumn> 31 </TableColumn>
                </tr>
                <tr>
                    <TableColumn colSpan={32} bg={1}>{section1 || ''}</TableColumn>
                </tr>
                {attendance1 && Object.keys(attendance1).map((k, i) => {
                    return (
                    <tr key={k}>
                        <TableColumn> {k} </TableColumn>
                        {attendance1[k]?.map((a, i) => {
                            return(
                                <Cell key={i} bg={a.split('/').length}> {a.trim() === ''? '-':a} </Cell>
                            )
                        })}
                    </tr>)
                    })
                }
                <tr>
                    <TableColumn colSpan={32} bg={1}>{section2 || ''}</TableColumn>
                </tr>
                {attendance2 && Object.keys(attendance2).map((k, i) => {
                    return (
                    <tr key={k}>
                        <TableColumn> {k} </TableColumn>
                        {attendance2[k]?.map((a, i) => {
                            return(
                                <Cell key={i} bg={a.split('/').length}> {a.trim() === ''? '-':a} </Cell>
                            )
                        })}
                    </tr>)
                    })
                }

                
            </thead>
        </TableStyle>
        </TableContainer>
    )
}

export default AttendanceDoc    