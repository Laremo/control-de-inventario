import User from '../models/user-model/User.js';
const users = [
  new User(1, 'Laremo', 'Loooooo', '449 454 33 33', 'laremo@fake.com'),
  new User(2, 'John', 'Doe', '778 932 43 43', 'nobody@nowhere.com'),
  new User(3, 'John', 'Galt', '123 436 45 44', 'whosjohngalt@atlas.com'),
];

const saveUser = (user) => {
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

const getUsers = () => {
  return users;
};

const getUser = (idUser) => {
  const user = users.find((User) => User.IdUser === idUser);
  return user;
};

const updateUser = (idUser, updatedUser) => {
  const User = users.find((user) => user.IdUser === idUser);
  if (!User) return new Error("User doesn't exist");

  User = updatedUser;
  return updatedUser;
};

const deleteUser = (idUser) => {
  const found = users.findIndex((User) => User.IdUser === idUser);
  if (!found) return new Error("User doesn't exist");

  users = users.splice(found, 1);

  return users;
};

export { getUser, getUsers, updateUser, deleteUser, saveUser };
