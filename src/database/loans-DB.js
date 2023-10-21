import userDb from './users-DB.js';
import deviceDb from './devices-DB.js';
import Loan from '../models/loan-model/Loan.js';
import JoinedLoan from '../models/loan-model/Joined-Loan.js';
import deviceService from '../services/device-service/device-service.js';

const loans = [
  //  (device, user, date)
  new Loan(
    1,
    2,
    new Date('2023-10-10').toISOString(),
    new Date('2023-10-12').toISOString()
  ),
  new Loan(3, 3, new Date('2023-10-10').toISOString()),
  new Loan(2, 2, new Date('2023-10-10').toISOString()),
  new Loan(1, 3, new Date('2023-10-10').toISOString()),
];

const loanDB = {};

loanDB.saveLoan = async (loan) => {
  const device = await deviceDb.getDevice(loan.idDevice);
  if (!device) return new Error('This device does not exist');
  if (device.Status > 1) return new Error('This device is not available');

  //update device status
  device.idStatus = 2;
  await deviceService.updateDevice(device.IdDevice, device);

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
  const deviceLoans = loans.filter((loan) => loan.idDevice === idDevice);
  if (!deviceLoans) return new Error('Loan does not exist');

  for (const ln of deviceLoans) {
    const device = await deviceDb.getDevice(ln.idDevice);
    const user = await userDb.getUser(ln.idUser);
    joined.push({
      device: device,
      user: user,
      loanDate: ln.loanDate,
      returnDate: ln.returnDate,
    });
  }

  return joined;
};

loanDB.getHistory = async (idUser) => {
  const userLoans = loans.filter((loan) => loan.idUser === idUser);
  const joined = [];

  if (!userLoans) return new Error('No Loans registered');

  for (const ln of userLoans) {
    const user = await userDb.getUser(ln.idUser);
    const device = await deviceDb.getDevice(ln.idDevice);
    joined.push({
      device: device,
      user: user,
      loanDate: ln.loanDate,
      returnDate: ln.returnDate,
    });
  }

  return joined;
};

loanDB.updateLoan = async (
  idUser,
  idDevice,
  loanDate,
  updatedLoan,
  options
) => {
  //key : idUser, idDevice, loanDate
  const index = loans.findIndex(
    (loan) =>
      loan.idUser === idUser &&
      loan.idDevice === idDevice &&
      loanDate === loan.loanDate
  );

  if (index < 0) return new Error("Loan doesn't exist");

  const device = await deviceDb.getDevice(idDevice);
  if (!device) return new Error('This device does not exist');

  //if its damaged, we send 3, else, we send 1, available
  device.idStatus = options.isDamaged ? 3 : 1;

  await deviceService.updateDevice(idDevice, device);

  loans[index].returnDate = updatedLoan.returnDate;

  return updatedLoan;
};

loanDB.deleteLoan = async (idUser) => {
  const found = loans.findIndex((User) => User.IdUser === idUser);
  if (!found) return new Error("User doesn't exist");

  loans = loans.splice(found, 1);

  return loans;
};

export default loanDB;
