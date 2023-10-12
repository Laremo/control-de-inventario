import { Router } from 'express';
import deviceController from '../../controllers/device-controller/device-controller.js';
import deviceValidations from './middleware/validate-device.js';

const deviceRouter = Router();

deviceRouter.get('/', deviceController.getDevices);
deviceRouter.post(
  '/',
  deviceValidations.validateSaveRequest,
  deviceController.saveDevice
);
deviceRouter.put('/:id', deviceController.updateDevice);
deviceRouter.delete('/:id', deviceController.deleteDevice);

export default deviceRouter;
