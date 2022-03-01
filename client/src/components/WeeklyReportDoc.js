import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`


const WeeklyReportDoc = () => {
    return(
        <div>
            <TableContainer>
                <table border="1" align="center" cellPadding={2} cellSpacing="0" style={{ tableLayout: 'fixed'}}>
                    <tbody>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Description </b> </font></td>
                            <td align="center" style={{minWidth: '200px'}} colSpan={3}><font face="Arial" size="2"> <b> For the Week </b></font></td>
                            <td align="center" style={{minWidth: '200px'}}><font face="Arial" size="2"> <b> Remarks </b></font></td>
                            <td align="center" style={{minWidth: '200px'}} colSpan={3}><font face="Arial" size="2"> <b> Month to Date </b></font></td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Production, MT </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Actual </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Planned </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> %Var </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Actual </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Planned </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> %Var </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Caustic Soda 32% </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center" rowSpan={2}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center" rowSpan={2}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Caustic Soda 50% </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Hydrochloric Acid </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Sodium Hypo </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}}><font face="Arial" size="2"> <b> Load & No. Of Cells </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '50px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Ave. Current Load </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Ave. Operating Cells </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}}><font face="Arial" size="2"> <b> Operating Time, H </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '50px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Electrolysis </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Evaporator </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> HCl Synthesis </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> LCP Operation </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Sodium Hypochlorite </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Efficiency </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>   
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Power, kWH </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Salt, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Steam (Brine) MT  </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Steam (Evap) MT</b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Barium Chloride, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Soda Ash, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Flocullant, grams </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> NaOH, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Hcl, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Sodium Sulfite, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> NaOH, MT MT / Hypo </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Liq Cl2, MT MT/ Hypo </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>    
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Products to Dist </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Transfer </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Variance</b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Weekly </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Monthly </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> S.U. </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> 32% NaOH, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> 50% NaOH, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> HCl, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> NaOCL, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> NaOCL (WTF), MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}} colSpan={9}><font face="Arial" size="2"> <b> OVERALL EQUIPMENT EFFECTIVENESS ( OEE) </b> </font></td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" colSpan={2}><font face="Arial" size="2"> <b> PRODUCT </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" colSpan={2}><font face="Arial" size="2"> <b> PERFORMANCE </b> </font></td>
                            <td bgcolor="BFBFBF" align="center"><font face="Arial" size="2"> <b> AVAILABILITY </b> </font></td>
                            <td bgcolor="BFBFBF" align="center"><font face="Arial" size="2"> <b> QUALITY </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" colSpan={3}><font face="Arial" size="2"> <b> OEE - MONTH TO DATE </b> </font></td>
                            
                        </tr>
                    </tbody>
                </table>
            </TableContainer>
        </div>

    )
}

export default WeeklyReportDoc