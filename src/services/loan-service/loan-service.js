import loanDB from '../../database/loans-DB.js';
const loanService = {};

loanService.saveLoan = async (loan) => {
  try {
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
  } catch (error) {
    throw error;
  }
};

loanService.updateLoan = async (idLoan, updatedLoan) => {
  try {
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
