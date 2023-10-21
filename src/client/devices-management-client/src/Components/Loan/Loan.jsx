import styles from '../Tablebody/tablebody.module.css';

export default function Loan({ item, openDetails }) {
  const { device, user, loanDate, returnDate } = item;

  const formatDate = (isostringDate) => {
    try {
      const temp = new Date(isostringDate);
      const formatted = new Intl.DateTimeFormat('es-Mx', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
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
        <button onClick={() => openDetails(item)}>Detalles</button>
      </td>
    </tr>
  );
}
