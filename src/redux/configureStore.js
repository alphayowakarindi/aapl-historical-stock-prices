import { configureStore } from '@reduxjs/toolkit';
import stockHistoryReducer from './stockHistory/stockHistory';

const store = configureStore({
  reducer: {
    stock: stockHistoryReducer,
  },
});
export default store;
