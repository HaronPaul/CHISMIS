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

const UpdateModal = ({inventory, setInventory, handleClose}) => {
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
            try {
                const response = await axios.put('http://localhost:8000/api/v1/inventory/resetInventory', newInventory)
                console.log(response.data)
                if(response.data?.success) {
                    setInventory(response.data.data)
                    handleClose()
                } else 
                    handleClose()
            } catch(err) {
                console.log(err)
            }
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
                        placeholder='Add value'
                        type="number"
                        required
                        name='ac_salt'
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
                        placeholder='Add value'
                        type="number"
                        required
                        name='ac_bacl2'
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
                        placeholder='Add value'
                        type="number"
                        name='ac_soda_ash'
                        required
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
                        placeholder='Add value'
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
                        placeholder='Add value'
                        type="number"
                        name='ac_naoh'
                        required
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
                        placeholder='Add value'
                        type="number"
                        name='ac_hcl'
                        required
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
                        placeholder='Add value'
                        type="number"
                        name='ac_na2so3'
                        required
                        onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Button variant="contained" size="large" onClick={handleUpdateButton}> Update</Button>
                </form>
        </>
    )
}

export default UpdateModal