import React, { useState } from 'react'
import styled from 'styled-components'
import HCLTab from './AllTabs/HCLTab'
import ControlRoomTab from './AllTabs/ControlRoomTab'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
`

const NavItems = styled.ul`
    width: 85%;
    background-color: #455a64;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const NavItem = styled.li`
    display: inline;
    font-family: 'Roboto Regular';
    font-size: 1.3rem;
    border: 1px solid white;
    border-top: none;
    border-bottom: none;
    width: 100%;
    text-align: center;
    background-color: ${props => props.active? 'teal':'white'};

    &:hover{
        cursor: pointer;
    }
`

const InputsContainer = styled.div`
    width: 85%;
    background-color: #cfd8dc;
    height: 40vh;
`

const Tabs = (props) => {

    const [activeTab, setActiveTab] = useState("tab1")
    const [activeContent, setActiveContent] = useState(ControlRoomTab)

    const switchTab = (tabNumber, component) => {
        console.log(tabNumber)
        setActiveTab(tabNumber)
        setActiveContent(component)
    }

    return( 
        <FormContainer>
            <NavItems>
                {/* Tab navigation */}
                <NavItem active={activeTab === "tab1"? true:false} onClick={() => switchTab("tab1", ControlRoomTab)}>Control Room</NavItem>
                <NavItem active={activeTab === "tab2"? true:false} onClick={() => switchTab("tab2", HCLTab)}>HCl</NavItem>
                <NavItem active={activeTab === "tab3"? true:false} onClick={() => switchTab("tab3")}>Evaporator</NavItem>
                <NavItem active={activeTab === "tab4"? true:false} onClick={() => switchTab("tab4")}>Primary Brine</NavItem>
                <NavItem active={activeTab === "tab5"? true:false} onClick={() => switchTab("tab5")}>QC Brine</NavItem>
                <NavItem active={activeTab === "tab6"? true:false} onClick={() => switchTab("tab6")}>Specific Usages</NavItem>
                <NavItem active={activeTab === "tab7"? true:false} onClick={() => switchTab("tab7")}>Others</NavItem>
            </NavItems>
            <InputsContainer>
                {activeContent}
            </InputsContainer>
        </FormContainer>
    )
}

export default Tabs