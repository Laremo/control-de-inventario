import deviceDB from '../../database/devices-DB.js';
const deviceService = {};

deviceService.saveDevice = async (device) => {
  try {
    const result = await deviceDB.saveDevice(device);
    return result;
  } catch (error) {
    throw error;
  }
};

deviceService.getDevices = async () => {
  try {
    const devices = await deviceDB.getDevices();
    return devices;
  } catch (error) {
    throw error;
  }
};

deviceService.updateDevice = async (IdDevice, updatedDevice) => {
  try {
    const result = await deviceDB.updateDevice(IdDevice, updatedDevice);
    return result;
  } catch (error) {
    throw error;
  }
};

deviceService.deleteDevice = async (idDevice) => {
  try {
    const result = await deviceService.deleteDevice(idDevice);
    return res.status(200).json(result);
  } catch (error) {
    throw error;
  }
};

export default deviceService;
