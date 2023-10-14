class JoinedLoan {
  constructor(device, user, loanDate, returnDate = null) {
    this.device = device;
    this.user = user;
    this.loanDate = loanDate;
    this.returnDate = returnDate;
  }
}

export default JoinedLoan;
