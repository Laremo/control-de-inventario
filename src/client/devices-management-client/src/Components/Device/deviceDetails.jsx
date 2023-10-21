import { useState } from 'react';
import styles from '../Details-container/details-container.module.css';
import constants from '../../utils/constants';

export default function DeviceDetails({
  item,
  showHistory,
  toggleShowHistory,
}) {
  const [editable, setEditable] = useState(false);
  const [Name, setName] = useState(item.Name);
  const [Make, setMake] = useState(item.Make);
  const [Description, setDescription] = useState(item.Description);
  const [idType, setIdType] = useState(item.idType);
  const [Type, setType] = useState(item.Type);
  const [status] = useState(item.Status);

  const [showMessage, setShowMessage] = useState('');

  const toggleEditable = (e) => {
    setEditable(!editable);
    e.preventDefault();
  };

  let statusStyle =
    item.idStatus === 1
      ? styles.available
      : item.idStatus === 2
      ? styles.used
      : styles.damaged;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = {
      Name: Name,
      Make: Make,
      Description: Description,
      idType: idType,
    };

    const data = { idDevice: item.IdDevice, updatedDevice: updatedItem };

    const result = await fetch(`${constants.baseUrl}/device/` + item.IdDevice, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (result.status !== 200) {
      setShowMessage('No se pudo actualizar!');
    } else {
      setShowMessage('Guardado existosamente! ');
    }
    toggleEditable(e);
  };

  if (editable) {
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
        />

        <label>Marca</label>
        <input
          className={styles.detailsInput}
          onChange={(e) => {
            setMake(e.target.value);
          }}
          type='text'
          value={Make}
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
        <label>Estado</label>
        <span className={`${styles.detailsField} ${statusStyle}`}>
          {status}
        </span>
        <div className={styles.buttonContainer}>
          <button onClick={handleSubmit}>
            {editable ? 'Guardar' : 'Editar'}
          </button>
        </div>
      </form>
    );
  }

  return (
    <form className={styles.detailsForm}>
      <label>Dispositivo</label>
      <span className={styles.detailsField}>{Name}</span>

      <label>Tipo</label>
      <span className={styles.detailsField}>{Type}</span>

      <label>Marca</label>
      <span className={styles.detailsField}>{Make}</span>

      <label>Descripción</label>
      <span className={styles.detailsField}>{Description}</span>

      <label>Estado</label>
      <span className={`${styles.detailsField} ${statusStyle}`}>{status}</span>

      <div className={styles.buttonContainer}>
        <button onClick={toggleEditable}>
          {editable ? 'Guardar' : 'Editar'}
        </button>
        <button onClick={toggleShowHistory}>
          {!showHistory ? 'Ver historial' : 'Ocultar historial'}
        </button>
      </div>
    </form>
  );
}
