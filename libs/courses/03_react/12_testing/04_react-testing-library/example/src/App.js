import ScreenExample from './03-screen/ScreenExample';
import WaitForExample from './04-wait-for/WaitForExample';

function App() {
  return (
    <div>
      <h1>@testing-library/react</h1>

      <p>
        The most common methods used in <code>@testing-library/react</code>
      </p>

      <ScreenExample />

      <WaitForExample />
    </div>
  );
}

export default App;
