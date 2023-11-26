import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk).concat(logger)
});
