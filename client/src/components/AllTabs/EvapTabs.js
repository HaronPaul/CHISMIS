import React from "react";
import {InputContainer, InputLabel, Label, Input} from './InputStyles' 

const EvapTabs = (props) => {
    return (<InputContainer>
        <InputLabel>
            <Label>Evaporator Efficiency</Label>
            <Input placeholder="Enter value"></Input>
        </InputLabel>  
        <InputLabel>
            <Label>NaOH Production</Label>
            <Input placeholder="Enter value"></Input>
        </InputLabel>  
        <InputLabel>
            <Label>Evaporator feed flow rate</Label>
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
            <Label>Tank 8 Level</Label>
            <Input placeholder="Enter value"></Input>
        </InputLabel>
        <InputLabel>
            <Label>Tank 9 Level</Label>
            <Input placeholder="Enter value"></Input>
        </InputLabel>
        <InputLabel>
            <Label>Vacuum Pressure</Label>
            <Input placeholder="Enter value"></Input>
        </InputLabel>            
    </InputContainer>
    )
}

export default EvapTabs