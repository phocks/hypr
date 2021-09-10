import { useState, useEffect } from "react";

import styles from '../styles/Home.module.scss'

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      Hello world!
    </div>
  );
}
