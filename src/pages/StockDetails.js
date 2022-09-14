import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function StockDetails() {
  const { date } = useParams();
  const stockList = useSelector((store) => store.stock);
  const stock = stockList.find((item) => item.date === date);
  return (
    <div className="stock-details-container">
      <div className="details">
        <span>
          Open:
          {stock.open}
        </span>
        {' '}
        <span>
          High:
          {stock.high}
        </span>
        {' '}
        <span>
          Close:
          {stock.close}
        </span>
        <span>
          adjClose:
          {stock.adjClose}
        </span>
        <span>
          Change:
          {stock.change}
        </span>
        <span>
          Change Percent:
          {stock.changePercent}
        </span>
        <span>
          Label:
          {stock.label}
        </span>
        <span>
          Change Over Time:
          {stock.changeOverTime}
        </span>
        <span>
          Volume:
          {stock.volume}
        </span>
      </div>
    </div>
  );
}

export default StockDetails;
