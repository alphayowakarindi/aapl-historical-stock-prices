import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import { fetchStockHistory } from './redux/stockHistory/stockHistory';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStockHistory());
  });
  return (
    <div>
      <nav>
        <h1>AAPL</h1>
      </nav>
      <Home />
    </div>
  );
}

export default App;
