import { loginFailure, loginStart, loginSuccess } from "./userSlice"

import axios from 'axios'

export const login = async(dispatch, user) => {
    dispatch(loginStart())
    try {
        const response = await axios.post('http://localhost:8000/api/v1/user/login', user)
        console.log(response.data)  
        dispatch(loginSuccess(response.data.user))
    } catch(error) {
        dispatch(loginFailure())
    }
}




