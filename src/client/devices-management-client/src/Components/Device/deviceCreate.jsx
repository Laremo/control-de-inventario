import { useState } from 'react';
import constants from '../../utils/constants';
import styles from '../Details-container/details-container.module.css';

export default function DeviceCreate({ closeCreate }) {
  const [Name, setName] = useState('');
  const [Make, setMake] = useState('');
  const [Description, setDescription] = useState('');
  const [idType, setIdType] = useState(1);
  const [Type, setType] = useState('Celular');
  const [showMessage, setShowMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = {
      Name: Name,
      Make: Make,
      Description: Description,
      idType: idType,
    };
    const result = await fetch(constants.baseUrl + '/device/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    if (result.status !== 201) {
      setShowMessage('Este nombre de dispositivo ya está registrado');
    } else {
      setShowMessage(
        'Guardado existosamente! \n Volviendo a la vista anterior...'
      );
      setTimeout(() => closeCreate(), 2400);
    }
  };

  return (
    <form
      className={styles.detailsForm}
      onSubmit={handleSubmit}>
      <label>Dispositivo</label>
      <input
        className={styles.detailsInput}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type='text'
        value={Name}
        required
      />

      <label>Marca</label>
      <input
        className={styles.detailsInput}
        onChange={(e) => {
          setMake(e.target.value);
        }}
        type='text'
        value={Make}
        required
      />

      <label>Descripción</label>
      <input
        className={styles.detailsInput}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type='text'
        value={Description}
      />
      <label>Tipo</label>
      <select
        defaultValue={Type}
        onChange={(e) => {
          e.preventDefault();
          const value = e.target.value;
          setType(e.target.value);
          if (value === 'Celular') setIdType(1);
          else if (value === 'Laptop') setIdType(2);
          else if (value === 'Tableta') setIdType(3);
        }}>
        <option>Celular</option>
        <option>Laptop</option>
        <option>Tableta</option>
      </select>
      {showMessage.length > 0 ? <p>{showMessage}</p> : null}
      <div className={styles.buttonContainer}>
        <button onClick={handleSubmit}>Guardar</button>
      </div>
    </form>
  );
}
