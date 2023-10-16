import userDb from './users-DB.js';
import deviceDb from './devices-DB.js';
import Loan from '../models/loan-model/Loan.js';
import JoinedLoan from '../models/loan-model/Joined-Loan.js';

const loans = [
  //  (device, user, date)
  new Loan(1, 2, new Date('2023-10-10')),
  new Loan(2, 2, new Date('2023-10-10')),
  new Loan(1, 2, new Date('2023-10-10')),
];

const loanDB = {};

loanDB.saveLoan = async (loan) => {
  loans.push(loan);
  return loans;
};

loanDB.getLoans = async () => {
  const loansToSend = [];
  loans.forEach(async (loan) => {
    const user = await userDb.getUser(loan.idUser);
    const device = await deviceDb.getDevice(loan.idDevice);
    const joined = new JoinedLoan(device, user, loan.loanDate, loan.returnDate);
    loansToSend.push(joined);
  });
  return loansToSend;
};

loanDB.getDeviceLoans = async (idDevice) => {
  const joined = [];
  const deviceLoans = loans.map((loan) => loan.idDevice === idDevice);
  if (!deviceLoans) return new Error('Loan does not exist');

  for (const ln of deviceLoans) {
    const device = await deviceDb.getDevice(ln.idDevice);
    const user = await userDb.getUser(ln.idUser);
    joined.push(device, user, ln.loanDate, ln.returnDate);
  }

  return joined;
};

loanDB.getHistory = async (idUser) => {
  const userLoans = loans.map((loan) => loan.idUser === idUser);
  const joined = [];
  if (!userLoans) return new Error('No Loans registered');

  for (const loan of userLoans) {
    const user = await userDb.getUser(ln.idUser);
    const device = await deviceDb.getDevice(ln.idDevice);
    joined.push(device, user, ln.loanDate, ln.returnDate);
  }

  return joined;
};

loanDB.updateLoan = async (idUser, idDevice, updatedLoan) => {
  const index = loans.findIndex(
    (loan) => loan.idUser === idUser && loan.idDevice === idDevice
  );
  if (!index) return new Error("Loan doesn't exist");

  loans[index] = updatedLoan;
  return updatedLoan;
};

loanDB.deleteLoan = async (idUser) => {
  const found = loans.findIndex((User) => User.IdUser === idUser);
  if (!found) return new Error("User doesn't exist");

  loans = loans.splice(found, 1);

  return loans;
};

export default loanDB;
