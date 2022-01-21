import React, { useState } from 'react'
import {Tabs, Tab} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ControlRoomTab from './AllTabs/ControlRoomTab'
import HCLTab from './AllTabs/HCLTab'
import EvapTabs from './AllTabs/EvapTabs'
import BrineTab from './AllTabs/BrineTab'
import ElectrolysisTab from './AllTabs/ElectrolysisTab'
import NaCLOTab from './AllTabs/NaClOTab'
import QCBrine from './AllTabs/QCBrine'
import SpecificUsagesTab from './AllTabs/SpecificUsages'

const useStyles = makeStyles({
    mainContainer: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
    },


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
        <div className={classes.mainContainer}>
            <div className={classes.container}>
            <Tabs 
                value={value}
                onChange={handleTabs}
                variant="fullWidth" 
                textColor="white"
                indicatorColor='primary'>
                    <Tab label="Control Room" wrapped> </Tab>
                    <Tab label="HCL" wrapped> </Tab>
                    <Tab label="Evaporator" wrapped> </Tab>
                    <Tab label="Primary Brine" wrapped> </Tab>
                    <Tab label="Electrolysis" wrapped> </Tab>
                    <Tab label="Hypochlorite" wrapped> </Tab>
                    <Tab label="QC Brine" wrapped> </Tab>
                    <Tab label="Specific Usages" wrapped> </Tab>
                    <Tab label="SP Evaluation" wrapped> </Tab>
            </Tabs>
            </div>
            <div className={classes.tabPanelContainer}>
                <TabPanel value={value}></TabPanel>
            </div>
            
        </div>
    )
}

const TabPanel = ({value}) => {
    switch(value) {
        case 0: return <ControlRoomTab />
        case 1: return <HCLTab />
        case 2: return <EvapTabs />
        case 3: return <BrineTab />
        case 4: return <ElectrolysisTab />
        case 5: return <NaCLOTab/>
        case 6: return <QCBrine />   
        case 7: return <SpecificUsagesTab/>  
        case 8: return <h1> Wew8 </h1>
        default: return <ControlRoomTab />
    }
}

export default OSRTabs