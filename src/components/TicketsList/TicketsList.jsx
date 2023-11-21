import React from 'react';
import S from '../../assets/images/S7.png';
import styles from './TicketsList.module.css';

const TicketsList = () => {
  return (
    <ul className={styles.routes}>
      <li className={styles.route}>
        <div className={styles.routeTop}>
          <p className={styles.routeTop__price}>13 000 P</p>
          <img alt={styles.routeTop__company} src={S} />
        </div>
        <ul className={styles.routeInfo}>
          <li className={styles.routeInfo__item}>
            <p>MOW – HKT</p>
            <p>10:45 – 08:00</p>
          </li>
          <li className={styles.routeInfo__item}>
            <p>В ПУТИ</p>
            <p>21ч 15м</p>
          </li>
          <li className={styles.routeInfo__item}>
            <p>В ПУТИ</p>
            <p>21ч 15м</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default TicketsList;
