import React, { useState } from 'react'
import styled from 'styled-components'
import HCLTab from './AllTabs/HCLTab'
import ControlRoomTab from './AllTabs/ControlRoomTab'
import EvapTabs from './AllTabs/EvapTabs'
import BrineTab from './AllTabs/BrineTab'
import ElectrolysisTab from './AllTabs/ElectrolysisTab'
import NaClOTab from './AllTabs/NaClOTab'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
`

const NavItems = styled.ul`
    width: 85%;
    height: 5vh;
    background-color: #455a64;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const NavItem = styled.li`
    display: flex;
    font-family: 'Roboto Regular';
    letter-spacing: 1px;
    font-size: 1.3rem;
    border: 1px solid white;
    border-top: none;
    border-bottom: none;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${props => props.active? 'black':'#b8bcbf'};
    border-top: ${props => props.active? '5px solid #0540d4': "0px"};
    background-color: ${props => props.active? '#cdd9f6':'white'};

    &:hover{
        cursor: pointer;
        /* background-color: #e0e0e0; */
        border-top: ${props => props.active? '5px solid #0540d4': "5px solid #424242"};
        background-color: ${props => props.active? '#cdd9f6':'#e0e0e0'};
        color: black;
        transition: 0.3s;
    }
`

const InputsContainer = styled.div`
    width: 85%;
    background-color: #cfd8dc;
    height: auto;
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
                <NavItem active={activeTab === "tab3"? true:false} onClick={() => switchTab("tab3", EvapTabs)}>Evaporator</NavItem>
                <NavItem active={activeTab === "tab4"? true:false} onClick={() => switchTab("tab4", BrineTab)}>Primary Brine</NavItem>
                <NavItem active={activeTab === "tab5"? true:false} onClick={() => switchTab("tab5", ElectrolysisTab)}>Electrolysis</NavItem>
                <NavItem active={activeTab === "tab6"? true:false} onClick={() => switchTab("tab6", NaClOTab)}>NaClO</NavItem>
                <NavItem active={activeTab === "tab7"? true:false} onClick={() => switchTab("tab7")}>QC Brine</NavItem>
                <NavItem active={activeTab === "tab8"? true:false} onClick={() => switchTab("tab8")}>Specific Usages</NavItem>
                <NavItem active={activeTab === "tab9"? true:false} onClick={() => switchTab("tab9")}>Others</NavItem>
            </NavItems>
            <InputsContainer>
                {activeContent}
            </InputsContainer>
        </FormContainer>
    )
}

export default Tabs