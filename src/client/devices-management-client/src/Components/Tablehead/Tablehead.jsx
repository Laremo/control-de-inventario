import styles from '../Tablebody/tablebody.module.css';

export default function Tablehead({ mode }) {
  if (mode === 0) {
    return (
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th className={styles.hideOnMob}>Marca</th>
        <th className={styles.hideOnMob}>Descripción</th>
        <th>Tipo</th>
        <th>Estado</th>
      </tr>
    );
  }

  if (mode === 1) {
    return (
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th className={styles.hideOnMob}>Teléfono</th>
        <th className={styles.hideOnMob}>Correo</th>
      </tr>
    );
  }
  if (mode === 2) {
    return (
      <tr>
        <th>Nombre</th>
        <th className={styles.hideOnMob}>Apellido</th>
        <th>Dispositivo</th>
        <th>Fecha Préstamo</th>
        <th>Fecha Retorno</th>
      </tr>
    );
  }
}
