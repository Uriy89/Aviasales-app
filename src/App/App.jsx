import React, { useEffect } from 'react';
import styles from './App.module.css';
import logo from '../assets/images/Logo.png';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import TicketsList from '../components/TicketsList';
import Spinner from '../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchId } from '../redux/reducers/ticketsSlice';

const App = () => {
  const stop = useSelector((state) => state.data.stop);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSearchId());
    };
    fetchData();
  }, [dispatch]);

  const spinner = !stop ? <Spinner /> : null;

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
