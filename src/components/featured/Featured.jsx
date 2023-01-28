import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgress } from '@mui/material';

export const Featured = () => {
  return (
    <div className="flex flex-1 flex-col items-center rounded-md p-3 shadow-md">
      <div className="flex w-full justify-between text-gray-600">
        <h3 className="text-base">Total Revenue</h3>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="relative flex max-w-max p-5">
        <CircularProgress variant="determinate" value={70} size={100} />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500">
          70%
        </p>
      </div>
    </div>
  );
};
