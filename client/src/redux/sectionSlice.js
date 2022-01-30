import { createSlice } from "@reduxjs/toolkit";
import { controlRoom_values, hcl_values, evap_values, prBrine_values, electro_values, naclo_values } from "./tabStates";

const sectionSlice = createSlice({
    name: "section",
initialState: {
        controlRoomSection: controlRoom_values,
        hclSection: hcl_values,
        evapSection: evap_values,
        prBrineSection: prBrine_values,
        electroSection: electro_values,
        nacloSection: naclo_values,
        qcBrineSection: null,
        usagesSection: null,
        evalSection: null
    },
    reducers: { 
        addControlRoom: (state, action) => {
            state.controlRoomSection[`${action.payload.name}`] = action.payload.value;
        },
        addHcl: (state, action) => {
            state.hclSection[`${action.payload.name}`] = action.payload.value;
        },
        addEvap: (state, action) => {
            state.evapSection[`${action.payload.name}`] = action.payload.value
        },
        addPrBrine: (state, action) => {
            state.prBrineSection[`${action.payload.name}`] = action.payload.value
        },
        addElectro: (state, action) => {
            state.electroSection[`${action.payload.name}`] = action.payload.value
        },
        addNaocl: (state,action) => {
            state.nacloSection[`${action.payload.name}`] = action.payload.value
        },
        addQcbrine: (state, action) => {
            state.qcBrineSection = action.payload
        },
        addUsages: (state,action) => {
            state.usagesSection = action.payload
        },
        addEval: (state,action) => {
            state.evalSection = action.payload
        },
    }
})

export const {addControlRoom, addHcl, addEvap, addPrBrine, addElectro, addNaocl, addQcbrine, addUsages, addEval } = sectionSlice.actions

export default sectionSlice.reducer