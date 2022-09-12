import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StockDetails from './pages/StockDetails';
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
        <Link to="/">Home</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stock-details/:date" element={<StockDetails />} />
      </Routes>
    </div>
  );
}

export default App;
