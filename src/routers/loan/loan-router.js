import loanController from '../../controllers/loan-controller/loan-controller.js';
import { Router } from 'express';

const loanRouter = Router();

loanRouter.get('/', loanController.getLoans);
loanRouter.post('/user/', loanController.getHistory);
loanRouter.post('/device/', loanController.getDeviceHistory);
loanRouter.post('/', loanController.registerLoan);
loanRouter.put('/', loanController.updateLoan);
loanRouter.delete('/:id', loanController.deleteLoan);

export default loanRouter;
