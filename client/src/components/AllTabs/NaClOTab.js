import React from "react";
import {InputContainer, InputLabel, Label, Input, Subcontainer, HorizontalContainer} from './InputStyles' 

const NaClOTab = () => {
    return(
        <InputContainer>
            <Subcontainer>
                <h2>NaOCl Concentration</h2>
                <HorizontalContainer>
                    <InputLabel>
                        <Label>CT 1</Label>
                        <Input ></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 2</Label>
                        <Input ></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 3</Label>
                        <Input ></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 4</Label>
                        <Input ></Input>
                    </InputLabel>
                </HorizontalContainer>
            </Subcontainer>
            <Subcontainer>
                <h2>Filter Batches</h2>
                <HorizontalContainer>
                    <InputLabel>
                        <Label>Filter Line 1</Label>
                        <Input ></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Filter Line 2</Label>
                        <Input ></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Filter Line 3</Label>
                        <Input></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Filter Line 4</Label>
                        <Input></Input>
                    </InputLabel>
                </HorizontalContainer>
            </Subcontainer>
            <Subcontainer>
                <h2>Excess NaOH Concentration</h2>
                <HorizontalContainer>
                    <InputLabel>
                        <Label>CT 1</Label>
                        <Input ></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 2</Label>
                        <Input ></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 3</Label>
                        <Input></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>CT 4</Label>
                        <Input></Input>
                    </InputLabel>
                </HorizontalContainer>
            </Subcontainer>

            <Subcontainer>
                <h2>Storage</h2>
                <HorizontalContainer>
                    <InputLabel>
                        <Label>Storage 1</Label>
                        <Input ></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Storage 2</Label>
                        <Input ></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Storage 3</Label>
                        <Input></Input>
                    </InputLabel>
                    <InputLabel>
                        <Label>Storage 4</Label>
                        <Input></Input>
                    </InputLabel>
                </HorizontalContainer>
            </Subcontainer>
        </InputContainer>
    )
}

export default NaClOTab