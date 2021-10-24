/**
 * How to test your forms
 * 1. test client side validation works
 */

import { Login } from './Login';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userService } from './user.service';

describe('Login', () => {
  it('validation', async () => {
    const { container } = render(<Login />);
    const emailTextArea = screen.getByTestId('emailInput');
    const emailInput = emailTextArea.getElementsByTagName('input');
    const passwordTextArea = screen.getByTestId('passwordInput');
    const passwordInput = passwordTextArea.getElementsByTagName('input');
    const button = screen.getByTestId('submitButton');
    userService.login = jest.fn();
    fireEvent.change(emailInput[0], { target: { value: 'invalid-email'}});
    fireEvent.change(passwordInput[0], { target: { value: '123'}});
    fireEvent.click(button);
    await waitFor(
      () => expect(container.getElementsByClassName('Mui-error').length > 0).toEqual(true)
    );
    expect(userService.login).not.toHaveBeenCalled();
  })
})
