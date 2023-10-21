import { useEffect, useState } from 'react';
import styles from '../details-container.module.css';
import HistoryTable from './Table/history-table';
import constants from '../../../utils/constants';

export default function HistoryContainer({ mode, item }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (mode === 0) {
      fetch(constants.baseUrl + '/loan/device/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idDevice: item.IdDevice }),
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => setItems(data.reverse()));
    }
    if (mode === 1) {
      fetch(constants.baseUrl + '/loan/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idUser: item.IdUser }),
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => setItems(data.reverse()));
    }
  }, []);

  return (
    <div className={styles.detailsForm}>
      <div className={styles.historyContainer}>
        <h3>Historial de préstamos</h3>
        {items?.length > 0 ? (
          <HistoryTable
            mode={mode}
            items={items}
          />
        ) : (
          <h4>Sin préstamos registrados</h4>
        )}
      </div>
    </div>
  );
}
