import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route, Switch, Redirect} from 'react-router-dom'
import './override.css'
import Home from "./pages/Home";
import CreateSR from './pages/CreateSR'
import Admin from "./pages/Admin";
import Supervisor from "./pages/Supervisor";
import Manager from "./pages/Manager"
import Users from "./pages/Users";
import { useSelector } from "react-redux";
import {ThemeProvider} from '@mui/styles' 
import { createTheme } from "@mui/material";
import MyDocument from "./components/PDFDocument";
import { PDFViewer } from '@react-pdf/renderer';
// import PrivateRoute from "./components/PrivateRoute";

const App = (props) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    }
  })
  const {currentUser} = useSelector((state) => state.user)
  
  let roleRoute = '/'
  if(currentUser) {
    if(currentUser.role === "MANAGER")
      roleRoute = '/manager'
    else if(currentUser.role === "SUPERVISOR")
      roleRoute = '/supervisor'
    else if(currentUser.role === "ADMINISTRATOR")
      roleRoute = '/admin'
  }

  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>

    // <ThemeProvider theme={theme}>
    //     <Switch>
    //         <Route path='/admin' exact>
    //           <Admin/>
    //         </Route>
    //         <Route path='/admin/users' exact>
    //           <Users/>
    //         </Route>
    //         <Route path='/' exact>
    //           {currentUser? <Redirect to={roleRoute}/>:<Home theme={theme}/>}
    //         </Route>
    //         <Route path='/supervisor' exact>
    //           <Supervisor/>
    //         </Route>
    //         <Route path='/supervisor/create'>
    //           <CreateSR/>
    //         </Route>
    //         <Route path='/manager'>
    //           <Manager/>
    //         </Route>
    //     </Switch>
    //   </ThemeProvider>
  );  
}

export default App;