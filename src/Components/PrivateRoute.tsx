import React from 'react';
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

type PrivateRouteProps = {
  children: any;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({children}) => {
    const { currentUser }: any = useAuth();
  return currentUser ? children : <Navigate to="/login" />
}

export default PrivateRoute;