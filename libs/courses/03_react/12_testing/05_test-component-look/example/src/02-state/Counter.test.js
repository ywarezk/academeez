/**
 * react testing library cannot check and update the internal state.
 * Instead you will need to interact with the component to update the state.
 * So in this test we will have to press the button
 */

import { Counter } from './Counter';
import { render, fireEvent } from '@testing-library/react';

describe('Counter', () => {
  it('check the text after button click', () => {
    const { container } = render(<Counter />);
    const [h1] = container.getElementsByTagName('h1');
    expect(h1.textContent).toEqual('0');
    const [button] = container.getElementsByTagName('button');
    fireEvent.click(button);
    expect(h1.textContent).toEqual('1');
  });
});
