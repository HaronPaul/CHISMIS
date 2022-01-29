import React from "react";
import OSRTabs from "../components/Tabs";
import { Typography, makeStyles, Button } from "@material-ui/core";


const useStyles = makeStyles({
    mainContainer: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
    },

    title: {
        alignSelf: 'flex-start',
        marginTop: '2%',
        marginBottom: '1%',
        marginLeft: '5%',
    }
})

const CreateSR = (props) => {
    const classes = useStyles()

    return(
        <div className={classes.mainContainer}>  
            <Typography variant="h2" className={classes.title}>Create Operation Shift Report</Typography>
            <OSRTabs> </OSRTabs>
            <Button variant="outlined" style={{alignSelf: 'flex-end', marginRight: '5%', marginTop: '1%'}}>Submit Report</Button>

        </div>
    )
}

export default CreateSR