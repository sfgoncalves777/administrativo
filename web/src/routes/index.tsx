import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoutes from './privateRoutes';

import Login from '../pages/Login';
import Home from '../pages/Indexes';
import Cadastro from '../pages/Indexes/cadastro';
import Projects from '../pages/Projects';

import TagSistemas_Index from '../pages/TagSistemas/Index';
import TagSistemas_New from '../pages/TagSistemas/New';
import TagSistemas_Edit from '../pages/TagSistemas/Edit';

import ProjectOne_Index from '../pages/ProjectOne/Index';
import ProjectOne_New from '../pages/ProjectOne/New';
import ProjectOne_Edit from '../pages/ProjectOne/Edit';

const AppRoutes: React.FC = () => {
  return(
    <Router>
      <Switch>
        <Route path='/' exact component={Login} /> 
        <PrivateRoutes path='/home' exact component={Home} />
        <PrivateRoutes path='/cadastro' exact component={Cadastro} />
        <PrivateRoutes path='/cadastro/usuário' exact component={Projects} />

        <PrivateRoutes path='/cadastro/usuário/tagsistemas' exact component={TagSistemas_Index} />
        <PrivateRoutes path='/cadastro/usuário/tagsistemas/new' component={TagSistemas_New} />
        <PrivateRoutes path='/cadastro/usuário/tagsistemas/edit/:id' component={TagSistemas_Edit} />

        <PrivateRoutes path='/cadastro/usuário/projectone' exact component={ProjectOne_Index} />
        <PrivateRoutes path='/cadastro/usuário/projectone/new' component={ProjectOne_New} />
        <PrivateRoutes path='/cadastro/usuário/projectone/edit/:id' component={ProjectOne_Edit} />
      </Switch>
    </Router>
  )
}

export default AppRoutes;