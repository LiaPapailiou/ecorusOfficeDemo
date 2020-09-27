import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Route
      { ...rest }
      render={ (props) => {
        if (!user) {
          history.push("/login");
        } else {
          return <Component { ...props } />;
        }
      } }
    />
  );
};

export default ProtectedRoute;