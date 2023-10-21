import loanDB from '../../database/loans-DB.js';
const loanService = {};

loanService.saveLoan = async (loan) => {
  try {
    let loanDate;
    try {
      loanDate = new Date(loan.loanDate);
    } catch (err) {
      loanDate = new Date().toISOString();
    }
    const result = await loanDB.saveLoan(loan);
    return result;
  } catch (error) {
    throw error;
  }
};

loanService.getLoans = async () => {
  try {
    const loans = await loanDB.getLoans();
    return loans;
  } catch (error) {
    throw error;
  }
};

loanService.getHistory = async (idUser) => {
  try {
    const loans = await loanDB.getHistory(idUser);
    return loans;
  } catch (error) {
    throw error;
  }
};
loanService.getDeviceHistory = async (idDevice) => {
  try {
    const loans = await loanDB.getDeviceLoans(idDevice);
    return loans;
  } catch (error) {
    throw error;
  }
};

loanService.updateLoan = async (loan, updatedLoan, options) => {
  try {
    const { user, device, loanDate } = loan;
    
    const result = await loanDB.updateLoan(
      user.IdUser,
      device.IdDevice,
      loanDate,
      updatedLoan,
      options
    );

    return result;
  } catch (error) {
    throw error;
  }
};

loanService.deleteLoan = async (idLoan) => {
  try {
  } catch (error) {
    throw error;
  }
};

export default loanService;
