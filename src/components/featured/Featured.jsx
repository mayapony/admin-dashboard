import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Featured = () => {
  return (
    <div
      className="flex flex-col items-center justify-between gap-2 rounded-md p-3 shadow-md"
      style={{
        flex: 1,
      }}
    >
      <div className="flex w-full justify-between text-gray-600">
        <h3 className="text-base font-bold text-gray-500">Total Revenue</h3>
        <MoreVertIcon fontSize="small" />
      </div>

      <CircularProgressWithLabel value={70} size={120} />

      <p className="text-base font-semibold text-gray-500">
        Total sales made today
      </p>
      <p className=" text-3xl">$420</p>
      <p className="mx-4  text-center text-xs font-light text-gray-400">
        Previous transactions processing. Last payments may not be included.
      </p>
      <div className="flex w-full justify-around">
        <RevenueFluctuationWidget label={'Target'} value={-12.4} />
        <RevenueFluctuationWidget label={'Last week'} value={+12.4} />
        <RevenueFluctuationWidget label={'Last Month'} value={12.4} />
      </div>
    </div>
  );
};

const RevenueFluctuationWidget = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center justify-center text-sm">
      <p className="font-semibold text-gray-400">{label}</p>
      <div
        className={`flex items-center justify-center text-xs font-semibold ${
          value < 0 ? 'text-red-400' : 'text-green-400'
        }`}
      >
        {value < 0 ? (
          <KeyboardArrowDownIcon fontSize="small" />
        ) : (
          <KeyboardArrowUpIcon fontSize="small" />
        )}
        <div>${value}</div>
      </div>
    </div>
  );
};

const CircularProgressWithLabel = ({ value, size = 50 }) => {
  return (
    <div className="relative flex max-w-max p-5">
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        color="primary"
      />
      <p
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400"
        style={{ fontSize: `${size / 5}px` }}
      >
        {value}%
      </p>
    </div>
  );
};

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number,
};
