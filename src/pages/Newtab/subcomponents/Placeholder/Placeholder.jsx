import React from 'react';
import './placeholder.scss';

const Placeholder = ({ rows, heights }) => {
  return (
    <div className="ascend-placeholder-container">
      {Array(rows)
        .fill()
        .map((_, i) => (
          <div
            className={`ascend-placeholder ascend-placeholder-${i}`}
            style={{ height: heights[i] + 'px' }}
          >
            <div className="ascend-placeholder-loading"></div>
          </div>
        ))}
    </div>
  );
};

export default Placeholder;
