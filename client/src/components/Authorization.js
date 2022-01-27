import React, {useContext} from "react";
import Home from "../pages/Home";
import CreateSR from '../pages/CreateSR'
import Admin from "../pages/Admin";
import Supervisor from "../pages/Supervisor";
import Manager from "../pages/Manager"
import Users from "../pages/Users";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext";
import jwt from 'jwt-decode'

const Authorization = () => {
    const [user] = useContext(UserContext)
    if(sessionStorage.getItem('token') && user) {
        return( 
            <BrowserRouter>
                <Routes>
                    <Route path='/admin' exact element={<Admin/>}></Route>
                    <Route path='/admin/users' exact element={<Users/>}></Route>
                    <Route path='/supervisor' element={<Supervisor/>}></Route>
                    <Route path='/manager' element={<Manager/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    } else {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Authorization