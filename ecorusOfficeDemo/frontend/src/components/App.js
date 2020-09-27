import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from '../layout/Header';
import Dashboard from './office/Dashboard';
import Register from '../components/accounts/Register';
import Login from '../components/accounts/Login';
import ProtectedRoute from '../components/routes/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <ProtectedRoute exact path="/dashboard" component={ Dashboard } />
          </Switch>
        </div>
      </Fragment>
    </Router>

  );

};

ReactDOM.render(<App />, document.getElementById('app'));