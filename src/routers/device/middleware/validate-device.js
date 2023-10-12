import Device from '../../../models/device-model/Device.js';
import DEVICE_ERRORS from '../utils/device-error-msgs.js';
const deviceValidations = {};

deviceValidations.validateSaveRequest = (req, res, next) => {
  const { Name, Type, idType, Description } = req.body;
  const defaultStatus = 1;

  if (!Name || !Type || !idType)
    return res.status(400).json({ error: DEVICE_ERRORS.incompleteData });

  const device = new Device(null, Name, idType, defaultStatus, Description);
  req.newDevice = device;

  return next();
};

export default deviceValidations;
