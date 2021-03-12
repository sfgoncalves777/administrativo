import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../components/Contexts/auth';

const PrivateRoutes = ({ ...rest }) => {
  new Date();
  const { signed, loading, validate, newToken } = useAuth();

  if(loading) {
    return <h1> </h1> ;
  }

  if(Date.now() > validate) {
    newToken();
  }

  if(!signed) {
    return <Redirect to='/' />
  }

  return <Route { ...rest } />
}

export default PrivateRoutes;