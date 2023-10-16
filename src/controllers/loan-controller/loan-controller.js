import loanService from '../../services/loan-service/loan-service.js';
const loanController = {};

loanController.registerLoan = async (req, res) => {
  try {
    const { loan } = req.body;
    const result = await loanService.saveLoan(loan);
    if (result?.message) return res.status(409).json({ error: result.message });

    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

loanController.getLoans = async (_, res) => {
  try {
    const result = await loanService.getLoans();
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

loanController.getHistory = async (req, res) => {
  try {
    const { idUser } = req.body;
    const result = await loanService.getHistory(idUser);

    if (result?.message) return res.status(209).json({ error: result.message });

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

loanController.updateLoan = async (req, res) => {
  try {
    const { idLoan, updatedLoan } = req.body;
    const result = await loanService.updateLoan(idLoan, updatedLoan);

    if (result?.message) return res.status(209).json({ error: result.message });

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

loanController.deleteLoan = async (req, res) => {
  try {
    const { idLoan } = req.body;
    const result = await loanService.deleteLoan(idLoan);

    if (result?.message) return res.status(209).json({ error: result.message });

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default loanController;
