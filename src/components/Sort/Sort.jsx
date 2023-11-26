import React from 'react';
import styles from './Sort.module.css';
import classNames from 'classnames';
import * as actionsTypes from '../../redux/actions/actionTypes';
import { useSelector } from 'react-redux';

const Sort = () => {
  const store = useSelector((store) => store.data);

  const buttons = [
    {
      name: actionsTypes.SORT_TICKET_BY_CHEAP,
      label: 'Самый дешевый',
      isActive: store.isCheap
    },
    {
      name: actionsTypes.SORT_TICKET_BY_FAST,
      label: 'Самый быстрый',
      isActive: store.isFast
    },
    {
      name: actionsTypes.SORT_TICKET_BY_OPTIMAL,
      label: 'Оптимальный',
      isActive: store.isOptimal
    }
  ];

  const createButtons = () => {
    return buttons.map((button) => {
      const buttonClasses = classNames({
        [styles.buttonFilter]: true,
        [styles.buttonFilterActive]: button.isActive
      });
      return (
        <button key={button.name} id={button.name} className={buttonClasses}>
          {button.label}
        </button>
      );
    });
  };

  return <div className={styles.buttonsFilter}>{createButtons()}</div>;
};

export default Sort;
