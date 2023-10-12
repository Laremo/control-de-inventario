import Loan from '../models/loan-model/Loan';

const loans = [
  new Loan(1, 2, new Date('2023-10-10')),
  new Loan(2, 2, new Date('2023-10-10')),
  new Loan(1, 2, new Date('2023-10-10')),
];

const getLoans = () => {
  return loans;
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

export { getLoans, getUser, updateUser, deleteUser };
