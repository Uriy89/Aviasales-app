import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    te: 123
  }
});

export default store;
