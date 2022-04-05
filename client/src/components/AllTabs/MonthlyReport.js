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
                        <td align="center"><font face="Arial" size="2">  {parseFloat(((mtdData?.production.ac_caustic_32 - (mtdNumOfDays * 60)) / (mtdNumOfDays * 60)) * 100).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.production?.ac_caustic_50 || ''} </font></td>
                        <td align="center"><font face="Arial" size="2">  {parseFloat(((mtdData?.production.ac_caustic_50 - (mtdNumOfDays * 60)) / (mtdNumOfDays * 60)) * 100).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.production?.ac_hcl || ''} </font></td>
                        <td align="center"><font face="Arial" size="2">  {mtdNumOfDays * 30} </font></td>
                        <td align="center"><font face="Arial" size="2">  {parseFloat(((mtdData?.production.ac_hcl - (mtdNumOfDays * 30)) / (mtdNumOfDays * 30)) * 100).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.production?.ac_naclo || ''} </font></td>
                        <td align="center"><font face="Arial" size="2">  {mtdNumOfDays * 70} </font></td>
                        <td align="center"><font face="Arial" size="2">  {parseFloat(((mtdData?.production.ac_naclo - (mtdNumOfDays * 70)) / (mtdNumOfDays * 70)) * 100).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.load?.average_current_load || ''} </font></td>
                        <td align="center"><font face="Arial" size="2">  14.7 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat(((mtdData?.load?.average_current_load - 14.7) / 14.7) * 100).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.load?.average_op_cells || ''} </font></td>
                        <td align="center"><font face="Arial" size="2"> 88  </font></td>
                        <td align="center"><font face="Arial" size="2">  {parseFloat(((mtdData?.load?.average_op_cells - 88) / 88) * 100).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.operating_time?.electro_hours || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat(((mtdData?.operating_time?.electro_hours - (21.92*mtdNumOfDays)) / (21.92*mtdNumOfDays)) * 100).toFixed(2) }  </font></td>
                    </tr>
                    <tr>
                        <td align="center"> <font face="Arial" size="2">{mtdData?.operating_time?.evap_hours || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat(((mtdData?.operating_time?.evap_hours - (21.92*mtdNumOfDays)) / (21.92*mtdNumOfDays)) * 100).toFixed(2) } </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.operating_time?.hcl_hours || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat(((mtdData?.operating_time?.hcl_hours - (21.92*mtdNumOfDays)) / (21.92*mtdNumOfDays)) * 100).toFixed(2) } </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.operating_time?.lcp_hours || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat(((mtdData?.operating_time?.lcp_hours - (21.92*mtdNumOfDays)) / (21.92*mtdNumOfDays)) * 100).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.operating_time?.naclo_hours || ''} </font></td>
                        <td align="center"><font face="Arial" size="2"> {(21.92*mtdNumOfDays).toFixed(2)} </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat(((mtdData?.operating_time?.naclo_hours - (21.92*mtdNumOfDays)) / (21.92*mtdNumOfDays)) * 100).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.efficiency?.electro_eff || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 95%</font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.efficiency?.electro_eff - 95) / 95).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.efficiency?.evap_eff || ''}</font></td>
                        <td align="center"><font face="Arial" size="2">91%</font></td>
                        <td align="center"><font face="Arial" size="2">{parseFloat((mtdData?.efficiency?.evap_eff - 91) / 91).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.efficiency?.hcl_eff || ''}</font></td>
                        <td align="center"><font face="Arial" size="2">92.4%</font></td>
                        <td align="center"><font face="Arial" size="2">{parseFloat((mtdData?.efficiency?.evap_eff - 92.4) / 92.4).toFixed(2)}</font></td>
                    </tr>
                    <tr>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                        <td bgcolor="BFBFBF" align="center" style={{minWidth: '100px'}}><font face="Arial" size="2"> <b> &nbsp; </b> </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> {mtdData?.usages?.ac_power || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 2350 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.usages?.ac_power - 2350) / 2350).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> {mtdData?.usages?.ac_salt || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 1.74 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.usages?.ac_salt - 1.74) / 1.74).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> {mtdData?.usages?.ac_steam_brine || ''}</font> </td>
                        <td align="center"><font face="Arial" size="2"> 0.30 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.usages?.ac_steam_brine - 0.30) / 0.30).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> {mtdData?.usages?.ac_steam_evap || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 1.31 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.usages?.ac_steam_evap - 1.31) / 1.31).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> {mtdData?.usages?.ac_bacl2 || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 1.6 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.usages?.ac_bacl2 - 1.6) / 1.6).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.usages?.ac_soda_ash || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 5.6 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.usages?.ac_soda_ash - 5.6) / 5.6).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.usages?.ac_flocullant || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 13.9 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.usages?.ac_flocullant - 13.9) / 13.9).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.usages?.ac_naoh || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 0.014 </font></td>
                        <td align="center"><font face="Arial" size="2">{parseFloat((mtdData?.usages?.ac_naoh - 0.014) / 0.014).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">  {mtdData?.usages?.ac_hcl || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 0.0244 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.usages?.ac_hcl - 0.0244) / 0.0244).toFixed(2)} </font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">{mtdData?.usages?.ac_na2so3 || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"> 2.2 </font></td>
                        <td align="center"><font face="Arial" size="2"> {parseFloat((mtdData?.usages?.ac_na2so3 - 2.2) / 2.2).toFixed(2)} </font></td>
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