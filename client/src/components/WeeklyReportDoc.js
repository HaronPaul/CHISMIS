import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import MonthlyReport from './AllTabs/MonthlyReport'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import { makeStyles } from '@mui/styles'

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    gap: 0.5px;
`

const CellInput = styled.input`
    width: 100%;
    border: none;
`
const OutputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

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
            backgroundColor: '#1769aa'
        }
    },
})


const WeeklyReportDoc = ({data, isWeekly, mtdData, numOfDays, mtdNumOfDays}) => {
    const [remarks, setRemarks] = useState(new Array(31).fill(''))
    const tableRef = useRef(null)
    const classes = useStyle()

    const handleRemarksChange = (e, index) => {
        const value = e.target.value
        remarks[index] = value
    }

    return(
        <OutputContainer>
            <TableContainer>
                <table border="1" align="center" cellPadding={2} cellSpacing="0" style={{ tableLayout: 'fixed'}} id='weeklyTable'>
                    <tbody>
                        <tr>
                            <th align="center" style={{minWidth: '200px'}} colSpan={2}>
                                 <font face="Arial" size="2"> <b> Description </b> </font>
                            </th>
                            <th align="center" style={{minWidth: '200px'}} colSpan={3}><font face="Arial" size="2"> <b> For the Week </b></font></th>
                            <th align="center" style={{minWidth: '300px'}}><font face="Arial" size="2"> <b> Remarks </b></font></th>
                        </tr>
                        <tr>
                            <th align="center" style={{minWidth: '200px', backgroundColor: "#BFBFBF"}} colSpan={2}><font face="Arial" size="2"> <b> Production, MT </b> </font></th>
                            <th align="center" style={{minWidth: '100px', backgroundColor: "#BFBFBF"}}><font face="Arial" size="2"> <b> Actual </b> </font></th>
                            <th align="center" style={{minWidth: '100px', backgroundColor: "#BFBFBF"}}><font face="Arial" size="2"> <b> Planned </b> </font></th>
                            <th align="center" style={{minWidth: '100px', backgroundColor: "#BFBFBF"}}><font face="Arial" size="2"> <b> %Var </b> </font></th>
                            <th align="center" style={{minWidth: '100px', backgroundColor: "#BFBFBF"}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></th>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> {'Caustic Soda 32%'} </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(data?.production?.ac_caustic_32).toFixed(2) || ''} </font></td>
                            <td align="center" rowSpan={2}><font face="Arial" size="2"> {numOfDays * 60} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.production.ac_caustic_32 - (numOfDays * 60)) / (numOfDays * 60)) * 100).toFixed(2) } </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Caustic Soda 50{'%'} </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.production?.ac_caustic_50|| ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.production.ac_caustic_50 - (numOfDays * 60)) / (numOfDays * 60)) * 100).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Hydrochloric Acid </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.production?.ac_hcl || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> {numOfDays * 30} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.production.ac_hcl - (numOfDays * 30)) / (numOfDays * 30)) * 100).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Sodium Hypo </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.production?.ac_naclo || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> {   numOfDays * 70} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.production.ac_naclo - (numOfDays * 70)) / (numOfDays * 70)) * 100).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>

                        {/* Load and Number of Cells */}
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}}><font face="Arial" size="2"> <b> Load {'&'} No. Of Cells </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '50px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Ave. Current Load </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.load?.average_current_load || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 14.7</font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.load?.average_current_load - 14.7) / 14.7) * 100).toFixed(2)} </font></td>
                            <td align="center"></td>
                           
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Ave. Operating Cells </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.load?.average_op_cells || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 88 </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.load?.average_op_cells - 88) / 88) * 100).toFixed(2)} </font></td>
                            <td align="center"> </td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}}><font face="Arial" size="2"> <b> Operating Time, H </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '50px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Electrolysis </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.operating_time?.electro_hours || ''}  </font></td>
                            <td align="center"><font face="Arial" size="2"> {21.92*numOfDays} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.operating_time?.electro_hours - (21.92*numOfDays)) / (21.92*numOfDays)) * 100).toFixed(2) }  </font></td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Evaporator </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.operating_time?.evap_hours || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> {21.92*numOfDays} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.operating_time?.evap_hours - (21.92*numOfDays)) / (21.92*numOfDays)) * 100).toFixed(2) } </font></td>
                            <td align="center"> </td>
                            
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> HCl Synthesis </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.operating_time?.hcl_hours || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> {21.92*numOfDays} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.operating_time?.hcl_hours - (21.92*numOfDays)) / (21.92*numOfDays)) * 100).toFixed(2) } </font></td>
                            <td align="center"> </td>
                            
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> LCP Operation </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.operating_time?.lcp_hours || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> {21.92*numOfDays} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.operating_time?.lcp_hours - (21.92*numOfDays)) / (21.92*numOfDays)) * 100).toFixed(2)} </font></td>
                            <td align="center"> </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Sodium Hypochlorite </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.operating_time?.naclo_hours || ''}</font></td>
                            <td align="center"><font face="Arial" size="2"> {21.92*numOfDays} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat(((data?.operating_time?.naclo_hours - (21.92*numOfDays)) / (21.92*numOfDays)) * 100).toFixed(2)} </font></td>
                            <td align="center"> </td>  
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Efficiency </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Electrolysis </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.efficiency?.electro_eff || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 95{'%'} </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.efficiency?.electro_eff - 95) / 95).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>   
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Evaporator </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.efficiency?.evap_eff || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 91% </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.efficiency?.evap_eff - 91) / 91).toFixed(2)} </font></td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> HCl Synthesis </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.efficiency?.hcl_eff || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 92.4% </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.efficiency?.evap_eff - 92.4) / 92.4).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Usages </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>   
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Power, kWH </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.usages?.ac_power || ''} </font></td>
                            <td align="center"> <font face="Arial" size="2"> 2350 </font> </td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.usages?.ac_power - 2350) / 2350).toFixed(2)}</font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Salt, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.usages?.ac_salt || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 1.74 </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.usages?.ac_salt - 1.74) / 1.74).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Steam (Brine) MT  </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.usages?.ac_steam_brine || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 0.30 </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.usages?.ac_steam_brine - 0.30) / 0.30).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Steam (Evap) MT</b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.usages?.ac_steam_evap || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 1.31 </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.usages?.ac_steam_evap - 1.31) / 1.31).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Barium Chloride, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> {data?.usages?.ac_bacl2 || ''} </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> 1.6 </font></td>    
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.usages?.ac_bacl2 - 1.6) / 1.6).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Soda Ash, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.usages?.ac_soda_ash || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 5.6 </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.usages?.ac_soda_ash - 5.6) / 5.6).toFixed(2)}</font></td>
                            <td align="center">
                            </td>
                            
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Flocullant, grams </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> {data?.usages?.ac_flocullant || ''} </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> 13.9 </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.usages?.ac_flocullant - 13.9) / 13.9).toFixed(2)}</font></td>
                            <td align="center">
                            </td>
                            
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> NaOH, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.usages?.ac_naoh || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 0.014 </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.usages?.ac_naoh - 0.014) / 0.014).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Hcl, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.usages?.ac_hcl || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 0.0244 </font></td>
                            <td align="center"><font face="Arial" size="2"> {parseFloat((data?.usages?.ac_hcl - 0.0244) / 0.0244).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Sodium Sulfite, kg </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.usages?.ac_na2so3 || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> 2.2 </font></td>
                            <td align="center"><font face="Arial" size="2">{parseFloat((data?.usages?.ac_na2so3 - 2.2) / 2.2).toFixed(2)} </font></td>
                            <td align="center">
                            </td>
                            
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> NaOH, MT MT / Hypo </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center">
                            </td>
                            
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Liq Cl2, MT MT/ Hypo </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>    
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> Products to Dist </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Transfer </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Variance</b> </font></td>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> 32% NaOH, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.products_dist?.naoh_32_sum || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center">
                            </td>
                            
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> 50% NaOH, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.products_dist?.naoh_50_sum || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center">
                            </td>
                            
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> HCl, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.products_dist?.hcl_sum || ''}</font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> NaOCL, MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2">{data?.products_dist?.naocl_sum || ''}</font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center">
                            </td>
                            
                        </tr>
                        <tr>
                            <td align="center" style={{minWidth: '200px'}} colSpan={2}><font face="Arial" size="2"> <b> NaOCL (WTF), MT </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> {data?.products_dist?.naocl_waste_sum || ''} </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center">
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" style={{minWidth: '200px'}} colSpan={6}><font face="Arial" size="2"> <b> OVERALL EQUIPMENT EFFECTIVENESS ( OEE) </b> </font></td>
                        </tr>
                        <tr>
                            <td bgcolor="BFBFBF" align="center" colSpan={2}><font face="Arial" size="2"> <b> PRODUCT </b> </font></td>
                            <td bgcolor="BFBFBF" align="center" colSpan={2}><font face="Arial" size="2"> <b> PERFORMANCE </b> </font></td>
                            <td bgcolor="BFBFBF" align="center"><font face="Arial" size="2"> <b> AVAILABILITY </b> </font></td>
                            <td bgcolor="BFBFBF" align="center"><font face="Arial" size="2"> <b> QUALITY </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" colSpan={2}><font face="Arial" size="2"> <b> Caustic Soda (NaOH) </b> </font></td>
                            <td align="center" colSpan={2}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" colSpan={2}><font face="Arial" size="2"> <b> Hydrochloric acid ( HCl) </b> </font></td>
                            <td align="center" colSpan={2}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                        <tr>
                            <td align="center" colSpan={2}><font face="Arial" size="2"> <b> Sodium Hypochlorite (NaOCl) </b> </font></td>
                            <td align="center" colSpan={2}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                            <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        </tr>
                    </tbody>
                </table>
                {isWeekly && <MonthlyReport mtdData={mtdData} mtdNumOfDays={mtdNumOfDays}/>}
            </TableContainer>
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className={classes.saveButtonStyle}
                table="weeklyTable"
                filename="tablexls"
                sheet="Weekly Table"
                buttonText="Save Report"/>

        </OutputContainer>

    )
}

export default WeeklyReportDoc