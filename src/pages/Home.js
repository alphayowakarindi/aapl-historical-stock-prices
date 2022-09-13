import { useSelector } from 'react-redux';
import Stock from '../components/Stock';

function Home() {
  const stockList = useSelector((store) => store.stock);
  if (stockList.length > 0) {
    return (
      <div className="stock-container">
        {stockList.map((stock) => (
          <Stock key={stock.date} date={stock.date} change={stock.change} />
        ))}
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
