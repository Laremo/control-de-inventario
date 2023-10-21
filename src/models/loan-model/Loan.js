class Loan {
  constructor(idDevice, idUser, loanDate, returnDate) {
    this.idDevice = idDevice;
    this.idUser = idUser;
    this.loanDate = loanDate;
    this.returnDate = returnDate !== undefined ? returnDate : null;
  }
  //if we need to renew a loan
  updateLoanDate(newDate) {
    this.loanDate = newDate;
  }

  registerReturnDate(returnDate) {
    this.returnDate = returnDate;
  }
}

export default Loan;
