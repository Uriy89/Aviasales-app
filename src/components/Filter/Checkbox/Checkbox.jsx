import React from 'react';
import styles from './Checkbox.module.css';
import PropTypes from 'prop-types';
import { changeFilter } from '../../../redux/reducers/ticketsSlice';
import { useDispatch } from 'react-redux';

const Checkbox = (props) => {
  const { name, label, check } = props;
  const dispatch = useDispatch();
  return (
    <label className={styles.check} htmlFor={label}>
      <input
        checked={check}
        id={label}
        type="checkbox"
        className={styles.check__input}
        onChange={() => dispatch(changeFilter(name))}
      />
      <span className={styles.check__box}></span>
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  check: PropTypes.bool,
  name: PropTypes.string
};

export default Checkbox;
