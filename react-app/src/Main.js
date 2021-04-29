import React from "react";
import { Switch, Route } from 'react-router-dom'
import Registration from "./Registration"
import Dashboard from "./Dashboard"
import { Redirect } from 'react-router';
import { PrivateRoute } from './PrivateRoute';


const Main = (props) => (
  <main>
    <Redirect  from='/'  to='/dashboard' exact  />
    <Switch>
      <Route exact path='/registration' component={() => (<Registration funcIsLogged={props.funcIsLogged} />)}/>
      <PrivateRoute exact path='/dashboard' component={Dashboard}/>
    </Switch>
  </main>
)
export default Main;
