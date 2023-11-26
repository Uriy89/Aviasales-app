import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import logo from '../assets/images/Logo.png';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import TicketsList from '../components/TicketsList';
import Spinner from '../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchId, fetchTickets, ticketsPortion } from '../redux/actions';

const App = () => {
  const loading = useSelector((state) => state.data.loading);
  const tickets = useSelector((state) => state.data.tickets);
  const loaded = useSelector((state) => state.data.loaded);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSearchId());
      await dispatch(fetchTickets(tickets));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (tickets !== null) {
      dispatch(ticketsPortion(tickets, index));
      setIndex((index) => index + 5);
    }
  }, [loaded]);

  const spinner = loading ? <Spinner /> : null;

  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.app__logo} alt="aviasales" />
      <div className={styles.content}>
        <Filter />
        <section className={styles.main}>
          <Sort />
          <div className={styles.loading}>{spinner}</div>
          <TicketsList />
        </section>
      </div>
    </div>
  );
};

export default App;
