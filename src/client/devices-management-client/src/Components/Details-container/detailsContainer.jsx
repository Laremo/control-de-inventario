import DeviceDetails from '../Device/deviceDetails';
import UserDetails from '../User/userDetails';
import LoanDetails from '../Loan/loanDetails';

export default function DetailsContainer({ item, mode }) {
  if (mode === 0) {
    return <DeviceDetails item={item} />;
  }
  if (mode === 1) {
    return <UserDetails item={item} />;
  }
  if (mode === 2) {
    return <LoanDetails item={item} />;
  }
}
