import React from "react";
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

const ControlRoomTab = () => {
    return(
        <InputContainer>
            <InputLabel>
                <Label> Interlock Engaged </Label>
                <Input placeholder="Enter interlock engaged"></Input>
            </InputLabel>
            <InputLabel>
                <Label> DAQ Operational </Label>
                <Input placeholder="Enter DAQ Operational"></Input>
            </InputLabel>
            <InputLabel>
                <Label> Rectifier Raw Water </Label>
                <Input placeholder="Enter DAQ Operational"></Input>
            </InputLabel>
            <InputLabel>
                <Label> Number of Cells </Label>
                <Input placeholder="Enter number of cells"></Input>
            </InputLabel>
            <InputLabel>
                <Label> Average Load </Label>
                <Input placeholder="Enter average load"></Input>
            </InputLabel>
            <InputLabel>
                <Label> End of Shift Load </Label>
                <Input placeholder="Enter end of shift load"></Input>
            </InputLabel>
            <InputLabel>
                <Label> Rectifier demi water </Label>
                <Input placeholder="Enter Rectifier demi water"></Input>
            </InputLabel>
            <InputLabel>
                <Label> Cells High Voltage </Label>
                <Input placeholder="Enter cells high voltage"></Input>
            </InputLabel>
            <InputLabel>
                <Label> Cells High Voltage </Label>
                <Input placeholder="Enter cells high voltage"></Input>
            </InputLabel>
            <InputLabel>
                <Label> Cells Total Voltage </Label>
                <Input placeholder="Enter cells total voltage"></Input>
            </InputLabel>
            <InputLabel>
                <Label> Transformer oil temperature </Label>
                <Input placeholder="Enter transformer oil temperature"></Input>
            </InputLabel>
        </InputContainer>
    )
}

export default ControlRoomTab