import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom'
import Registration from "./Registration"
import Cards_render from "./Cards_render"
import { Redirect } from 'react-router';
import { PrivateRoute } from './PrivateRoute';


const Main = (props) => (
  <main>
    <Redirect  from='/'  to='/table' exact  />
    <Switch>
      {/* <Route exact path='/registration' component={Registration}/> */}
      <Route exact path='/registration' component={() => (<Registration funcIsLogged={props.funcIsLogged} />)}/>
      <PrivateRoute exact path='/table' component={Cards_render}/>
    </Switch>
  </main>
)
export default Main;
