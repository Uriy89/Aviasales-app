import React from 'react';
import styles from './Sort.module.css';

const Sort = () => {
  return (
    <div className={styles.buttonsFilter}>
      <button type="button" className={`${styles.buttonFilter} ${styles.buttonsFilter__cheap}`}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button" className={`${styles.buttonFilter} ${styles.buttonsFilter__fast}`}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button type="button" className={`${styles.buttonFilter} ${styles.buttonsFilter__optimal}`}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

export default Sort;
