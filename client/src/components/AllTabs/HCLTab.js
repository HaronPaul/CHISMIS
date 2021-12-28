import React from "react";
import {InputContainer, InputLabel, Label, Input} from './InputStyles' 


const HCLTab = (props) => {

    return(
        <InputContainer>
            <InputLabel>
                <Label>HCL Synthesis Efficiency</Label>
                <Input placeholder="%"></Input>
            </InputLabel>
            <InputLabel>
                <Label>HCL Production</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Scrubbed Chlorine Temperature</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>HCl Product Temperature</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>HCl Concentration</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>HCl Specific Gravity</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Sigri Cooling Water</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>HCl Space</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>ClH2O Flow Rate</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Sigri Inlet Pressure Chlorine</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Sigri Inlet Pressure Hydrogen</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Number of Nitrogens Available</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
        </InputContainer>       
    )
}

export default HCLTab