import deviceService from '../../services/device-service/device-service.js';
const deviceController = {};

deviceController.saveDevice = async (req, res) => {
  try {
    const { newDevice } = req.body;
    const result = await deviceService.saveDevice(newDevice);

    if (result?.message) return res.status(409).json({ error: result.message });

    return res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

deviceController.getDevices = async (_, res) => {
  try {
    const result = await deviceService.getDevices();
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

deviceController.getAvailableDevices = async (_, res) => {
  try {
    const result = await deviceService.getDevices(true);
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

deviceController.updateDevice = async (req, res) => {
  try {
    const { idDevice, updatedDevice } = req.body;
    const result = await deviceService.updateDevice(idDevice, updatedDevice);

    if (result?.message) return res.status(209).json({ error: result.message });

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

deviceController.deleteDevice = async (req, res) => {
  try {
    const { idDevice } = req.body;
    const result = await deviceService.deleteDevice(idDevice);
    if (result?.message) return res.status(209).json({ error: result.message });

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deviceController;
