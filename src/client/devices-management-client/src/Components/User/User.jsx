import styles from '../Tablebody/tablebody.module.css';

export default function User({ item, openDetails }) {
  const { IdUser, Firstname, Email, Lastname, Phone } = item;
  return (
    <tr>
      <td>{IdUser}</td>
      <td>{Firstname}</td>
      <td>{Lastname}</td>
      <td className={styles.hideOnMob}>{Phone}</td>
      <td className={styles.hideOnMob}>{Email}</td>
      <td>
        <button onClick={() => openDetails(item)}>Detalles</button>
      </td>
    </tr>
  );
}
