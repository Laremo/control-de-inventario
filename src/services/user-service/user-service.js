import User from '../../models/user-model/User.js';
import userDb from '../../database/users-DB.js';
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
    const { Firstname, Lastname, Phone, Email } = updatedUser;
    const existing = await userDb.getUser(idUser);

    if (!existing) return new Error("user doesn't exist");

    const formattedUser = new User(
      existing.IdUser,
      Firstname,
      Lastname,
      Phone,
      Email
    );

    const result = await userDb.updateUser(idUser, formattedUser);
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
