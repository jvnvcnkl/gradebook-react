import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectIsAuthenticated } from '../../store/activeUser/selectors';

const PrivateRoute = ({ children, ...props }) => {

    const isAuthenticated  = useSelector(selectIsAuthenticated);

    return (
        <Route {...props}>
        {isAuthenticated ? children : <Redirect to="/login" />}
      </Route>
    );
};

export default PrivateRoute;

