import React from 'react';
import styles from './Filter.module.css';
import Checkbox from './Checkbox';
import { useSelector } from 'react-redux';

const Filter = () => {
  const { filterButtons } = useSelector((state) => state.data);

  const createButton = () => {
    return filterButtons.map((filter) => {
      return (
        <Checkbox key={filter.name} name={filter.name} label={filter.label} check={filter.check} />
      );
    });
  };

  return (
    <aside className={styles.filters}>
      <p className={styles.filterLabel}>количество пересадок</p>
      {createButton()}
    </aside>
  );
};

export default Filter;
