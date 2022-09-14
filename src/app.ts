import express from 'express';
import productController from './controllers/productController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';
import loginController from './controllers/loginController';
import Auth from './middlewares/auth';

const app = express();

app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);
app.post('/users', userController.create);
app.get('/orders', orderController.getAll);
app.post('/login', loginController.login);
app.post('/orders', Auth, orderController.create);
export default app;
