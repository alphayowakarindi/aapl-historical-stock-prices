import { useSelector } from 'react-redux';
import React from 'react';
import Stock from '../components/Stock';
import Header from '../components/Header';
import Stats from '../components/Stats';

function Home() {
  const range = useSelector((state) => state.range.change);

  let stockList = useSelector((store) => store.stock);

  if (range === 'all') {
    stockList = [...stockList];
  } else if (range === '<1') {
    stockList = [...stockList.filter((stock) => stock.change < 1)];
  } else if (range === '1+') {
    stockList = stockList.filter(
      (stock) => stock.change > 1 && stock.change < 2,
    );
  } else if (range === '2+') {
    stockList = stockList.filter(
      (stock) => stock.change > 2 && stock.change < 3,
    );
  } else {
    stockList = stockList.filter((stock) => stock.change > 3);
  }

  if (stockList.length > 0) {
    return (
      <div className="stocks">
        <Header />
        <Stats />
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
