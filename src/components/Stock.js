import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Stock = ({ date }) => (
  <div>
    <h3>
      <Link to={`/stock-details/${date}`}>{date}</Link>
    </h3>
  </div>
);

export default Stock;

Stock.propTypes = {
  date: PropTypes.string.isRequired,
};
