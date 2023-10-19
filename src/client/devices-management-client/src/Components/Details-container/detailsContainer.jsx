import DeviceDetails from '../Device/deviceDetails';
import UserDetails from '../User/userDetails';
import LoanDetails from '../Loan/loanDetails';
import styles from './details-container.module.css';
import HistoryContainer from './History-container/history-container';
import { useState } from 'react';

export default function DetailsContainer({ item, mode, closeDetails }) {
  const [showHistory, setShowHistory] = useState(false);

  const toggleShowHistory = (e) => {
    setShowHistory(!showHistory);
    e.preventDefault();
  };

  if (mode === 0) {
    return (
      <>
        <div className={styles.topRibbon}>
          <div className={styles.returnBtn}>
            <button
              onClick={() => {
                closeDetails(mode);
              }}>
              Volver
            </button>
          </div>
          <div className={styles.titleDetail}>
            <h1>Detalles de dispositivo</h1>
          </div>
        </div>
        <div className={styles.detailsContent}>
          <DeviceDetails
            item={item}
            showHistory={showHistory}
            toggleShowHistory={toggleShowHistory}
          />
          {showHistory ? <HistoryContainer /> : null}
        </div>
      </>
    );
  }
  if (mode === 1) {
    return (
      <>
        <div className={styles.topRibbon}>
          <div className={styles.returnBtn}>
            <button
              onClick={() => {
                closeDetails(mode);
              }}>
              Volver
            </button>
          </div>
          <div className={styles.titleDetail}>
            <h1>Detalles de dispositivo</h1>
          </div>
        </div>
        <div>
          <UserDetails
            item={item}
            showHistory={showHistory}
            toggleShowHistory={toggleShowHistory}
          />
        </div>
      </>
    );
  }
  if (mode === 2) {
    return (
      <>
        <div className={styles.topRibbon}>
          <div className={styles.returnBtn}>
            <button
              onClick={() => {
                closeDetails(mode);
              }}>
              Volver
            </button>
          </div>
          <div className={styles.titleDetail}>
            <h1>Detalles de dispositivo</h1>
          </div>
        </div>
        <div>
          <LoanDetails
            item={item}
            showHistory={showHistory}
            toggleShowHistory={toggleShowHistory}
          />
        </div>
      </>
    );
  }
}
