import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from '../layout/Header';
import Dashboard from './office/Dashboard';
import Register from '../components/accounts/Register';
import Login from '../components/accounts/Login';
import ProtectedRoute from '../components/routes/ProtectedRoute';
import EditEmployee from '../components/office/EditEmployee';
import EditOffice from '../components/office/EditOffice';

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
            <ProtectedRoute exact path="/dashboard/employee/:id" component={ EditEmployee } />
            <ProtectedRoute exact path="/dashboard/office/:id" component={ EditOffice } />
          </Switch>
        </div>
      </Fragment>
    </Router>

  );

};

ReactDOM.render(<App />, document.getElementById('app'));