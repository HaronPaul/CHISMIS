import React from 'react'

const MonthlyReport = ({mtdData, mtdNumOfDays}) => {
    return(
        <div>   
            <table border="1" align="center" cellPadding={2} cellSpacing="0" style={{ tableLayout: 'fixed'}}>
                <tbody>
                    <tr>
                        <td align="center" style={{minWidth: '200px'}} colSpan={3}><font face="Arial" size="2"> <b> Month to Date </b></font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Actual </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Planned </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> %Var </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> {mtdData?.production?.ac_caustic_32 || ''} </font></td>
                        <td align="center" rowSpan={2}><font face="Arial" size="2">  {60 * mtdNumOfDays} </font></td>
                        <td align="center"><font face="Arial" size="2">  &nbsp; </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.production?.ac_caustic_50 || ''} </font></td>
                        <td align="center"><font face="Arial" size="2">  &nbsp; </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.production?.ac_hcl || ''} </font></td>
                        <td align="center"><font face="Arial" size="2">  {mtdNumOfDays * 30} </font></td>
                        <td align="center"><font face="Arial" size="2">  &nbsp; </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.production?.ac_naclo || ''} </font></td>
                        <td align="center"><font face="Arial" size="2">  {mtdNumOfDays * 70} </font></td>
                        <td align="center"><font face="Arial" size="2">  &nbsp; </font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.load?.average_current_load || ''}</td>
                        <td align="center"><font face="Arial" size="2">  14.7 </font></td>
                        <td align="center"><font face="Arial" size="2">  &nbsp;  </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.load?.average_op_cells || ''} </td>
                        <td align="center"><font face="Arial" size="2"> 88  </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.operating_time?.electro_hours || ''}</td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> {mtdData?.operating_time?.evap_hours || ''}</td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.operating_time?.hcl_hours || ''}</td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.operating_time?.lcp_hours || ''}</td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.operating_time?.naclo_hours || ''} </td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.efficiency?.electro_eff || ''}</td>
                        <td align="center"><font face="Arial" size="2"> 95%</font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.efficiency?.evap_eff || ''}</td>
                        <td align="center"><font face="Arial" size="2">91%</font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.efficiency?.hcl_eff || ''}</td>
                        <td align="center"><font face="Arial" size="2">92.4%</font></td>
                        <td align="center"><font face="Arial" size="2">&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.usages?.ac_power || ''}</td>
                        <td align="center"><font face="Arial" size="2"> 2350 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center">{mtdData?.usages?.ac_salt || ''}</td>
                        <td align="center"><font face="Arial" size="2"> 1.74 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> {mtdData?.usages?.ac_steam_brine || ''} </td>
                        <td align="center"><font face="Arial" size="2"> 0.30 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> {mtdData?.usages?.ac_steam_evap || ''} </td>
                        <td align="center"><font face="Arial" size="2"> 1.31 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> {mtdData?.usages?.ac_bacl2 || ''} </td>
                        <td align="center"><font face="Arial" size="2"> 1.6 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> {mtdData?.usages?.ac_soda_ash || ''} </td>
                        <td align="center"><font face="Arial" size="2"> 5.6 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> {mtdData?.usages?.ac_flocullant || ''} </td>
                        <td align="center"><font face="Arial" size="2"> 13.9 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> {mtdData?.usages?.ac_naoh || ''} </td>
                        <td align="center"><font face="Arial" size="2"> 0.014 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> {mtdData?.usages?.ac_hcl || ''} </td>
                        <td align="center"><font face="Arial" size="2"> 0.0244 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> {mtdData?.usages?.ac_na2so3 || ''} </td>
                        <td align="center"><font face="Arial" size="2"> 2.2 </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> </td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"> </td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Weekly </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> Monthly </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> S.U. </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td align="center"><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" colSpan={3}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" colSpan={3}><font face="Arial" size="2"> <b> OEE - MONTH TO DATE </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2"> &nbsp; </font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2"> &nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2"> &nbsp; </font></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default MonthlyReport