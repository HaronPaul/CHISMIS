import {Typography} from '@mui/material'
import styled from 'styled-components' 

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

const UsersPage = () => {
    return(
        <MainContainer>
            <Container>
                <Typography variant="h2"> Welcome User </Typography>
                <Typography variant="h5"> What would you like to do?</Typography>
            </Container>
        </MainContainer>
    )
}

export default UsersPage

