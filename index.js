import Express from 'express';
import userRouter from './src/routers/user/user-router.js';
import deviceRouter from './src/routers/device/device-router.js';
import loanRouter from './src/routers/loan/loan-router.js';

const app = Express();

app.use(Express.json());

//setting the routing
app.use('/api/user', userRouter);
app.use('/api/device', deviceRouter);
app.use('/api/loan', loanRouter);

app.listen(3000, () => {
  console.log('server!');
});
