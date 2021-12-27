import React from "react";
import LoginForm from "../components/LogInForm";
import styled from "styled-components";
import HomeImage from '../assets/MVC-364.jpg'

const FrontContainer = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

const ImageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${HomeImage});
  background-size: cover;
`

const TitleContainer = styled.div`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  word-wrap: break-word;
`


const WebTitle = styled.h1`
  font-family: 'Bebas Neue';
  color: #004d40;
  font-size: 4em;
  letter-spacing: 7px;
`

const Acro = styled.h3`
  font-family: 'Roboto Thin'; 
  text-transform: uppercase;
  word-wrap: break-word;
`

const Home = () => {
    return(
    <FrontContainer>     
        <LoginForm/> 
        <ImageContainer>
          <TitleContainer>
            <WebTitle>CHISMIS</WebTitle>
            {/* <Acro> Centralized, Historical & Integrated Shift {"\n"} Management Information System</Acro> */}
          </TitleContainer>
        </ImageContainer>
      </FrontContainer>
    )
}

export default Home