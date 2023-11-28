import React, { useEffect } from 'react';
import styles from './TicketsList.module.css';
import Ticket from './Ticket/Ticket';
import { useSelector, useDispatch } from 'react-redux';
import MoreButton from './MoreButton/MoreButton';
import { v4 as uuidv4 } from 'uuid';
import { fetchTickets, sortTickets } from '../../redux/reducers/ticketsSlice';

const TicketsList = () => {
  const store = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('store: ' + store.data);
    setTimeout(() => {
      if (!store.stop) {
        dispatch(fetchTickets());
      }
      dispatch(sortTickets());
    }, 100);
  }, [dispatch, store.loading]);

  const createTickets = (tickets, count) => {
    let viewTickets = [];
    for (let i = 0; i < count; i++) {
      const ticket = tickets[i];
      if (ticket) {
        const result = (
          <Ticket
            key={uuidv4()}
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
          />
        );
        viewTickets.push(result);
      }
    }
    return viewTickets;
  };

  return (
    <ul className={styles.ticketsList}>
      {createTickets(store.tickets, store.ticketsCount)}
      {store.sortTickets.length === 0 ? null : <MoreButton />}
    </ul>
  );
};

export default TicketsList;
