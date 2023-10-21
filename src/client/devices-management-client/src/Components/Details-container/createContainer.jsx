import DeviceCreate from '../Device/deviceCreate';
import LoanCreate from '../Loan/loanCreate';
import UserCreate from '../User/userCreate';
import styles from './details-container.module.css';

export default function CreateContainer({ mode, closeCreate }) {
  if (mode === 0) {
    return (
      <>
        <div className={styles.topRibbon}>
          <div className={styles.returnBtn}>
            <button
              onClick={() => {
                closeCreate();
              }}>
              Volver
            </button>
          </div>
          <div className={styles.titleDetail}>
            <h1>Registrar Dispositivo</h1>
          </div>
        </div>
        <div className={styles.detailsContent}>
          <DeviceCreate closeCreate={closeCreate} />
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
                closeCreate();
              }}>
              Volver
            </button>
          </div>
          <div className={styles.titleDetail}>
            <h1>Registrar Usuario</h1>
          </div>
        </div>
        <div className={styles.detailsContent}>
          <UserCreate closeCreate={closeCreate} />
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
                closeCreate();
              }}>
              Volver
            </button>
          </div>
          <div className={styles.titleDetail}>
            <h1>Registrar Usuario</h1>
          </div>
        </div>
        <div className={styles.detailsContent}>
          <LoanCreate closeCreate={closeCreate} />
        </div>
      </>
    );
  }
}
