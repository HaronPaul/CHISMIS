import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './override.css'
import Home from "./pages/Home";
import CreateSR from './pages/CreateSR'
import Admin from "./pages/Admin";
import Supervisor from "./pages/Supervisor";
import Manager from "./pages/Manager"
import Users from "./pages/Users";
// import PrivateRoute from "./components/PrivateRoute";

const App = (props) => {

  return (
      <Routes>
          <Route path='/admin' exact element={<Admin/>}></Route>
          <Route path='/admin/users' exact element={<Users/>}></Route>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/supervisor' element={<Supervisor/>}></Route>
          <Route path='/manager' element={<Manager/>}></Route>
          {/* <PrivateRoute path='/manager' element={Manager}></PrivateRoute> */}
      </Routes>
  );  
}

export default App;