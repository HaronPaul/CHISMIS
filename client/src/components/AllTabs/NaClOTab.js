import React from "react";
import {InputContainer, InputLabel, Label, Input, Subcontainer, HorizontalContainer, SubTitle} from './InputStyles' 

const NaClOTab = () => {
    return(
        <InputContainer>
            <Subcontainer>
                <SubTitle>NaOCl Concentration</SubTitle>
                <HorizontalContainer>
                    <InputLabel>
                        <Label>CT 1</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 2</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 3</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 4</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                </HorizontalContainer>
            </Subcontainer>
            <Subcontainer>
                <SubTitle>Filter Batches</SubTitle>
                <HorizontalContainer>
                    <InputLabel>
                        <Label>Filter Line 1</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Filter Line 2</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Filter Line 3</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Filter Line 4</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                </HorizontalContainer>
            </Subcontainer>
            <Subcontainer>
                <SubTitle>Excess NaOH Concentration</SubTitle>
                <HorizontalContainer>
                    <InputLabel>
                        <Label>CT 1</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 2</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 3</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 4</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                </HorizontalContainer>
            </Subcontainer>

            <Subcontainer>
                <SubTitle>Storage</SubTitle>
                <HorizontalContainer>
                    <InputLabel>
                        <Label>Storage 1</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Storage 2</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Storage 3</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Storage 4</Label>
                        <Input placeholder="Enter value"></Input>
                    </InputLabel>
                </HorizontalContainer>
            </Subcontainer>
        </InputContainer>
    )
}

export default NaClOTab