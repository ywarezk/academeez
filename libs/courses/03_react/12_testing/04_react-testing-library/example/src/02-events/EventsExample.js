import { useState } from 'react';

const EventsExample = () => {
  const [ isVisible, setIsVisible ] = useState(true);

  return (
    <div>
      {
        isVisible && (
          <h1>
            Events
          </h1>
        )
      }

      <p>
        <code>@testing-library/react</code> can help us trigger events.
      </p>

      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle visibility
      </button>
    </div>
  )
}

export default EventsExample;
