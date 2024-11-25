import express from 'express';
import {engine} from 'express-handlebars';
import path from 'node:path';
import { createHomeRouter } from './router/createHomeRouter';
import { CustomServices, ICustomServices } from './services';

const startServer = () => {
    const services: ICustomServices = new CustomServices();

    const app = express();
    
    app.use(express.static(path.join(__dirname, 'public')));

    app.engine('.hbs', engine({
        extname: '.hbs'
    }));
    
    app.set('view engine', '.hbs');
    app.set("views", path.resolve(__dirname, "./views"));
    
    app.use('/', createHomeRouter(services));
    
    app.listen(3000, () => console.log('App running on 3000'));
}

startServer();