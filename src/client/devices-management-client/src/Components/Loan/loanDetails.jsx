import { useState } from 'react';
import styles from '../Details-container/details-container.module.css';
import constants from '../../utils/constants';

export default function LoanDetails({ item }) {
  const [device] = useState(item.device);
  const [user] = useState(item.user);
  const [loanDate] = useState(item.loanDate);
  const [registeredReturn, setRegisteredReturn] = useState(item.returnDate);

  const [onReturn, setOnReturn] = useState(false);
  const [message, setMessage] = useState('');
  const [damaged, setDamaged] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date().toISOString());

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

  const displayToday = (date) => {
    let temp;
    if (!date) {
      temp = formatDate(new Date().toISOString());
    } else {
      temp = formatDate(date);
    }

    return `${temp.slice(-4)}-${temp.slice(3, 5)}-${temp.slice(0, 2)}`;
  };

  const handleSubmit = async () => {
    const updatedLoan = { ...item };
    updatedLoan.returnDate = returnDate;
    const options = {
      isReturning: true,
      isDamaged: damaged,
    };

    const result = await fetch(constants.baseUrl + '/loan', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ loan: item, updatedLoan, options }),
    });

    if (result.status !== 200) {
      setMessage('No se pudo actualizar!');
    } else {
      const data = await result.json();
      setMessage('Guardado existosamente! ');
      setRegisteredReturn(data.returnDate);
      setOnReturn(!onReturn);
    }
  };

  return (
    <form className={styles.detailsForm}>
      <div className={styles.itemContainer}>
        <h3>Usuario</h3>
        <label>Nombre</label>
        <span
          className={
            styles.detailsField
          }>{`${user.Firstname} ${user.Lastname}`}</span>
      </div>
      <div className={styles.itemContainer}>
        <h3>Dispositivo</h3>
        <label>Nombre</label>
        <span className={styles.detailsField}>{device.Name}</span>

        <label>Modelo</label>
        <span className={styles.detailsField}>{device.Make}</span>
      </div>
      <div className={styles.itemContainer}>
        <h3>Préstamo</h3>
        <label>Fecha inicio</label>
        <span className={styles.detailsField}>{formatDate(loanDate)}</span>
        <label>Fecha retorno</label>
        {onReturn ? (
          <input
            type='date'
            defaultValue={
              registeredReturn ? displayToday(registeredReturn) : displayToday()
            }
            onChange={(e) =>
              setReturnDate(new Date(e.target.value).toISOString())
            }
          />
        ) : (
          <span
            className={`${styles.detailsField} ${
              registeredReturn ? null : styles.used
            }`}>
            {registeredReturn ? formatDate(registeredReturn) : 'En préstamo'}
          </span>
        )}
        {onReturn ? (
          <div className={styles.checkDiv}>
            <input
              className={styles.checkbox}
              type='checkbox'
              id='dmg'
              checked={damaged}
              onClick={() => {
                setDamaged(!damaged);
              }}
              onChange={() => {}}
            />
            <p className={styles.checkLabel}>Marcar como dañado</p>
          </div>
        ) : null}
      </div>
      {message.length > 0 ? <p>{message}</p> : null}

      <div className={styles.buttonContainer}>
        <button
          disabled={registeredReturn && !onReturn ? true : false}
          onClick={(e) => {
            e.preventDefault();
            setOnReturn(!onReturn);
          }}>
          {onReturn ? 'Cancelar' : 'Registar retorno'}
        </button>
        {registeredReturn && !onReturn ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setOnReturn(!onReturn);
            }}>
            Editar
          </button>
        ) : null}
        {onReturn ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
            Guardar
          </button>
        ) : null}
      </div>
    </form>
  );
}
