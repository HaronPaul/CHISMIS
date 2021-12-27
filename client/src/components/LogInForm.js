import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled.div`
    margin-top: 2%;
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-evenly;
`

const Button = styled.button`
    width: 40%;
    border-radius: 50px;
    border: none;
    color: #f5f5f5;
    background-color: #0277bd;

    &:hover {
        background-color: #01579b;
        cursor: pointer;
        transition: ease 0.25s;
    }
`

const Input = styled.input`
    width: 60%;
    height: 30px;
    border-radius: 10px;
    display: flex;
    text-align: center;
    border: 1px solid #757575;
    margin-bottom: 4%;
    height: 40px;

    &:active {
        border: 1px solid #0277bd;
    }
`
const SignInHeader = styled.h1`
    margin-bottom: 3%;
    font-family: 'Roboto Bold';
    letter-spacing: 2px;
`
const Header = styled.h1`
    text-align: center;
    font-size: 20px;
    margin: 3px;
    color: #212121;
    font-family: 'Roboto Thin';
`

const LoginForm = () => {
    return(
        <Container>
            <SignInHeader>SIGN IN</SignInHeader>
            <InputContainer>
                <Header> Username</Header>
                <Input placeholder="Enter Username"/>
                <Header> Password</Header>
                <Input placeholder="Enter Password" type="password"/>
                <ButtonContainer>
                    <Button>Sign in as Manager</Button>
                    <Button>Sign in as Supervisor</Button>
                </ButtonContainer>
            </InputContainer>
        </Container>
    )   
}

export default LoginForm