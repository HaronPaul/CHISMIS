import {Typography} from '@mui/material'
import styled from 'styled-components' 
import ProtectedComponent from '../components/ProtectedComponent'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// SVG Imports for icons
import people from '../assets/icons/people.svg'
import report from '../assets/icons/report.svg'
import users from '../assets/icons/users.svg'
import inventory from '../assets/icons/inventory.svg'
import sign_report from '../assets/icons/sign_report.svg'
import create_report from '../assets/icons/create_report.svg'

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    padding: 2%;
    width: 90%;
    margin-top: 2%;
    border-radius: 20px;
`

const BoxContainer = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 20px;
`

const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color: #F5F5F5;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;
    text-decoration: none;

    :hover {
        background-color: #B0BEC5;
        cursor: pointer; 
        transition: 0.2s ease-in-out;
    }
`

const Image = styled.img`
    width: 50%;
    height: 50%;
    object-fit: contain;
`

const UsersPage = () => {
    const {firstName} = useSelector((state)=> state.user)

    return(
        <MainContainer>
            <Container>
                <Typography variant="h2"> Welcome {firstName} </Typography>
                <Typography variant="h5"> What would you like to do?</Typography>
                <BoxContainer>
                    <ProtectedComponent allowedRoles={[1999]}>
                        <Link to='manage_users'>
                            <Box>
                                <Image src={users}/>
                                <Typography variant='h6' style={{color: 'black'}}>Edit Users</Typography>
                            </Box>
                        </Link>
                    </ProtectedComponent>

                    <ProtectedComponent allowedRoles={[2121]}>
                        <Link to='supervisor/create'>
                        <Box>
                            <Image src={create_report}/>
                            <Typography variant='h6' style={{color: 'black'}}>Create Shift Report</Typography>
                        </Box>
                        </Link>
                    </ProtectedComponent>
                    
                    <ProtectedComponent allowedRoles={[2121,2699]}>
                        <Box>
                            <Image src={sign_report}/>
                            <Typography variant='h6' style={{color: 'black'}}>Sign Pending Reports</Typography>
                        </Box>
                    </ProtectedComponent>

                    <ProtectedComponent allowedRoles={[2121,2699]}>
                        <Box>
                            <Image src={inventory}/>
                            <Typography variant='h6' style={{color: 'black'}}>Edit Inventory</Typography>
                        </Box>
                    </ProtectedComponent>
                </BoxContainer>
            </Container>
        </MainContainer>
    )
}

export default UsersPage

