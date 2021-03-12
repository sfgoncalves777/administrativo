import express from 'express';

import SessionController from './controllers/sessionsController';
import TagSistemasController from './controllers/tagsistemasController';
import ProjectOneController from './controllers/projectoneController';
import tokenMiddleware from './middlewares/authorization';

const sessionController = new SessionController();
const tagsistemasController = new TagSistemasController();
const projectOneController = new ProjectOneController();

const routes = express.Router();

routes.post('/session', sessionController.login);
routes.put('/session', sessionController.updateToken);

routes.get('/tagsistemas/users', tokenMiddleware, tagsistemasController.index);
routes.post('/tagsistemas/users/new', tokenMiddleware, tagsistemasController.create);
routes.get('/tagsistemas/users/show/:id', tokenMiddleware, tagsistemasController.show);
routes.put('/tagsistemas/users/edit/:id', tokenMiddleware, tagsistemasController.update);
routes.delete('/tagsistemas/users/delete/:id', tokenMiddleware, tagsistemasController.delete);

routes.get('/projectone/companies', tokenMiddleware, projectOneController.index);
routes.post('/projectone/companies/new', tokenMiddleware, projectOneController.create);
routes.get('/projectone/companies/show/:id', tokenMiddleware, projectOneController.show);
routes.put('/projectone/companies/edit/:id', tokenMiddleware, projectOneController.update);
routes.delete('/projectone/companies/delete/:id', tokenMiddleware, projectOneController.delete);

export default routes;