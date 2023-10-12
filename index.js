import Express from 'express';
import dotenv from 'dotenv';

import userRouter from './src/routers/user/user-router.js';
import deviceRouter from './src/routers/device/device-router.js';
import loanRouter from './src/routers/loan/loan-router.js';

dotenv.config({ path: './.env' });

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.json());

//setting the routing
app.use('/api/user', userRouter);
app.use('/api/device', deviceRouter);
app.use('/api/loan', loanRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
