/**
 * Using waitFor we can wait for an expect to be filled
 */

import { render, waitFor } from '@testing-library/react';
import WaitForExample from './WaitForExample';

describe('waitFor', () => {
  it('waitFor - element to disappear', async () => {
    const { debug, queryByTestId } = render(<WaitForExample />);
    await waitFor(() => {
      const toggle = queryByTestId('toggle');
      expect(toggle).not.toBeInTheDocument();
    });
    debug();
  });
});
