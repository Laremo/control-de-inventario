import { useState } from 'react';
import styles from '../Details-container/details-container.module.css';
import constants from '../../utils/constants.js';
export default function UserDetails({ item, showHistory, toggleShowHistory }) {
  const [editable, setEditable] = useState(false);
  const [Firstname, setFirstname] = useState(item.Firstname);
  const [Lastname, setlastname] = useState(item.Lastname);
  const [Phone, setPhone] = useState(item.Phone);
  const [Email, setEmail] = useState(item.Email);

  const [showMessage, setShowMessage] = useState('');

  const toggleEditable = (e) => {
    setEditable(!editable);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = {
      Firstname: Firstname,
      Lastname: Lastname,
      Phone: Phone,
      Email: Email,
    };

    const data = { idUser: item.IdUser, updatedUser: updatedItem };

    const result = await fetch(constants.baseUrl + '/user/' + item.IdUser, {
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
        <label>Nombre</label>
        <input
          className={styles.detailsInput}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          type='text'
          value={Firstname}
        />

        <label>Apellidos</label>
        <input
          className={styles.detailsInput}
          onChange={(e) => {
            setlastname(e.target.value);
          }}
          type='text'
          value={Lastname}
        />

        <label>Teléfono</label>
        <input
          className={styles.detailsInput}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type='text'
          value={Phone}
        />

        <label>Email</label>
        <input
          className={styles.detailsInput}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type='text'
          value={Email}
        />

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
      <label>Nombre</label>
      <span className={styles.detailsField}>{Firstname}</span>

      <label>Apellidos</label>
      <span className={styles.detailsField}>{Lastname}</span>

      <label>Teléfono</label>
      <span className={styles.detailsField}>{Phone}</span>

      <label>Email</label>
      <span className={`${styles.detailsField}`}>{Email}</span>
      {showMessage.length > 0 ? <p>{showMessage}</p> : null}
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
