import { Router } from 'express';

const loanRouter = Router();

loanRouter.get('/', (req, res) => {
  res.status(509).json({ msg: 'should return all the devices' });
});
loanRouter.post('/', (req, res) => {
  res.status(509).json({ msg: 'should save a device' });
});
loanRouter.put('/:id', (req, res) => {
  res.status(509).json({ msg: 'should update a device' });
});
loanRouter.delete('/:id', (req, res) => {
  res.status(509).json({ msg: 'should delete a device' });
});

export default loanRouter;
