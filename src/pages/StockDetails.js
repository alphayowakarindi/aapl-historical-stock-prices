import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function StockDetails() {
  const { date } = useParams();
  const stockList = useSelector((store) => store.stock);
  const stock = stockList.find((item) => item.date === date);
  return (
    <div className="stock-details-container">
      <div className="back">
        <Link to="/">
          <svg
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        <h3>{date}</h3>
      </div>
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
