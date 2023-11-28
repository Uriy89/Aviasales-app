/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Ticket.module.css';
import S from '../../../assets/images/S7.png';
import { convertMinutesToHoursAndMinutes, dateStart, addTime } from './utility';

const Ticket = (props) => {
  const { price, carrier, segments } = props;
  const seporator = (arr) => arr.join(', ');
  const startTime1 = dateStart(segments[0].date)[0];
  const startTime2 = dateStart(segments[1].date)[1];
  const durationTime1 = convertMinutesToHoursAndMinutes(segments[0].duration);
  const durationTime2 = convertMinutesToHoursAndMinutes(segments[1].duration);

  return (
    <li className={styles.ticket}>
      <div className={styles.ticketTop}>
        <p className={styles.ticketTopPrice}>{price}P</p>
        <img alt={carrier} src={S} />
      </div>
      <ul className={styles.routeInfo}>
        <li className={styles.routeInfoItem}>
          <p>
            {segments[0].origin} – {segments[0].destination}
          </p>
          <p>
            {startTime1} – {addTime(startTime1, durationTime1)}
          </p>
        </li>
        <li className={styles.routeInfoItem}>
          <p>В ПУТИ</p>
          <p>{durationTime1}</p>
        </li>
        <li className={styles.routeInfoItem}>
          <p>{segments[0].stops.length} пересадка</p>
          <p>{seporator(segments[0].stops)}</p>
        </li>
      </ul>
      <ul className={styles.routeInfo}>
        <li className={styles.routeInfoItem}>
          <p>
            {segments[1].origin} – {segments[1].destination}
          </p>
          <p>
            {startTime2} – {addTime(startTime2, durationTime2)}
          </p>
        </li>
        <li className={styles.routeInfoItem}>
          <p>В ПУТИ</p>
          <p>{durationTime2}</p>
        </li>
        <li className={styles.routeInfoItem}>
          <p>{segments[1].stops.length} пересадка</p>
          <p>{seporator(segments[1].stops)}</p>
        </li>
      </ul>
    </li>
  );
};

export default Ticket;
