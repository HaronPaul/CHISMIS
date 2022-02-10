import React, { useState } from 'react'
import {Tabs, Tab} from '@mui/material'
import { makeStyles } from '@mui/styles'

import ControlRoomTab from './AllTabs/ControlRoomTab'
import HCLTab from './AllTabs/HCLTab'
import EvapTabs from './AllTabs/EvapTabs'
import BrineTab from './AllTabs/BrineTab'
import ElectrolysisTab from './AllTabs/ElectrolysisTab'
import NaCLOTab from './AllTabs/NaClOTab'
import QCBrine from './AllTabs/QCBrine'
import SpecificUsagesTab from './AllTabs/SpecificUsages'
import SPEval from './AllTabs/SPEval'
 
const useStyles = makeStyles({
    container: {
        width: '90%',
        flexGrow: 1,
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        backgroundColor: '#4dabf5',
    },

    tabPanelContainer: {
        width: '90%',
        backgroundColor: 'whitesmoke',
        boxSizing: 'border-box',
        padding: '1%'
    }
})

const OSRTabs = (props) => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    
    const handleTabs = (event, value) => {
        setValue(value)
    }

    return( 
        <>
            <div className={classes.container}>
                <Tabs 
                    value={value}
                    onChange={handleTabs}
                    variant="fullWidth" 
                    scrollButtons="auto"
                    indicatorColor='secondary'
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#000000"
                         }
                    }}>
                        <Tab label="Control Room" wrapped />
                        <Tab label="HCL" wrapped />
                        <Tab label="Evaporator" wrapped /> 
                        <Tab label="Primary Brine" wrapped/> 
                        <Tab label="Electrolysis" wrapped /> 
                        <Tab label="Hypochlorite" wrapped/> 
                        <Tab label="QC Brine" wrapped/> 
                        <Tab label="Specific Usages" wrapped/>
                </Tabs>
            </div>
            <div className={classes.tabPanelContainer}>
                <TabPanel value={value}></TabPanel>
            </div>
        </>
    )
}

const TabPanel = ({value}) => {
    switch(value) {
        case 0: return <ControlRoomTab/>
        case 1: return <HCLTab />
        case 2: return <EvapTabs />
        case 3: return <BrineTab />
        case 4: return <ElectrolysisTab />
        case 5: return <NaCLOTab/>
        case 6: return <QCBrine />   
        case 7: return <SpecificUsagesTab/>  
        default: return <ControlRoomTab />
    }
}

export default OSRTabs