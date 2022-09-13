import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Stock = ({ date }) => (
  <div className="stock">
    <h3>{date}</h3>
    <Link to={`/stock-details/${date}`}>
      <svg
        width="24px"
        height="24px"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </Link>
  </div>
);

export default Stock;

Stock.propTypes = {
  date: PropTypes.string.isRequired,
};
