class Loan {
  constructor(device, user, loanDate) {
    this.device = device;
    this.user = user;
    this.loanDate = loanDate;
    this.returnDate = null;
  }

  updateLoanDate(newDate) {
    this.loanDate = newDate;
  }

  registerReturnDate(returnDate) {
    this.returnDate = returnDate;
  }
}

export default Loan;
