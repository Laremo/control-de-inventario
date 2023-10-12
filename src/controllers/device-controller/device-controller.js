const deviceController = {};

deviceController.saveDevice = async (req, res) => {
  try {
    console.log(req.newDevice);
    return res.status(200).json({ quieres_guardar: req.newDevice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

deviceController.getDevices = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

deviceController.updateDevice = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

deviceController.deleteDevice = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deviceController;
