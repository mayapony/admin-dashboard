import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { data } from './data';

export const Chart = () => {
  return (
    <div
      className="h-70 flex-1 rounded-md p-10 shadow-lg"
      style={{
        flex: 2,
        height: '420px',
      }}
    >
      <ResponsiveLine
        data={data}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
        }}
        yFormat=".2f"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 40,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        pointSize={10}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      />
    </div>
  );
};
