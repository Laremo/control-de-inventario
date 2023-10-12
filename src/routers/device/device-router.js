import { Router } from 'express';

const deviceRouter = Router();

deviceRouter.get('/', (req, res) => {
  res.status(509).json({ msg: 'should return all the devices' });
});
deviceRouter.post('/', (req, res) => {
  res.status(509).json({ msg: 'should save a device' });
});
deviceRouter.put('/:id', (req, res) => {
  res.status(509).json({ msg: 'should update a device' });
});
deviceRouter.delete('/:id', (req, res) => {
  res.status(509).json({ msg: 'should delete a device' });
});

export default deviceRouter;
