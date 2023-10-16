import userController from '../../controllers/user-controller/user-controller.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/', userController.saveUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;
