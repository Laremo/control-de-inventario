import styles from './Container.module.css';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import Tablehead from '../Tablehead/Tablehead';
import Tablebody from '../Tablebody/Tablebody';
import DetailsContainer from '../Details-container/detailsContainer';
export default function Container() {
  const [mode, setMode] = useState(0);
  const [items, setItems] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [detailsIndex, setDetailsIndex] = useState(-1);

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

  const openDetails = (item) => {
    const it = items.findIndex((it) => it === item);
    setDetailsVisible(true);
    setDetailsIndex(it);
  };

  const closeDetails = () => {
    setDetailsVisible(false);
    setDetailsIndex(-1);
  };

  return (
    <>
      <div className={styles.main}>
        <Navbar
          mode={mode}
          setMode={setMode}
          closeDetails={closeDetails}
        />
      </div>

      {detailsVisible ? (
        <div className={styles.detailsModal}>
          <DetailsContainer
            mode={mode}
            item={items[detailsIndex]}
          />
        </div>
      ) : (
        <div className={styles.content}>
          <table className={styles.mainTable}>
            <thead>
              <Tablehead mode={mode} />
            </thead>
            <tbody>
              <Tablebody
                mode={mode}
                items={items}
                openDetails={openDetails}
                closeDetails={closeDetails}
              />
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
