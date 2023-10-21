import { useEffect, useState } from 'react';
import styles from '../Details-container/details-container.module.css';
import constants from '../../utils/constants';

export default function LoanCreate({ closeCreate }) {
  const [users, setUsers] = useState([]);
  const [devices, setDevices] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(constants.baseUrl + '/device/available')
      .then((res) => res.json())
      .then((data) => setDevices(data));
    fetch(constants.baseUrl + '/user')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loan = {
      idUser: users[selectedUser].IdUser,
      idDevice: devices[selectedDevice].IdDevice,
      loanDate: new Date().toISOString(),
    };

    console.log(loan);

    const result = await fetch(constants.baseUrl + '/loan/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ loan }),
    });

    if (result.status !== 201) {
      console.log(await result.json());
      data = await result.json();
      setMessage(data?.error ? data.error : 'Algo salió mal');
    } else {
      setMessage('Guardado existosamente! \n Volviendo a la vista anterior...');
      setTimeout(() => closeCreate(), 2400);
    }
  };

  return (
    <form
      className={styles.loanForm}
      onSubmit={handleSubmit}>
      <label>Selecciona el Usuario</label>
      <select
        onChange={(e) => {
          e.preventDefault();
          setSelectedUser(e.target.selectedIndex);
        }}>
        {users.map((user, i) => (
          <option key={i}>{`${user.Firstname} ${user.Lastname}`}</option>
        ))}
      </select>
      <label title='Solo dispositivos disponibles'>
        Selecciona el Dispositivo
      </label>
      <select
        title='Se muestran solo dispositivos disponibles'
        onChange={(e) => {
          e.preventDefault();
          setSelectedDevice(e.target.selectedIndex);
        }}>
        {devices.map((device, i) => (
          <option key={i}>{`${device.Name} - ${device.Make}`}</option>
        ))}
      </select>

      {message.length > 0 ? <p>{message}</p> : null}
      <div className={styles.buttonContainer}>
        <button onClick={handleSubmit}>Guardar</button>
      </div>
    </form>
  );
}
