import { createSlice } from "@reduxjs/toolkit";
import { controlRoom_values } from "./tabStates";

const sectionSlice = createSlice({
    name: "section",
    initialState: {
        controlRoomSection: controlRoom_values,
        hclSection: null,
        evapSection: null,
        prBrineSection: null,
        electroSection: null,
        naoclSection: null,
        qcBrineSection: null,
        usagesSection: null,
        evalSection: null
    },
    reducers: { 
        addControlRoom: (state, action) => {
            state.controlRoomSection = action.payload;
        },
        addHcl: (state, action) => {
            state.hclSection = action.payload;
        },
        addEvap: (state, action) => {
            state.evapSection = action.payload
        },
        addPrBrine: (state, action) => {
            state.prBrineSection = action.payload
        },
        addElectro: (state, action) => {
            state.electroSection = action.payload
        },
        addNaocl: (state,action) => {
            state.naoclSection = action.payload
        },
        addQcbrine: (state, action) => {
            state.qcBrineSection = action.payload
        },
        addUsages: (state,action) => {
            state.usagesSection = action.payload
        },
        addEval: (state,action) => {
            state.evalSection = action.payload
        }
    }
})

export const {addControlRoom, addHcl, addEvap, addPrBrine, addElectro, addNaocl, addQcbrine, addUsages, addEval } = sectionSlice.actions

export default sectionSlice.reducer