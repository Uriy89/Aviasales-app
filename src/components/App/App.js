import React from 'react';
import './App.css';
import logo from '../../assets/images/Logo.png';
import S from '../../assets/images/S7.png';

function App() {
  return (
    <div className="wrapper">
      <img src={logo} className="app__logo" alt="aviasales" />
      <div className="content">
        <div className="filters">
          <p className="filter-label">количество пересадок</p>
          <label className="check">
            <input type="checkbox" className="check__input" />
            <span className="check__box"></span>
            Все
          </label>
          <label className="check">
            <input type="checkbox" className="check__input" />
            <span className="check__box"></span>
            Без пересадок
          </label>
          <label className="check">
            <input type="checkbox" className="check__input" />
            <span className="check__box"></span>1 пересадка
          </label>
          <label className="check">
            <input type="checkbox" className="check__input" />
            <span className="check__box"></span>2 пересадки
          </label>
          <label className="check">
            <input type="checkbox" className="check__input" />
            <span className="check__box"></span>3 пересадки
          </label>
        </div>

        <section className="main">
          <div className="buttons-filter">
            <button type="button" className="button-filter buttons-filter__cheap">
              САМЫЙ ДЕШЕВЫЙ
            </button>
            <button type="button" className="button-filter buttons-filter__fast">
              САМЫЙ БЫСТРЫЙ
            </button>
            <button type="button" className="button-filter buttons-filter__optimal">
              ОПТИМАЛЬНЫЙ
            </button>
          </div>

          <ul className="routes">
            <li className="route">
              <div className="route_top">
                <p className="route_top__price">13 000 P</p>
                <img alt="route_top__company" src={S} />
              </div>
              <ul className="route_info">
                <li className="route_info__item">
                  <p>MOW – HKT</p>
                  <p>10:45 – 08:00</p>
                </li>
                <li className="route_info__item">
                  <p>В ПУТИ</p>
                  <p>21ч 15м</p>
                </li>
                <li className="route_info__item">
                  <p>В ПУТИ</p>
                  <p>21ч 15м</p>
                </li>
              </ul>
            </li>

            <li className="route">
              <div className="route_top">
                <p className="route_top__price">13 000 P</p>
                <img alt="route_top__company" src={S} />
              </div>
              <ul className="route_info">
                <li className="route_info__item">
                  <p>MOW – HKT</p>
                  <p>10:45 – 08:00</p>
                </li>
                <li className="route_info__item">
                  <p>В ПУТИ</p>
                  <p>21ч 15м</p>
                </li>
                <li className="route_info__item">
                  <p>В ПУТИ</p>
                  <p>21ч 15м</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
