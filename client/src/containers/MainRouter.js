import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import FAEPage from './pages/FAEPage'
import COVIDPage from './pages/COVIDPage'


export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        
        <Route exact path={"/lynfield"} component={FAEPage} />
        <Route exact path={"/covid"} component={COVIDPage} />

        {/* Default path if nothing matches */}
        <Route path={"/"} component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}