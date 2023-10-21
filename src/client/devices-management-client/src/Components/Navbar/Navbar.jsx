import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ mode, setMode, closeDetails }) {
  const [navHidden, setNavHidden] = useState(true);

  const handleNavBarStatus = () => {
    setNavHidden(!navHidden);
  };

  return (
    <div className={styles.navContainer}>
      <header className={styles.title}>Control de Inventario</header>

      <button
        onClick={handleNavBarStatus}
        className={navHidden ? styles.mobileNavToggle : styles.mobileClose}>
        <svg className={styles.navController}>
          <g
            stroke='#fff'
            strokeWidth={4}
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path
              id={styles[`top-line`]}
              d='M10,10 L50,10 Z'></path>
            <path
              id={styles[`middle-line`]}
              d='M10,20 L50,20 Z'></path>
            <path
              id={styles[`bottom-line`]}
              d='M10, 30 L50,30 Z'></path>
          </g>
        </svg>
      </button>

      <nav className={`${styles.navbar} ${navHidden ? '' : styles.navbarShow}`}>
        <ul id='navigation'>
          <li
            className={mode === 0 ? styles.active : ''}
            onClick={(e) => {
              setMode(0);
              // closeDetails();
              e.preventDefault();
            }}>
            <span>Control de Dispositivos</span>
          </li>
          <li
            className={mode === 1 ? styles.active : ''}
            onClick={(e) => {
              setMode(1);
              // closeDetails();
              e.preventDefault();
            }}>
            <span>Control de Usuarios</span>
          </li>
          <li
            className={mode === 2 ? styles.active : ''}
            onClick={(e) => {
              setMode(2);
              // closeDetails();
              e.preventDefault();
            }}>
            <span>Control de Préstamos</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
