import React from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const ShiftReportDoc = () => {
    const {controlRoomSection} = useSelector((state) => state.section)
    const {date, shift} = useSelector((state)=>state.section)

    return(
        <TableContainer>
            <table border="1" align="center" cellPadding={2} cellSpacing="0">
                <thead> 
                    <tr>
                        <td colSpan={5} align="center"><font face="Arial" size="2"> <b> Date: {date || ''} </b> </font></td>
                        <td colSpan={6} align="center"><font face="Arial" size="2"> <b> Shift: {shift || ''}  </b> </font></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width={170} bgcolor="#BFBFBF" align="center"><font face="Arial" size="2"> <b> Control Room </b> </font></td>
                        <td width={75} bgcolor="#BFBFBF" align="center" colSpan={2}><font face="Arial" size="2">{controlRoomSection.hours  || ''} hours</font></td>
                        <td width={150} bgcolor="#BFBFBF" align="center"><font face="Arial" size="2"> <b> Prev Optr </b></font></td>
                        <td width={150} bgcolor="#BFBFBF" colSpan={3} align="center"><font face="Arial" size="2">{controlRoomSection.previous_operator || ''}</font></td>
                        <td width={150} bgcolor="#BFBFBF" align="center"><font face="Arial" size="2"><b> Pres Optr </b></font></td>
                        <td width={150} bgcolor="#BFBFBF" colSpan={3} align="center"><font face="Arial" size="2">{controlRoomSection.present_operator || ''}</font></td>
                        <td width={300}bgcolor="#BFBFBF" colSpan={2} align="center"><font face="Arial" size="2">OPERATIONAL REMARKS</font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> <b>Interlock engaged </b></font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2">{controlRoomSection.interlock_engaged || ''}</font></td>
                        <td align="center"><font face="Arial" size="2"><b>Cells</b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">88</font></td>
                        <td align="center"><font face="Arial" size="2"> <b> Cells w/ voltage {">"} 3.4 </b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">5</font></td>
                        <td rowSpan={3} colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"><b>DAQ Operational</b></font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2">Partial</font></td>
                        <td align="center"><font face="Arial" size="2"><b> Ave(13.25) / EOS: </b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">2.35 / 8.12</font></td>
                        <td align="center"><font face="Arial" size="2"><b> Cells tot volt {"<"} 299.2: </b> </font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">296.5</font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"> <b>Recti RW (≥250): </b></font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2">300 L/m</font></td>
                        <td align="center"><font face="Arial" size="2"> <b>Recti DW (≥180): </b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">190</font></td>
                        <td align="center"><font face="Arial" size="2"><b> X'formr Oil Temp({"<"}90): </b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">39 &deg;C</font></td>
                    </tr>
                    <tr>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>HCL</b></font></td>
                        <td width={75} bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Eff% </b></font></td>
                        <td width={75} bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" >45</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Prev Optr</b></font></td>
                        <td bgcolor="#BFBFBF" align="center" colSpan={3}><font face="Arial" size="2" >Lorente</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Pres Optr</b></font></td>
                        <td bgcolor="#BFBFBF" align="center" colSpan={3}><font face="Arial" size="2" >Jaralve</font></td>
                        <td rowSpan={4} colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2" ><b>HCL (11.01):</b></font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2">0 dmt</font></td>
                        <td align="center"><font face="Arial" size="2"><b>Conc (32 &plusmn; 1.5%)</b></font></td>
                        <td align="center"><font face="Arial" size="2">33.1%</font></td>
                        <td align="center"><font face="Arial" size="2"><b>SG</b></font></td>
                        <td align="center"><font face="Arial" size="2">65</font></td>
                        <td align="center"><font face="Arial" size="2"><b>Cl2H2O flowrate (20)</b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">0 m³/hr</font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2" ><b>Scrub Cl2(40 mx)</b></font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >0 &deg;C</font></td>
                        <td align="center" colSpan={1}><font face="Arial" size="2" > <b>Sigri cool H2O (3) </b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2" >0</font></td>
                        <td align="center"><font face="Arial" size="2" ><b>Sigri in pres(Cl2/H2):</b></font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >0</font></td>
                    </tr>
                    <tr>
                        <td  align="center"><font face="Arial" size="2" ><b> HCL prod (50 mx) </b></font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >25 ˚C</font></td>
                        <td align="center"><font face="Arial" size="2" ><b>HCL Space (378)</b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2" >23 m³</font></td>
                        <td align="center" ><font face="Arial" size="2"><b>Full N2 on site (10 min)</b></font></td>
                        <td  align="center" colSpan={3}><font face="Arial" size="2" >0 cyl</font></td>
                    </tr>
                    <tr>
                        <td  bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Evap</b></font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2">Eff%</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" >&nbsp;</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Prev Optr</b></font></td>
                        <td bgcolor="#BFBFBF" align="center" colSpan={3}><font face="Arial" size="2" >Saito</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Pres Optr</b></font></td>
                        <td  bgcolor="#BFBFBF" align="center" colSpan={3} ><font face="Arial" size="2" >Shiraishi</font></td>
                        <td  rowSpan={3} colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2"><b>NaOH (10.83): </b></font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2">0 dmt</font></td>
                        <td align="center"><font face="Arial" size="2"><b>Conc (49±1%)</b></font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2"><b>SG</b></font></td>
                        <td align="center"><font face="Arial" size="2">65</font></td>
                        <td align="center"><font face="Arial" size="2"><b>Vac Press (400-600)</b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">500 mmHg</font></td>
                    </tr>
                    <tr>
                        <td  align="center"><font face="Arial" size="2" ><b>Evap feed (3-5):</b></font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >0 m³/hr</font></td>
                        <td align="center"><font face="Arial" size="2" ><b>TK9 Level (688)</b></font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2" >22 %/m³</font></td>
                        <td align="center"><font face="Arial" size="2" ><b>TK8 Level (688)</b></font></td>
                        <td  align="center" colSpan={3}><font face="Arial" size="2" >21 %/m³</font></td>
                    </tr>
                    <tr>
                        <td  bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Primary Brine</b></font></td>
                        <td bgcolor="#BFBFBF" align="center" colSpan={2}><font face="Arial" size="2" >&nbsp;</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Prev Optr</b></font></td>
                        <td  bgcolor="#BFBFBF" colSpan={3} align="center"><font face="Arial" size="2" >Suzuki</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Pres Optr</b></font></td>
                        <td  bgcolor="#BFBFBF" colSpan={3} align="center"><font face="Arial" size="2" >Ikuta</font></td>
                        <td  rowSpan={4} colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td  align="center"><font face="Arial" size="2">Salt load (6-10):</font></td>
                        <td align="center"  colSpan={2}><font face="Arial" size="2">7</font></td>
                        <td align="center"><font face="Arial" size="2">Ca+Mg (5 max)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">0 ppm</font></td>
                        <td align="center"><font face="Arial" size="2">Brine overflow</font></td>
                        <td  align="center" colSpan={3}><font face="Arial" size="2"> NONE</font></td>
                    </tr>
                    <tr>
                        <td  align="center"><font face="Arial" size="2" >Pol Brine (280-320)</font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >0 gpl</font></td>
                        <td align="center"><font face="Arial" size="2" >Xcess NaOH (0.1-1.5)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2" >0 gpl</font></td>
                        <td align="center"><font face="Arial" size="2" >Xcess Na₂CO₃(0.1-1.5)</font></td>
                        <td  align="center" colSpan={3}><font face="Arial" size="2" >0 gpl</font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2">Precoat (75hrs):</font></td>
                        <td align="center"><font face="Arial" size="2"> A / B</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">∆P(0.2):</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">0 MPa</font></td>
                        <td align="center"><font face="Arial" size="2">Flow (20 min)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">0 </font></td>
                    </tr>
                    <tr>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Electrolysis</b></font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b> Eff% </b></font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" >&nbsp;</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Prev Optr</b></font></td>
                        <td bgcolor="#BFBFBF" colSpan={3} align="center"><font face="Arial" size="2" >Nakada</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b> Pres Optr </b></font></td>
                        <td bgcolor="#BFBFBF" colSpan={3} align="center"><font face="Arial" size="2" >Akimoto</font></td>
                        <td rowSpan={4} colSpan={2} align="center"><font face="Arial" size="2"></font></td>
                    </tr>
                    <tr>
                        <td align="center"><font face="Arial" size="2" >Cell Liquor (11.90):</font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >10.0 dmt</font></td>
                        <td align="center" colSpan={1}><font face="Arial" size="2" >Conc(31±1%)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2" >0</font></td>
                        <td align="center"><font face="Arial" size="2" >Full N2 on site (4 min)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2" >0 cylinders</font></td>
                    </tr>
                    <tr>
                        <td  align="center"><font face="Arial" size="2" >SPB/NaOH(60-90)</font></td>
                        <td align="center"><font face="Arial" size="2" >0</font></td>
                        <td align="center"><font face="Arial" size="2" >0</font></td>
                        <td  align="center" colSpan={1}><font face="Arial" size="2"  >NaOH Flowrate (21) :</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2" >0 m³/hr</font></td>
                        <td align="center"><font face="Arial" size="2" >Decomposer</font></td>
                        <td  align="center"><font face="Arial" size="2" >OFFLINE</font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >65 &deg;C</font></td>
                    </tr>
                    <tr>
                        <td  align="center"><font face="Arial" size="2">Chelate (42hrs /tk):</font></td>
                        <td align="center"><font face="Arial" size="2">A - 28</font></td>
                        <td align="center"><font face="Arial" size="2">B - 45</font></td>
                        <td align="center"><font face="Arial" size="2">DB Free Cl2</font></td>
                        <td align="center"><font face="Arial" size="2">23</font></td>
                        <td align="center"><font face="Arial" size="2">SG</font></td>
                        <td align="center"><font face="Arial" size="2">43</font></td>
                        <td align="center"><font face="Arial" size="2">DB NaCl (180-220) / SPB (280-320)</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2">0</font></td>
                    </tr>
                    <tr>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2"><b>HYPO: (20.11)</b></font></td>
                        <td bgcolor="#BFBFBF" colSpan={2} align="center"><font face="Arial" size="2"><b>WCl2 ( )</b></font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2"><b>Prev Op</b></font></td>
                        <td bgcolor="#BFBFBF" align="center" colSpan={3}><font face="Arial" size="2">Ybanez</font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2"><b>Pres Optr</b></font></td>
                        <td bgcolor="#BFBFBF" align="center"  colSpan={3}><font face="Arial" size="2">Jimenez</font></td>
                        <td rowSpan={4} colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">Hypo : (7.8±3% NaOCl) / # of batches (60)</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                    </tr>
                    <tr>
                        <td colSpan={3} align="center"><font face="Arial" size="2">Excess NaOH (0.4-1.0%)/ Storage #</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                        <td align="center"><font face="Arial" size="2">0</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">Production</font></td>
                        <td align="center"><font face="Arial" size="2">50</font></td>
                        <td align="center" colSpan={4}><font face="Arial" size="2">Space (430)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">100</font></td>
                    </tr>

                    <tr>
                        <td bgcolor="#BFBFBF" colSpan={3} align="center"><font face="Arial" size="2"><b>QC Brine</b></font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2"><b>Actual</b></font></td>
                        <td bgcolor="#BFBFBF" colSpan={4} align="center"><font face="Arial" size="2"><b>QC Brine and Product</b></font></td>
                        <td bgcolor="#BFBFBF" colSpan={3} align="center"><font face="Arial" size="2"><b>Actual</b></font></td>
                        <td rowSpan={6} colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td  align="center" colSpan={3}><font face="Arial" size="2">SPB Ca+Mg (15+5 ppb mx)</font></td>
                        <td align="center"><font face="Arial" size="2">500</font></td>
                        <td align="center" colSpan={4}><font face="Arial" size="2">DB Free Cl2 (negative)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">Negative</font></td>
                    </tr>
                    <tr>
                        <td colSpan={3} align="center"><font face="Arial" size="2">SPB NaClO3 (20 gpl max)</font></td>
                        <td align="center"><font face="Arial" size="2">200</font></td>
                        <td colSpan={4} align="center"><font face="Arial" size="2">NaOH 50% on-line (49±1%)</font></td>
                        <td colSpan={3} align="center"><font face="Arial" size="2">0</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3} ><font face="Arial" size="2">SPB Na2SO4 (7 gpl max)</font></td>
                        <td align="center"><font face="Arial" size="2">300</font></td>
                        <td align="center" colSpan={4}><font face="Arial" size="2">NaOH 32% on-line (31±1%)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">0</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">DB NaClO3 (20 gpl max)</font></td>
                        <td align="center"><font face="Arial" size="2">200</font></td>
                        <td align="center" colSpan={4}><font face="Arial" size="2">NaOH Fe (5ppm max)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">0</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">DB NaCl (180-220 gpl)</font></td>
                        <td align="center"><font face="Arial" size="2">200</font></td>
                        <td align="center" colSpan={4}><font face="Arial" size="2">HCL on-line (32+1.5)</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2">0</font></td>
                    </tr>
                    <tr>
                        <td bgcolor="#BFBFBF" colSpan={3} align="center"><font face="Arial" size="2" ><b>Specific Usages /</b></font></td>
                        <td bgcolor="#BFBFBF" align="center"><font face="Arial" size="2" ><b>Std</b></font></td>
                        <td bgcolor="#BFBFBF" colSpan={4} align="center"><font face="Arial" size="2" ><b>Actual Consumption</b></font></td>
                        <td width={130} bgcolor="#BFBFBF" colSpan={2} align="center"><font face="Arial" size="2" ><b>per DMT NaOH <br/> (shift)</b></font></td>
                        <td width={130} bgcolor="#BFBFBF" colSpan={1} align="center"><font face="Arial" size="2" ><b>per DMT NaOH <br/> (Mtd)</b></font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2"><b>Sp Evaluation</b></font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">Salt</font></td>
                        <td align="center"><font face="Arial" size="2">1.74</font></td>
                        <td colSpan={4} align="center"><font face="Arial" size="2">5 mt</font></td>
                        <td colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                        <td align="center"><font face="Arial" size="2">0.000</font></td>
                        <td align="center"><font face="Arial" size="2">Plan vol attained</font></td>
                        <td align="center"><font face="Arial" size="2">NO</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">Soda Ash</font></td>
                        <td align="center"><font face="Arial" size="2">5.6</font></td>
                        <td colSpan={4} align="center"><font face="Arial" size="2">4.8 kg</font></td>
                        <td colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                        <td align="center"><font face="Arial" size="2">0.000</font></td>
                        <td align="center"><font face="Arial" size="2">Prodn no off specs</font></td>
                        <td align="center"><font face="Arial" size="2">NO</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">NaOH</font></td>
                        <td align="center"><font face="Arial" size="2">0.014</font></td>
                        <td colSpan={4} align="center"><font face="Arial" size="2"> dmt</font></td>
                        <td colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                        <td align="center"><font face="Arial" size="2">0.000</font></td>
                        <td align="center"><font face="Arial" size="2">SP usage {"<"}= Std</font></td>
                        <td align="center"><font face="Arial" size="2">NO</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">HCl</font></td>
                        <td align="center"><font face="Arial" size="2">0.0224</font></td>
                        <td colSpan={4} align="center"><font face="Arial" size="2"> dmt</font></td>
                        <td colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                        <td align="center"><font face="Arial" size="2">0.000</font></td>
                        <td align="center"><font face="Arial" size="2">Proc Control w/n range</font></td>
                        <td align="center"><font face="Arial" size="2">NO</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">BaCl2</font></td>
                        <td align="center"><font face="Arial" size="2">1.6</font></td>
                        <td colSpan={4} align="center"><font face="Arial" size="2">7 kg</font></td>
                        <td colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                        <td align="center"><font face="Arial" size="2">0.000</font></td>
                        <td align="center"><font face="Arial" size="2">Manpower no 24 hrs duty</font></td>
                        <td align="center"><font face="Arial" size="2">NO</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">Flocullant</font></td>
                        <td align="center"><font face="Arial" size="2">13.9</font></td>
                        <td colSpan={4} align="center"><font face="Arial" size="2">10 grm</font></td>
                        <td colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                        <td align="center"><font face="Arial" size="2">0.000</font></td>
                        <td align="center"><font face="Arial" size="2">SReport Completeness</font></td>
                        <td width="80" align="center"><font face="Arial" size="2">NO</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}><font face="Arial" size="2">Sodium Sulfite</font></td>
                        <td align="center"><font face="Arial" size="2">2.2</font></td>
                        <td colSpan={4} align="center"><font face="Arial" size="2">7 kg</font></td>
                        <td colSpan={2} align="center"><font face="Arial" size="2">&nbsp;</font></td>
                        <td align="center"><font face="Arial" size="2">0.000</font></td>
                        <td align="center"><font face="Arial" size="2">SHIFT RATING</font></td>
                        <td align="center"><font face="Arial" size="2">FAILURE</font></td>
                    </tr>
                    <tr>
                        <td  align="center" colSpan={3}><font face="Arial" size="2" >Alpha Cellulose</font></td>
                        <td  align="center"><font face="Arial" size="2" >30kg/75hrs</font></td>
                        <td  align="center" colSpan={4}><font face="Arial" size="2" >5.6 kg</font></td>
                        <td  colSpan={2} align="center"><font face="Arial" size="2" >Kg backwash used to date: </font></td>
                        <td  align="center"><font face="Arial" size="2" >25</font></td>
                        <td  align="center" colSpan={2}><font face="Arial" size="2" >&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td  align="center" colSpan={3}><font face="Arial" size="2" >Power</font></td>
                        <td  align="center"><font face="Arial" size="2" >2350</font></td>
                        <td  align="center" colSpan={4}><font face="Arial" size="2" >4 kwhr</font></td>
                        <td  colSpan={2} align="center"><font face="Arial" size="2" >0.000</font></td>
                        <td  align="center"><font face="Arial" size="2" >&nbsp;</font></td>
                        <td  align="center" colSpan={2}><font face="Arial" size="2" >&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td  align="center" colSpan={3}><font face="Arial" size="2" >Steam(Evap / Brine)</font></td>
                        <td align="center"><font face="Arial" size="2" >1.31 / 0.30</font></td>
                        <td align="center" colSpan={4}><font face="Arial" size="2" >0.2 / 3</font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >0.1 / 0.5</font></td>
                        <td align="center"><font face="Arial" size="2" >0.4 / 0.3</font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td bgcolor="#BFBFBF" align="left" colSpan={11}><font face="Arial" size="2" ><b>Environment Monitoring</b></font></td>
                        <td align="center" colSpan={2} rowSpan={2}><font face="Arial" size="2" >&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="center" ><font face="Arial" size="2" >CLT: </font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >4</font></td>
                        <td align="center"><font face="Arial" size="2" >Cold Well: </font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >6</font></td>
                        <td align="center"><font face="Arial" size="2" >Total: </font></td>
                        <td align="center"><font face="Arial" size="2" >7</font></td>
                        <td align="center" colSpan={2}><font face="Arial" size="2" >After Digester</font></td>
                        <td align="center"><font face="Arial" size="2" >7</font></td>
                    </tr>
                    <tr>
                        <td bgcolor="#BFBFBF" align="left" colSpan={11}><font face="Arial" size="2" ><b>Quality Monitoring (every 1st Monday)</b></font></td>
                        <td align="center" colSpan={2} rowSpan={2}><font face="Arial" size="2" >&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >Inst calbn: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; labels &nbsp;/&nbsp; expiry</font></td>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >Lab Chem: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; labels &nbsp;/&nbsp; expiry</font></td>
                        <td align="left" colSpan={3}><font face="Arial" size="2" >GW Calbn: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; labels &nbsp;/&nbsp; expiry &nbsp;/&nbsp; broken</font></td>
                    </tr>
                    <tr>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >Cont Improvement: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; F &nbsp;/&nbsp; My &nbsp;/&nbsp; Au &nbsp;/&nbsp; N</font></td>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >GH Audit: &nbsp; ( ) done</font></td>
                        <td align="left" colSpan={3}><font face="Arial" size="2" >Variance Report: &nbsp;&nbsp;&nbsp;&nbsp; Ja &nbsp;&nbsp; A &nbsp;&nbsp; JI &nbsp;&nbsp; O</font></td>
                    </tr>

                    <tr>
                        <td bgcolor="#BFBFBF" align="left" colSpan="11"><font face="Arial" size="2" ><b>Emergency Preparedness (every 2nd Monday)</b></font></td>
                        <td align="center" colSpan={2} rowSpan={2}><font face="Arial" size="2" >&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="left" colSpan={8}><font face="Arial" size="2" >Drills (F My Au N): &nbsp;&nbsp; ( ) Fire &nbsp;&nbsp; ( ) Spills &nbsp;&nbsp; ( ) Cl2 &nbsp;&nbsp; ( ) First Aid &nbsp;&nbsp; ( ) Earthquake</font></td>
                        <td align="left" colSpan={3}><font face="Arial" size="2" >Emer Light: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ( ) Functioning</font></td>
                    </tr>
                    <tr>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >Alarms: &nbsp;&nbsp; ( ) Functioning</font></td>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >Eyewash &nbsp; ( ) Compliant</font></td>
                        <td align="left" colSpan={3}><font face="Arial" size="2" >Fire Extinguisher &nbsp; ( ) Inspected</font></td>
                    </tr>
                    <tr>
                        <td bgcolor="#BFBFBF" align="left" colSpan={11}><font face="Arial" size="2" ><b>Performance Mgt {"&"} Resource Conservation(every 3nd Monday)</b></font></td>
                        <td align="center" colSpan={2} rowSpan={2}><font face="Arial" size="2" >&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >Emer Reso Eqpt: &nbsp;&nbsp; ( ) Complete</font></td>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >Pollution Accident: &nbsp;&nbsp; ( ) None</font></td>
                        <td align="left" colSpan={3}><font face="Arial" size="2" >QObj/OTP's Report: &nbsp;&nbsp; Ja &nbsp;&nbsp; A &nbsp;&nbsp; JI &nbsp;&nbsp; O</font></td>
                    </tr>
                    <tr>
                        <td align="left" colSpan={4}><font face="Arial" size="2" > Brine Line:  ( ) Declog  &nbsp;( ) Still ok</font></td>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >Budget Review &nbsp; ( ) Done</font></td>
                        <td align="left" colSpan={3}><font face="Arial" size="2" >Risk Ass Report: &nbsp;&nbsp; Ja &nbsp;&nbsp; A &nbsp;&nbsp; JI &nbsp;&nbsp; O</font></td>
                    </tr>
                    <tr>
                        <td bgcolor="#BFBFBF" align="left" colSpan={11}><font face="Arial" size="2" ><b>Safety Monitoring(every 4th Monday)</b></font></td>
                        <td align="center" colSpan={2} rowSpan={2}><font face="Arial" size="2" >&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >O2 Tk press: </font></td>
                        <td align="left" colSpan={4}><font face="Arial" size="2" >PPE Check ( )</font></td>
                        <td align="left" colSpan={3}><font face="Arial" size="2" >Lightings &nbsp;&nbsp; ( &nbsp;) Functioning</font></td>
                    </tr> 
                    <tr>
                        <td align="left" colSpan={4}><font face="Arial" size="2" > SCBA press: </font></td>
                        <td align="left" colSpan={4}><font face="Arial" size="2" > Chlor-alert ( &nbsp;)</font></td>
                        <td align="left" colSpan={3}><font face="Arial" size="2" >&nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={4}><font face="Arial" size="2" > &nbsp;</font></td>
                        <td align="center" colSpan={4}><font face="Arial" size="2" > &nbsp;</font></td>
                        <td align="center" colSpan={3}><font face="Arial" size="2" > &nbsp;</font></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={4}><font face="Arial" size="2"><b> Prepared By: Section/Shift Supervisor </b></font></td>
                        <td align="center" colSpan={4}><font face="Arial" size="2"><b> Turnover: Incoming Section/Shift Supervisor</b></font></td>
                        <td align="left" colSpan={3}><font face="Arial" size="2" > <b>Noted By: Dept/Shift Manager</b></font></td>
                    </tr>
                </tbody>
            </table>
        </TableContainer>
    )
}

export default ShiftReportDoc