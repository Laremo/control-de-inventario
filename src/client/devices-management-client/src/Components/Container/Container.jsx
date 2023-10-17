import styles from './Container.module.css';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
export default function Container() {
  const [mode, setMode] = useState(0);

  return (
    <div className={styles.main}>
      <Navbar
        mode={mode}
        setMode={setMode}
      />
      <h1>Container</h1>
    </div>
  );
}
