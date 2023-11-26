import React from 'react';
import styles from './TicketsList.module.css';
import Ticket from './Ticket/Ticket';
import { useSelector } from 'react-redux';
import MoreButton from './MoreButton/MoreButton';
import { v4 as uuidv4 } from 'uuid';

const TicketsList = () => {
  const portionTickets = useSelector((state) => state.data.portionTickets);
  return (
    <ul className={styles.ticketsList}>
      {portionTickets.map((ticket) => (
        <React.Fragment key={uuidv4()}>
          <Ticket ticket={ticket} />
        </React.Fragment>
      ))}
      <MoreButton />
    </ul>
  );
};

export default TicketsList;
