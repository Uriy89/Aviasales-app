/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Ticket.module.css';
import S from '../../../assets/images/S7.png';

const Ticket = (props) => {
  const { ticket } = props;
  const seporator = (arr) => arr.join(', ');

  return (
    <li className={styles.ticket}>
      <div className={styles.ticketTop}>
        <p className={styles.ticketTopPrice}>{ticket.price}</p>
        <img alt={ticket.carrier} src={S} />
      </div>
      <ul className={styles.routeInfo}>
        <li className={styles.routeInfoItem}>
          <p>
            {ticket.segments[0].origin} – {ticket.segments[0].destination}
          </p>
          <p>10:45 – 08:00</p>
        </li>
        <li className={styles.routeInfoItem}>
          <p>В ПУТИ</p>
          <p>21ч 15м</p>
        </li>
        <li className={styles.routeInfoItem}>
          <p>{ticket.segments[0].stops.length} пересадка</p>
          <p>{seporator(ticket.segments[0].stops)}</p>
        </li>
      </ul>
      <ul className={styles.routeInfo}>
        <li className={styles.routeInfoItem}>
          <p>
            {ticket.segments[1].origin} – {ticket.segments[1].destination}
          </p>
          <p>10:45 – 08:00</p>
        </li>
        <li className={styles.routeInfoItem}>
          <p>В ПУТИ</p>
          <p>21ч 15м</p>
        </li>
        <li className={styles.routeInfoItem}>
          <p>{ticket.segments[1].stops.length} пересадка</p>
          <p>{seporator(ticket.segments[1].stops)}</p>
        </li>
      </ul>
    </li>
  );
};

export default Ticket;
