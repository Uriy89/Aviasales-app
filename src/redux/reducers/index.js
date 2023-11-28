import { combineReducers } from 'redux';
import ticketsSlice from './ticketsSlice';

const rootReducer = combineReducers({
  data: ticketsSlice
});

export default rootReducer;
