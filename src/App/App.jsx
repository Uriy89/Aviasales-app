import React from 'react';
import styles from './App.module.css';
import logo from '../assets/images/Logo.png';
import { getSearchId } from '../services/tickets-service';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import TicketsList from '../components/TicketsList';

const App = () => {
  getSearchId();
  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.app__logo} alt="aviasales" />
      <div className={styles.content}>
        <Filter />
        <section className={styles.main}>
          <Sort />
          <TicketsList />
        </section>
      </div>
    </div>
  );
};

export default App;
