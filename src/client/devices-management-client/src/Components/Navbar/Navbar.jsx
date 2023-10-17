import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ mode, setMode }) {
  const [navHidden, setNavHidden] = useState(true);

  const handleNavBarStatus = () => {
    setNavHidden(!navHidden);
  };

  return (
    <div className={styles.navContainer}>
      <header className={styles.title}>Control de Inventario</header>

      <button
        onClick={handleNavBarStatus}
        className={
          navHidden ? styles.mobileNavToggle : styles.mobileClose
        }></button>

      <nav className={`${styles.navbar} ${navHidden ? '' : styles.navbarShow}`}>
        <ul id='navigation'>
          <li
            className={(mode === 0 ? styles.active : '')}
            onClick={() => {
              setMode(0);
            }}>
            <span>Control de Dispositivos</span>
          </li>
          <li
            className={(mode === 1 ? styles.active : '')}
            onClick={() => {
              setMode(1);
            }}>
            <span>Control de Usuarios</span>
          </li>
          <li
            className={(mode === 2 ? styles.active : '')}
            onClick={() => {
              setMode(2);
            }}>
            <span>Control de Préstamos</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
