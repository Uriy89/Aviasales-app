import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  return (
    <aside className={styles.filters}>
      <p className={styles.filterLabel}>количество пересадок</p>
      <label className={styles.check}>
        <input type="checkbox" className={styles.check__input} />
        <span className={styles.check__box}></span>
        Все
      </label>
      <label className={styles.check}>
        <input type="checkbox" className={styles.check__input} />
        <span className={styles.check__box}></span>
        Без пересадок
      </label>
      <label className={styles.check}>
        <input type="checkbox" className={styles.check__input} />
        <span className={styles.check__box}></span>1 пересадка
      </label>
      <label className={styles.check}>
        <input type="checkbox" className={styles.check__input} />
        <span className={styles.check__box}></span>2 пересадки
      </label>
      <label className={styles.check}>
        <input type="checkbox" className={styles.check__input} />
        <span className={styles.check__box}></span>3 пересадки
      </label>
    </aside>
  );
};

export default Filter;
