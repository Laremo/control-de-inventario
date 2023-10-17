import Device from '../models/device-model/Device.js';
const deviceDB = {};

const devices = [
  new Device(1, 'tableta morada', 3, 'Toshiba', 2, "Tableta de 11'"),
  new Device(2, "Laptop 16'", 2, 'Lenovo', 1, 'Lenovo Flex'),
  new Device(3, 'Xiaomi E3', 1, 'Xiaomi', 2, "Celular 5.6' "),
];

deviceDB.saveDevice = async (device) => {
  let maxId = 0;
  for (const dev of devices) {
    if (dev.Name === device.Name)
      return new Error('This Device Name is not available');
  }
  devices.map((dev) => (maxId = dev.IdDevice > maxId ? dev.IdDevice : maxId));

  device.IdDevice = maxId + 1;

  devices.push(device);
  return devices;
};

deviceDB.getDevices = async () => {
  return devices;
};

deviceDB.getDevice = async (idDevice) => {
  const device = devices.find((device) => device.IdDevice === idDevice);
  return device;
};

deviceDB.updateDevice = async (idDevice, updatedDevice) => {
  const index = devices.findIndex((dev) => dev.IdDevice === idDevice);
  if (!index) return new Error("Device doesn't exist");

  devices[index] = updatedDevice;
  return updatedDevice;
};

deviceDB.deleteDevice = async (idDevice) => {
  const found = devices.findIndex((device) => device.IdDevice === idDevice);
  if (!found) return new Error("Device doesn't exist");

  devices = devices.splice(found, 1);

  return devices;
};

export default deviceDB;
