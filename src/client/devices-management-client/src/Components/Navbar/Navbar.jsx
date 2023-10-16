import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <header className={styles.title}>Control de Inventario</header>
      <nav className={styles.navbar}>
        <ul>
          <li>Control de Dispositivos</li>
          <li>Control de Usuarios</li>
          <li>Control de Préstamos</li>
        </ul>
      </nav>
    </div>
  );
}
