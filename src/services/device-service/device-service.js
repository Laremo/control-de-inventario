import deviceDB from '../../database/devices-DB.js';
import Device from '../../models/device-model/Device.js';
const deviceService = {};

deviceService.saveDevice = async (device) => {
  try {
    const result = await deviceDB.saveDevice(device);
    return result;
  } catch (error) {
    throw error;
  }
};

deviceService.getDevices = async (available) => {
  try {
    if (!available) {
      const devices = await deviceDB.getDevices();
      return devices;
    }
    const devices = await deviceDB.getAvailable();
    return devices;
  } catch (error) {
    throw error;
  }
};

deviceService.updateDevice = async (IdDevice, updatedDevice) => {
  try {
    const { Name, idType, Make, idStatus, Description } = updatedDevice;
    const existing = await deviceDB.getDevice(IdDevice);

    if (!existing) return new Error("device doesn't exist");
    const currentStatus = idStatus ? idStatus : existing.idStatus;
    const formattedDevice = new Device(
      existing.IdDevice,
      Name,
      idType,
      Make,
      currentStatus,
      Description
    );

    const result = await deviceDB.updateDevice(IdDevice, formattedDevice);
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
