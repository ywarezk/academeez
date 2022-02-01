/**
 * this component will increment a counter when the button is clicked
 */

import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increment counter</button>
    </div>
  );
};
