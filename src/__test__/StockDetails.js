import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import StockDetails from '../pages/StockDetails';

test('renders when the StockDetails component matches snapshot', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <StockDetails />
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
