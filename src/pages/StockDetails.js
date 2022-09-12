import { useParams } from 'react-router-dom';

function StockDetails() {
  const { date } = useParams();
  return (
    <div>
      <h3>
        Stock details-
        {date}
      </h3>
    </div>
  );
}

export default StockDetails;
