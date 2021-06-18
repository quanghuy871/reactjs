import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar.js';

function Chart(props) {
  const valueObj = props.dataPoints.map(el => el.value);
  const max = Math.max(...valueObj);

  return (
      <div className="chart">
        {props.dataPoints.map(el => (
            <ChartBar
                key={el.label}
                value={el.value}
                maxValue={max}
                label={el.label}
            />
        ))}
      </div>
  );
}

export default Chart;