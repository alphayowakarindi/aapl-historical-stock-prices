import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeRangeValue } from '../redux/stockHistory/stats';

function Stats() {
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState(false);
  const handleClick = (changeRange) => {
    setShowDropDown(false);
    dispatch(changeRangeValue(changeRange));
  };
  return (
    <div className="stats">
      <span>STATS BY DATE</span>
      <div className="dropdown">
        <button
          className="dropbtn"
          type="button"
          onClick={() => {
            setShowDropDown(true);
          }}
        >
          <span className="btn-text"> Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {showDropDown && (
          <div className="dropdown-content">
            <button
              type="button"
              onClick={() => {
                handleClick('all');
              }}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('<1');
              }}
            >
              &#60;1
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('1+');
              }}
            >
              1+
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('2+');
              }}
            >
              2+
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('3+');
              }}
            >
              3+
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stats;
