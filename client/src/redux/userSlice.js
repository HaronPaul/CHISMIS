import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        userLoggedIn: false,
        username: '',
        token: null,
        role: null
    },
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.accessToken
            state.role = action.payload.role
            state.username = action.payload.username
            state.userLoggedIn = true
        },
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;