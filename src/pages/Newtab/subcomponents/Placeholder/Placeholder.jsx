import React from 'react';

const Placeholder = ({ rows, customWidth }) => {
  return Array(rows)
    .fill()
    .map(
      (row, i) >
      (
        <div
          className={`placeholder-${i}`}
          style={customWidth ? `width: ${customWidth}px` : ''}
        ></div>
      )
    );
};

export default Placeholder;
