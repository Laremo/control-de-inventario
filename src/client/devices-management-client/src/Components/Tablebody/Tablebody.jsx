import Device from '../Device/Device';
import User from '../User/User';
import Loan from '../Loan/Loan';

export default function Tablebody({ mode, items, openDetails }) {
  if (!items) return;
  if (mode === 0) {
    return items.map((item, i) => {
      return (
        <Device
          key={i}
          item={item}
          openDetails={openDetails}
        />
      );
    });
  }

  if (mode === 1) {
    return items.map((item, i) => (
      <User
        key={i}
        item={item}
        openDetails={openDetails}
      />
    ));
  }
  if (mode === 2) {
    return items.map((item, i) => (
      <Loan
        key={i}
        item={item}
        openDetails={openDetails}
      />
    ));
  }
}
