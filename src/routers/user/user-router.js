import { Router } from 'express';

const userRouter = Router();

userRouter.get('/:name', (req, res) => {
  res.status(509).json({ msg: 'should return a certain user information' });
});
userRouter.post('/', (req, res) => {
  res.status(509).json({ msg: 'should save a user' });
});
userRouter.put('/:id', (req, res) => {
  res.status(509).json({ msg: 'should update a user' });
});
userRouter.delete('/:id', (req, res) => {
  res.status(509).json({ msg: 'should delete a user' });
});

export default userRouter;
