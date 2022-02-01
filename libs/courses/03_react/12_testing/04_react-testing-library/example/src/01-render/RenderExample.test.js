/**
 * Testing the RenderExample while focusing on the render function
 */

import { render } from '@testing-library/react';
import RenderExample from './RenderExample';

describe('RenderExample - render common examples', () => {
  it('container', () => {
    // container is the HTMLDivElement where the component is rendered
    const { container } = render(<RenderExample />);
    const h2 = container.querySelector('h2');
    expect(h2.textContent).toBe('render');
  });

  it('debug', () => {
    // using debug you can examine the html result of the component
    const { debug } = render(<RenderExample />);
    debug();
  });
});
