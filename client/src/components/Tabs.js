import React, { useState } from 'react'
import {Tabs, Tab} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ControlRoomTab from './AllTabs/ControlRoomTab'
import HCLTab from './AllTabs/HCLTab'
import EvapTabs from './AllTabs/EvapTabs'


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
        case 3: return <h1> Wew3 </h1>
        case 4: return <h1> Wew4 </h1>
        case 5: return <h1> Wew5 </h1>
        case 6: return <h1> Wew6 </h1>   
        case 7: return <h1> Wew7 </h1>  
        case 8: return <h1> Wew8 </h1>      
    }
}

export default OSRTabs