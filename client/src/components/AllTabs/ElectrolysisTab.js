import React from "react";
import {InputContainer, InputLabel, Label, Input} from './InputStyles' 

const ElectrolysisTab = () => {
    return(
        <InputContainer>
            <InputLabel>
                <Label>Electrolyzer Efficiency</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Cell Liquor Production</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Super Purified Brine Inlet Temperature</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>NaOH Inlet Temperature</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Chelate Operating Hours Tower A</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Chelate Operating Hours Tower B</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>NaOH Concentration</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>NaOH Specific Gravity</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>NaOH Flow Rate</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Depleted Brine Free Chlorine Quality</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Number of Nitrogen Cylinders Available</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Decomposer Operating Temperature</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Depleted Brine Concentration</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>
            <InputLabel>
                <Label>Super Purified Brine Concentration</Label>
                <Input placeholder="Enter value"></Input>
            </InputLabel>

        </InputContainer>
    )
}

export default ElectrolysisTab