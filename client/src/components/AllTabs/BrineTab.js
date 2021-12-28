import React from "react";
import {InputContainer, InputLabel, Label, Input} from './InputStyles' 

const BrineTab = () => {
    return(
        <InputContainer>    
            <InputLabel>
                <Label>Month to Date Salt Loaded</Label>
                <h3>Generate Value Here</h3>
            </InputLabel>
            <InputLabel>
                <Label>Salt Loaded</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Polished Brine Concentration</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Precoat Operating Hours</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Ca+Mg Concentration</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Excess NaOH Concentration</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Differential Pressure in Precoat</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Brine Overflow</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Excess Na2CO3 Concentration</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Precoat Flow Rate</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
        </InputContainer>
    )
}

export default BrineTab