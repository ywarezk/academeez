/**
 * screen will help you grab elements
 * You can also use the Testing Playground extension to help you grab the element
 */

import { render, screen } from '@testing-library/react';
import ScreenExample from './ScreenExample';

describe('screen', () => {
  it('grab the p', () => {
    render(<ScreenExample />);
    const p = screen.getByText('screen will help', { exact: false });
    const p2 = screen.getByTestId('description');
    expect(p).toBe(p2);
  });
});
