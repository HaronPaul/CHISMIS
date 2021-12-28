import React from "react";
import {InputContainer, InputLabel, Label, Input} from './InputStyles' 

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