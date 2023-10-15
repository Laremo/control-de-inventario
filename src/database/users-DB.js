import User from '../models/user-model/User.js';

const userDb = {};

const users = [
  new User(1, 'Laremo', 'Loooooo', '449 454 33 33', 'laremo@fake.com'),
  new User(2, 'John', 'Doe', '778 932 43 43', 'nobody@nowhere.com'),
  new User(3, 'John', 'Galt', '123 436 45 44', 'whosjohngalt@atlas.com'),
];

userDb.saveUser = async (user) => {
  let maxId = 0;
  for (const us in users) {
    if (user.Name === us.Name && user.Lastname === us.Lastname)
      return new Error('user is already registered!');
  }
  users.map((user) => (maxId = user.IdUser > maxId ? user.IdUser : maxId));

  const { Firstname, Lastname, Phone, Email } = user;
  const userToAdd = new User(maxId, Firstname, Lastname, Phone, Email);

  users.push(userToAdd);
  return users;
};

userDb.getUsers = async () => {
  return users;
};

userDb.getUser = async (idUser) => {
  const user = users.find((User) => User.IdUser === idUser);
  return user;
};

userDb.updateUser = async (idUser, updatedUser) => {
  const index = users.findIndex((user) => user.IdUser === idUser);
  if (!index) return new Error("User doesn't exist");

  users[index] = updatedUser;
  return updatedUser;
};

userDb.deleteUser = async (idUser) => {
  const found = users.findIndex((User) => User.IdUser === idUser);
  if (!found) return new Error("User doesn't exist");

  users = users.splice(found, 1);

  return users;
};

export default userDb;
