import React from 'react';
import styles from './Sort.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { sortTickets, changeSort } from '../../redux/reducers/ticketsSlice';
import * as c from '../../constans';

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((store) => store.data.sort);
  let id = 0;

  const buttons = [
    {
      type: c.SORT_TICKET_BY_CHEAP,
      label: 'Самый дешевый',
      isActive: sort === c.SORT_TICKET_BY_CHEAP
    },
    {
      type: c.SORT_TICKET_BY_FAST,
      label: 'Самый быстрый',
      isActive: sort === c.SORT_TICKET_BY_FAST
    },
    {
      type: c.SORT_TICKET_BY_OPTIMAL,
      label: 'Оптимальный',
      isActive: sort === c.SORT_TICKET_BY_OPTIMAL
    }
  ];

  const createButtons = () => {
    return buttons.map((button) => {
      const buttonClasses = classNames({
        [styles.buttonFilter]: true,
        [styles.buttonFilterActive]: button.isActive
      });
      return (
        <button
          key={id++}
          id={button.name}
          className={buttonClasses}
          onClick={() => {
            dispatch(sortTickets(), dispatch(changeSort(button.type)));
          }}>
          {button.label}
        </button>
      );
    });
  };

  return <div className={styles.buttonsFilter}>{createButtons()}</div>;
};

export default Sort;
