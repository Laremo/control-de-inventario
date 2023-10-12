import Device from '../models/device-model/Device.js';
const devices = [
  new Device(1, 'tableta morada', 3, 'Toshiba', 1, "Tableta de 11'"),
  new Device(2, "Laptop 16'", 2, 'Lenovo', 1, 'Lenovo Flex'),
  new Device(3, 'Xiaomi E3', 1, 'Xiaomi', 1, "Celular 5.6' "),
];

const getDevices = () => {
  return devices;
};

const getDevice = (idDevice) => {
  const device = devices.find((device) => device.IdDevice === idDevice);
  return device;
};

const updateDevice = (idDevice, updatedDevice) => {
  const device = devices.find((dev) => dev.IdDevice === idDevice);
  if (!device) return new Error("Device doesn't exist");

  device = updatedDevice;
  return updatedDevice;
};

const deleteDevice = (idDevice) => {
  const found = devices.findIndex((device) => device.IdDevice === idDevice);
  if (!found) return new Error("Device doesn't exist");

  devices = devices.splice(found, 1);

  return devices;
};

export { getDevices, getDevice, updateDevice, deleteDevice };
