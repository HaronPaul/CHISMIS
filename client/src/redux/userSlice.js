import {createSlice} from '@reduxjs/toolkit'

const originalState = {
    userLoggedIn: false,
    username: '',
    token: null,
    role: null,
    firstName: '',
    lastName: ''
} 

const userSlice = createSlice({
    name: "user",
    initialState: originalState,
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.accessToken
            state.role = action.payload.role
            state.username = action.payload.username
            state.userLoggedIn = true
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        changeToken: (state, action) => {
            state.token = action.payload.accessToken
            state.role = action.payload.role
            state.firstName = action.payload.firstName
            state.username = action.payload.username
            state.userLoggedIn = true
        },
        resetState: (state) => originalState,
    }
})

export const {setUser, changeToken, resetState} = userSlice.actions;
export default userSlice.reducer;