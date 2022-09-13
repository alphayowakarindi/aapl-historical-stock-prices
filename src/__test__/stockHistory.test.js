import stockHistoryReducer from '../redux/stockHistory/stockHistory';

describe('stock history reducer', () => {
  test('return empty array by default', () => {
    expect(stockHistoryReducer([], {})).toEqual([]);
  });

  test('return payload from api call', () => {
    const action = {
      type: 'aapl-historical-stock-prices/stockHistory/GET_STOCK_HISTORY/fulfilled',
      payload: [
        {
          date: '2022-09-09',
          open: 155.47,
          high: 157.81,
          low: 154.75,
          close: 157.37,
          adjClose: 157.37,
          volume: 6.796455e7,
          unadjustedVolume: 6.796455e7,
          change: 1.9,
          changePercent: 1.222,
          vwap: 156.64333,
          label: 'September 09, 22',
          changeOverTime: 0.01222,
        },
      ],
    };

    expect(stockHistoryReducer([], action)).toEqual(action.payload);
  });
});
