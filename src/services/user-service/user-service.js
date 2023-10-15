import userDb from '../../database/users-DB';
const userService = {};

userService.saveUser = async (user) => {
  try {
    const result = await userDb.saveUser(user);
    return result;
  } catch (error) {
    throw error;
  }
};

userService.getUsers = async () => {
  try {
    const users = await userDb.getUsers();
    return users;
  } catch (error) {
    throw error;
  }
};

userService.updateUser = async (idUser, updatedUser) => {
  try {
    const result = await userDb.updateUser(idUser, updatedUser);
    return result;
  } catch (error) {
    throw error;
  }
};

userService.deleteUser = async (idUser) => {
  try {
    const result = await userDb.deleteUser(idUser);
    return result;
  } catch (error) {
    throw error;
  }
};

export default userService;
