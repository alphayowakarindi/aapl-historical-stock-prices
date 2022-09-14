import { configureStore } from '@reduxjs/toolkit';
import stockHistoryReducer from './stockHistory/stockHistory';
import rangeReducer from './stockHistory/stats';

const store = configureStore({
  reducer: {
    stock: stockHistoryReducer,
    range: rangeReducer,
  },
});
export default store;
