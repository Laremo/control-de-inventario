import styles from './historyTable.module.css';

export default function HistoryTable({ mode, items }) {
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

  if (mode === 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Préstamo</th>
            <th>Retorno</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const { user, loanDate, returnDate } = item;
            return (
              <tr
                key={i}
                className={!returnDate ? styles.current : ''}>
                <td>{`${user.Firstname} ${user.Lastname}`}</td>
                <td>{formatDate(loanDate)}</td>
                <td>
                  {returnDate ? formatDate(returnDate) : 'Poseedor actual'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  if (mode === 1) {
    return (
      <table>
        <thead>
          <tr>
            <th>Dispositivo</th>
            <th>Préstamo</th>
            <th>Retorno</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const { device, loanDate, returnDate } = item;
            return (
              <tr
                key={i}
                className={!returnDate ? styles.current : ''}>
                <td>{`${device.Name} - ${device.Make}`}</td>
                <td>{formatDate(loanDate)}</td>
                <td>{returnDate ? formatDate(returnDate) : 'En uso'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
