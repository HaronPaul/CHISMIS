import React, {useState, useRef} from 'react'
import { Typography, TextField, Grid, Button } from "@mui/material"
import axios from 'axios'
import makeStyles from '@mui/styles/makeStyles'

const useStyle = makeStyles({
    textField: {
        width: '100%'
    },

    gridContainer: {
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '20px'
    }
})

const UpdateModal = ({inventory}) => {
    const classes = useStyle()
    const [newInventory, setNewInventory] = useState({...inventory})
    const formRef = useRef()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(value)
        setNewInventory({...newInventory, [name]: parseFloat(value)})
    }

    const handleUpdateButton = async () => {
        const validity = formRef.current.reportValidity()
        if(validity) {
            const response = await axios.put('http://localhost:8000/api/v1/inventory/resetInventory', newInventory)
            console.log(response)
        }
    }

    return(
        <>
            <form ref={formRef}>
                <Typography variant='h3' style={{textAlign: 'center', marginBottom: '20px'}}>Edit Inventory</Typography>
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <Typography variant='h6'> Salt:  </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant='h6' style={{fontWeight: '600'}}>{inventory.ac_salt}</Typography>
                    </Grid>
                    <Grid item lg={8}>
                        <TextField 
                        className={classes.textField}
                        placeholder='New value'
                        type="number"
                        required
                        name='ac_salt'
                        value={newInventory.ac_salt || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <Typography variant='h6'> BaCl2</Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant='h6' style={{fontWeight: '600'}}>{inventory.ac_bacl2}</Typography>
                    </Grid>
                    <Grid item lg={8}>
                        <TextField 
                        className={classes.textField}
                        placeholder='New value'
                        type="number"
                        required
                        name='ac_bacl2'
                        value={newInventory.ac_bacl2 || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <Typography variant='h6'>Soda Ash</Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant='h6' style={{fontWeight: '600'}}>{inventory.ac_soda_ash}</Typography>
                    </Grid>
                    <Grid item lg={8}>
                        <TextField 
                        className={classes.textField}
                        placeholder='New value'
                        type="number"
                        name='ac_soda_ash'
                        required
                        value={newInventory.ac_soda_ash || ''}
                        onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <Typography variant='h6'>Flocullant</Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant='h6' style={{fontWeight: '600'}}>{inventory.ac_flocullant}</Typography>
                    </Grid>
                    <Grid item lg={8}>
                        <TextField 
                        className={classes.textField}
                        placeholder='New value'
                        type="number"
                        name='ac_flocullant'
                        required
                        value={newInventory.ac_flocullant || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <Typography variant='h6'>NaOH</Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant='h6' style={{fontWeight: '600'}}>{inventory.ac_naoh}</Typography>
                    </Grid>
                    <Grid item lg={8}>
                        <TextField 
                        className={classes.textField}
                        placeholder='New value'
                        type="number"
                        name='ac_naoh'
                        required
                        value={newInventory.ac_naoh || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <Typography variant='h6'>HCl</Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant='h6' style={{fontWeight: '600'}}>{inventory.ac_hcl}</Typography>
                    </Grid>
                    <Grid item lg={8}>
                        <TextField 
                        className={classes.textField}
                        placeholder='New value'
                        type="number"
                        name='ac_hcl'
                        required
                        value={newInventory.ac_hcl || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <Typography variant='h6'>Sodium Sulfite</Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant='h6' style={{fontWeight: '600'}}>{inventory.ac_na2so3}</Typography>
                    </Grid>
                    <Grid item lg={8}>
                        <TextField 
                        className={classes.textField}
                        placeholder='New value'
                        type="number"
                        name='ac_na2so3'
                        required
                        value={newInventory.ac_na2so3 || ''}
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Button variant="contained" size="large" onClick={handleUpdateButton}> Update</Button>
                </form>
        </>
    )
}

export default UpdateModal