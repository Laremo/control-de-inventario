import { useState } from 'react';
import styles from '../Details-container/details-container.module.css';
import regexp from '../../utils/regular-expressions';
import constants from '../../utils/constants';

export default function UserCreate({ closeCreate }) {
  const [Firstname, setName] = useState('');
  const [Lastname, setMake] = useState('');
  const [Phone, setDescription] = useState('');
  const [Email, setType] = useState('');
  const [showMessage, setShowMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = {
      Firstname: Firstname,
      Lastname: Lastname,
      Phone: Phone,
      Email: Email,
    };

    if (!Firstname.trim() || !Lastname.trim()) {
      setShowMessage('No debe haber campos vacíos');
      return;
    }

    if (!regexp.email.test(Email)) {
      setShowMessage('Ingresa un correo correcto');
      return;
    }
    if (!regexp.phone.test(Phone)) {
      setShowMessage('Ingresa un número válido (10 dígitos)');
      return;
    }

    const result = await fetch(constants.baseUrl + '/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: updatedItem }),
    });

    if (result.status !== 201) {
      setShowMessage('Este nombre de usuario ya está registrado');
      console.log(await result.json());
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
      <label>Nombre</label>
      <input
        className={styles.detailsInput}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type='text'
        value={Firstname}
        required={true}
      />

      <label>Apellidos</label>
      <input
        className={styles.detailsInput}
        onChange={(e) => {
          setMake(e.target.value);
        }}
        type='text'
        value={Lastname}
        required={true}
      />

      <label>Teléfono</label>
      <input
        className={styles.detailsInput}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type='text'
        value={Phone}
        required={true}
      />
      <label>Email</label>
      <input
        className={styles.detailsInput}
        onChange={(e) => {
          setType(e.target.value);
        }}
        type={'email'}
        value={Email}
      />

      {showMessage.length > 0 ? <p>{showMessage}</p> : null}
      <div className={styles.buttonContainer}>
        <button onClick={handleSubmit}>Guardar</button>
      </div>
    </form>
  );
}
