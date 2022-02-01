/**
 * @testing-library/react can help us trigger events
 */

import EventsExample from './EventsExample';
import { render, fireEvent } from '@testing-library/react';

describe('EventsExample - trigger events', () => {
  it('validate h1 is visible at first', () => {
    const { container } = render(<EventsExample />);
    const h1 = container.querySelector('h1');
    expect(h1).not.toBeNull();
  });

  it('click the button should make h1 invisible', () => {
    const { container, debug } = render(<EventsExample />);
    const button = container.querySelector('button');
    fireEvent.click(button);
    const h1 = container.querySelector('h1');
    expect(h1).toBeNull();
  });
});
