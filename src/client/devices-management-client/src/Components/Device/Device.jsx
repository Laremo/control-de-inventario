import styles from '../Tablebody/tablebody.module.css';
export default function Device({ item, openDetails }) {
  const { IdDevice, Name, Status, Make, Description, Type } = item;
  return (
    <tr>
      <td>{IdDevice}</td>
      <td>{Name}</td>
      <td className={styles.hideOnMob}>{Make}</td>
      <td className={styles.hideOnMob}>{Description}</td>
      <td>{Type}</td>
      <td>{Status}</td>
      <td>
        <button onClick={() => openDetails(item)}>Detalles</button>
      </td>
    </tr>
  );
}
