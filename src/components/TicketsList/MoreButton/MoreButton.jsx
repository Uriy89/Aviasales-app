import React from 'react';
import styles from './MoreButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToTicketsPortion } from '../../../redux/reducers/ticketsSlice';

const MoreButton = () => {
  const tickets = useSelector((state) => state.data.tickets);
  const dispatch = useDispatch();

  const onMoreTickets = () => {
    const currentIndex = tickets.length;
    dispatch(addToTicketsPortion(tickets, currentIndex, 5));
  };

  return (
    <button type="button" className={styles.moreButton} onClick={onMoreTickets}>
      Показать еще 5 билетов!
    </button>
  );
};

export default MoreButton;
