import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions
const GET_STOCK_HISTORY = 'aapl-historical-stock-prices/stockHistory/GET_STOCK_HISTORY ';
// Api
const url = 'https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=995fb2d57bb2422e6cef63548876f3ee';

// Redux thunks
export const fetchStockHistory = createAsyncThunk(
  GET_STOCK_HISTORY,
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    const stockHistoryArr = data.historical.slice(0, 30);
    return stockHistoryArr;
  },
);

// Reducer
export default function stockHistoryReducer(state = [], action = {}) {
  switch (action.type) {
    case `${GET_STOCK_HISTORY}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}
