import { getUser } from './users-DB';
import { getDevice } from './devices-DB';
import Loan from '../models/loan-model/Loan';
import JoinedLoan from '../models/loan-model/Joined-Loan';

const loans = [
  //  (device, user, date)
  new Loan(1, 2, new Date('2023-10-10')),
  new Loan(2, 2, new Date('2023-10-10')),
  new Loan(1, 2, new Date('2023-10-10')),
];

const saveLoan = (loan) => {
  loans.push(loan);
  return loans;
};

const getLoans = () => {
  const loansToSend = [];
  loans.forEach((loan) => {
    const user = getUser(loan.idUser);
    const device = getDevice(loan.idDevice);
    const joined = new JoinedLoan(device, user, loan.loanDate, loan.returnDate);
    loansToSend.push(joined);
  });
  return loansToSend;
};

const getLoan = (idUser, idDevice) => {
  const loan = loans.find(
    (loan) => loan.user === idUser && loan.device === idDevice
  );
  if (!loan) return new Error('Loan does not exist');
  const device = getDevice(loan.idDevice);
  const user = getUser(loan.idUser);
  const joined = new JoinedLoan(device, user, loan.loanDate, loan.returnDate);
  return joined;
};

const updateLoan = (idUser, idDevice, updatedLoan) => {
  const index = loans.findIndex(
    (loan) => loan.idUser === idUser && loan.idDevice === idDevice
  );
  if (!index) return new Error("Loan doesn't exist");

  loans[index] = updatedLoan;
  return updatedLoan;
};

const deleteLoan = (idUser) => {
  const found = loans.findIndex((User) => User.IdUser === idUser);
  if (!found) return new Error("User doesn't exist");

  loans = loans.splice(found, 1);

  return loans;
};

export { saveLoan, getLoan, getLoans, updateLoan, deleteLoan };
