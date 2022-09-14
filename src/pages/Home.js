import { useSelector } from 'react-redux';
import React from 'react';
import Stock from '../components/Stock';
import Header from '../components/Header';

function Home() {
  const stockList = useSelector((store) => store.stock);
  if (stockList.length > 0) {
    return (
      <div className="stocks">
        <Header />
        <div className="stock-container">
          {stockList.map((stock) => (
            <Stock key={stock.date} date={stock.date} change={stock.change} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="home-loading">
      <span>Loading...</span>
    </div>
  );
}

export default Home;
