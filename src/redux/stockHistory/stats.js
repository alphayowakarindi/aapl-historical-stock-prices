import { createAsyncThunk } from '@reduxjs/toolkit';

// Action
const RESET_CHANGE_RANGE = 'aapl-historical-stock-prices/stockHistory/RESET_CHANGE_RANGE ';

// Redux thunk
export const changeRangeValue = createAsyncThunk(
  RESET_CHANGE_RANGE,
  async (value) => value,
);

// Reducer
export default function rangeReducer(state = { change: 'all' }, action = {}) {
  switch (action.type) {
    case `${RESET_CHANGE_RANGE}/fulfilled`:
      return { change: action.payload };
    default:
      return state;
  }
}
