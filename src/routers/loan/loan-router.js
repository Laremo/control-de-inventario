import loanController from '../../controllers/loan-controller/loan-controller.js';
import { Router } from 'express';

const loanRouter = Router();

loanRouter.get('/', loanController.getLoans);
loanRouter.get('/:user', loanController.getHistory);
loanRouter.post('/', loanController.registerLoan);
loanRouter.put('/:id', loanController.updateLoan);
loanRouter.delete('/:id', loanController.deleteLoan);

export default loanRouter;
