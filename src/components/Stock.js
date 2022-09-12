// import { PropTypes } from 'prop-types';
import PropTypes from 'prop-types';

const Stock = ({ date }) => (
  <div>
    <h3>
      {date}
    </h3>
  </div>
);

export default Stock;

Stock.propTypes = {
  date: PropTypes.string.isRequired,
};
