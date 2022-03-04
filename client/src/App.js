import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import './override.css'
import Home from "./pages/Home";
import CreateSR from './pages/CreateSR'
import Admin from "./pages/Admin";
import Supervisor from "./pages/Supervisor";
import Manager from "./pages/Manager"
import Users from "./pages/Users";
import { useSelector } from "react-redux"
import WeeklyReportDoc from "./components/WeeklyReportDoc";
import WeeklyReport from "./pages/WeeklyReport";
import ViewReport from "./pages/ViewReport";

const App = (props) => {
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
      // <WeeklyReportDoc/>   
      // <WeeklyReport/>
      <Switch>
          <Route path='/admin' exact>
            <Admin/>
          </Route>
          <Route path='/admin/users' exact>
            <Users/>
          </Route>
          <Route path='/' exact>
            {currentUser? <Redirect to={roleRoute}/>:<Home/>}
          </Route>
          <Route path='/supervisor' exact>
            <Supervisor/>
          </Route>
          <Route path='/supervisor/create'>
            <CreateSR/>
          </Route>
          <Route path='/manager'>
            <Manager/>
          </Route>
      </Switch>
  );  
}

export default App;