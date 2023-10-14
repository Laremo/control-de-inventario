class Loan {
  constructor(idDevice, idUser, loanDate) {
    this.idDevice = idDevice;
    this.idUser = idUser;
    this.loanDate = loanDate;
    this.returnDate = null;
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
