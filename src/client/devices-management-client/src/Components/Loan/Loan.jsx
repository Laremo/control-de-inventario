import styles from '../Tablebody/tablebody.module.css';

export default function Loan({ item }) {
  const { device, user, loanDate, returnDate } = item;

  const formatDate = (isostringDate) => {
    try {
      const temp = new Date(isostringDate);
      const formatted = new Intl.DateTimeFormat('es-Mx', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }).format(temp);
      return formatted;
    } catch (err) {
      return;
    }
  };

  return (
    <tr>
      <td>{user?.Firstname}</td>
      <td className={styles.hideOnMob}>{user?.Lastname}</td>
      <td>{device?.Name}</td>
      <td>{formatDate(loanDate)}</td>
      <td>{returnDate ? formatDate(returnDate) : 'NA'}</td>
      <td>
        <button>Detalles</button>
      </td>
    </tr>
  );
}
