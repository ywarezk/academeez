import { useState, lazy, Suspense } from 'react';
import './App.css';

const LazyChild = lazy(() => import('./Child'));

function App() {
  const [isChildLoaded, setIsChildLoaded] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsChildLoaded(true)}>
        Lazy load only when button pressed
      </button>
      {isChildLoaded && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <LazyChild />
        </Suspense>
      )}
    </div>
  );
}

export default App;
