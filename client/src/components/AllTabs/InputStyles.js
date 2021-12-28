import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    margin: 1% 2%;
    min-width: 0;
    flex-wrap: wrap;
`

const InputLabel = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
    flex-grow: 1;
`

const Label = styled.label`
    margin-bottom: 6px;
    font-family: 'Roboto Bold';
    font-size: 0.9rem;
`

const Input = styled.input`
    padding: 10px 10px;
    border: none;
    border-radius: 5px;

    &:focus{
        outline: none;
        box-shadow: 9px 7px 10px -6px rgba(0,0,0,0.36);
        border: solid 1px #0540d4;
    }
`

export {InputContainer, InputLabel, Label, Input}