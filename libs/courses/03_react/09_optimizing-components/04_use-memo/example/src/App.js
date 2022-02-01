import './App.css';
import { useMemo, useState } from 'react';
import Child from './Child';

function App() {
  const [counter, setCounter] = useState(0);

  const Child2 = useMemo(() => {
    return <Child calc1={10} calc2={10} />;
  }, []);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <Child calc1={10} calc2={Math.random()} />

      {Child2}
    </div>
  );
}

export default App;
