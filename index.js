import Express from 'express';
import dotenv from 'dotenv';

import userRouter from './src/routers/user/user-router.js';
import deviceRouter from './src/routers/device/device-router.js';
import loanRouter from './src/routers/loan/loan-router.js';

dotenv.config({ path: './.env' });

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.json());

//setting up CORS policy
app.use((_, res, next) => {
  //tras desplegar, hay que cambiar esto por el dominio correcto
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'ACcess-Control-Allow-Headers',
    'Authorization, X-API-Kew, Origin, X-Requested-With, Content-Type, Access-Control-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
//setting the static SPA
app.use(
  Express.static(process.cwd() + '/src/client/devices-management-client/dist')
);

console.log(process.cwd());

//setting the routing
app.use('/api/user', userRouter);
app.use('/api/device', deviceRouter);
app.use('/api/loan', loanRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
