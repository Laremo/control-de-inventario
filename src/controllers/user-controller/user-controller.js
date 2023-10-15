import userService from '../../services/user-service/user-service';
const userController = {};

userController.saveUser = async (req, res) => {
  try {
    const { user } = req.body;
    const result = await userService.saveUser(user);
    if (result?.message) return res.status(409).json({ error: result.message });

    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userController.getUsers = async (_, res) => {
  try {
    const result = await userService.getUsers();
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userController.updateUser = async (req, res) => {
  try {
    const { idUser, updatedUser } = req.body;
    const result = await deviceService.updateDevice(idUser, updatedUser);

    if (result?.message) return res.status(209).json({ error: result.message });

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userController.deleteUser = async (req, res) => {
  try {
    const { idUser } = req.body;
    const result = await deviceService.deleteUser(idUser);

    if (result?.message) return res.status(209).json({ error: result.message });

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default userController;
