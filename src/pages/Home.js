import { useSelector } from 'react-redux';
import Stock from '../components/Stock';

function Home() {
  const stockList = useSelector((store) => store.stock);
  return (
    <div className="stock-container">
      {stockList.map((stock) => (
        <Stock key={stock.date} date={stock.date} />
      ))}
    </div>
  );
}

export default Home;
