// pages/index.js

import { useState, useEffect } from 'react';
import styles from '../Loader/Loader.module.css';
import MainVisual from '../MainVisual/MainVisual';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // ローディング時間を 3 秒に設定
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <MainVisual />
      )}
    </div>
  );
};

export default Loader;
