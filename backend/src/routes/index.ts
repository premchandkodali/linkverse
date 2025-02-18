import { Application } from 'express';
import IndexController from '../controllers/index';

export const setRoutes = (app: Application) => {
    const indexController = new IndexController();

    app.get('/', (req, res) => indexController.getIndex(req, res));
};