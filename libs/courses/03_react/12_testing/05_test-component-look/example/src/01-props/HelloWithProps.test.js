/**
 * We can check in tests how our component looks like
 * with different props we are getting
 */

import { render, screen } from '@testing-library/react';
import { HelloWithProps } from './HelloWithProps';

describe('HelloWithProps', () => {
  it('Test component with different props', () => {
    const { rerender, container } = render(<HelloWithProps />);
    const h1 = container.getElementsByTagName('h1');
    expect(h1[0].textContent).toEqual('Hello John Doe');
    rerender(<HelloWithProps name="academeez" />);
    expect(h1[0].textContent).toEqual('Hello academeez');
  });
});
