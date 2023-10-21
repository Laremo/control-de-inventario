import styles from './Container.module.css';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import Tablehead from '../Tablehead/Tablehead';
import Tablebody from '../Tablebody/Tablebody';
import DetailsContainer from '../Details-container/detailsContainer';
import CreateContainer from '../Details-container/createContainer';

import constants from '../../utils/constants';

export default function Container() {
  const [mode, setMode] = useState(0);
  const [items, setItems] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [detailsIndex, setDetailsIndex] = useState(-1);
  const [createVisible, setCreateVisible] = useState(false);
  const obtainData = (dataSource) => {
    fetch(`${constants.baseUrl}/` + dataSource)
      .then((result) => result.json())
      .then((data) => {
        setItems(data);
      });
  };

  const selectDatasource = () => {
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
    return dataSource;
  };

  useEffect(() => {
    const dataSource = selectDatasource();
    obtainData(dataSource);
  }, [mode]);

  const openDetails = (item) => {
    const it = items.findIndex((it) => it === item);
    setDetailsVisible(true);
    setDetailsIndex(it);
  };

  const closeDetails = () => {
    setDetailsVisible(false);
    obtainData(selectDatasource());
    setDetailsIndex(-1);
  };

  const closeCreate = () => {
    setCreateVisible(false);
    obtainData(selectDatasource());
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
            closeDetails={closeDetails}
          />
        </div>
      ) : createVisible ? (
        <div className={styles.detailsModal}>
          <CreateContainer
            mode={mode}
            closeCreate={closeCreate}
          />
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.btnContainer}>
            <button onClick={() => setCreateVisible(true)}>
              Registrar Nuevo
            </button>
          </div>
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
