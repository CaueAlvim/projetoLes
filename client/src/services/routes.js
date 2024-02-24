import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from '../../pages/Main/Login/index';

function Routes() {
  return (
    <div style={{height: '100%', overflow: "auto"}}>
    <Router >
      <Switch >
        {/*<Route path="/login" component={Login} />*/}
      </Switch>
    </Router>
    </div>
  );
}


export default Routes;