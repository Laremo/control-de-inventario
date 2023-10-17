import styles from './Container.module.css';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import Tablehead from '../Tablehead/Tablehead';
import Tablebody from '../Tablebody/Tablebody';
export default function Container() {
  const [mode, setMode] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let dataSource = '';

    switch (mode) {
      case 0:
        dataSource = 'device';
        break;
      case 1:
        dataSource = 'user';
        break;
      case 2:
        dataSource = 'loan';
        break;
    }

    fetch('http://localhost:8080/api/' + dataSource)
      .then((result) => result.json())
      .then((data) => {
        setItems(data);
      });
  }, [mode]);

  return (
    <>
      <div className={styles.main}>
        <Navbar
          mode={mode}
          setMode={setMode}
        />
      </div>

      <div className={styles.content}>
        <table className={styles.mainTable}>
          <thead>
            <Tablehead mode={mode} />
          </thead>
          <tbody>
            <Tablebody
              mode={mode}
              items={items}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}
