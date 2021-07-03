import './App.css';
import Child from './Child';
import { useState } from 'react';

function App() {
  const [isChild, setIsChild] = useState(true);

  return (
    <div className="App">
      {isChild && <Child />}

      <button onClick={() => setIsChild(false)}>
        Remove child
      </button>
    </div>
  );
}

export default App;
