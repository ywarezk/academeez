import './App.css';
import { ReadFromRedux } from './01-read-redux/ReadFromRedux';
import { ChangeRedux } from './02-change-redux/ChangeRedux';

function App() {
  return (
    <div className="App">
      <ReadFromRedux />

      <ChangeRedux />
    </div>
  );
}

export default App;
