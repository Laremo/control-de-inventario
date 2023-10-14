import Device from '../../../models/device-model/Device.js';
import DEVICE_ERRORS from '../utils/device-error-msgs.js';
const deviceValidations = {};

deviceValidations.validateSaveRequest = (req, res, next) => {
  const { Name, idType, Make, Description } = req.body;
  const defaultStatus = 1;

  if (!Name || !idType || !Make)
    return res.status(400).json({ error: DEVICE_ERRORS.incompleteData });

  const device = new Device(
    null,
    Name,
    idType,
    Make,
    defaultStatus,
    Description
  );
  req.body.newDevice = device;

  return next();
};

export default deviceValidations;
