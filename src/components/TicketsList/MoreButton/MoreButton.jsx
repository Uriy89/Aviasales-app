import React, { useState } from 'react';
import styles from './MoreButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ticketsPortion } from '../../../redux/actions';

const MoreButton = () => {
  const tickets = useSelector((state) => state.data.tickets);
  const [index, setIndex] = useState(5);
  const dispatch = useDispatch();

  const onMoreTickets = () => {
    dispatch(ticketsPortion(tickets, index));
    setIndex((index) => index + 5);
  };

  return (
    <button type="button" className={styles.moreButton} onClick={onMoreTickets}>
      Показать еще 5 билетов!
    </button>
  );
};

export default MoreButton;
