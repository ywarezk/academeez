import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import Home from './pages/Home';
// import About from './pages/About';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'))

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Suspense>

      </div>
    </div>
  );
}

export default App;
