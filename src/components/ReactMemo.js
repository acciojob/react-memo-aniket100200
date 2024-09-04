import React from 'react';

const ReactMemoComponent = React.memo(({ counter }) => {
  console.log('Rendering counter component');
  return (
    <div>
      <h2>Counter</h2>
      <p>Counter value: {counter}</p>
    </div>
  );
});

export default ReactMemoComponent;
