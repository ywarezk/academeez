/**
 * How to test your forms
 * 1. test client side validation works
 */

import { Login } from './Login';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userService } from './user.service';

describe('Login', () => {
  const submitForm = (email, password) => {
    const rtlBag = render(<Login />);
    const emailTextArea = screen.getByTestId('emailInput');
    const emailInput = emailTextArea.getElementsByTagName('input');
    const passwordTextArea = screen.getByTestId('passwordInput');
    const passwordInput = passwordTextArea.getElementsByTagName('input');
    const button = screen.getByTestId('submitButton');
    fireEvent.change(emailInput[0], { target: { value: email}});
    fireEvent.change(passwordInput[0], { target: { value: password}});
    fireEvent.click(button);
    return rtlBag;
  }

  it('validation', async () => {
    userService.login = jest.fn();
    const { container } = submitForm('invalid-email', '123');
    await waitFor(
      () => expect(container.getElementsByClassName('Mui-error').length > 0).toEqual(true)
    );
    expect(userService.login).not.toHaveBeenCalled();
  });

  it('server success response', async () => {
    userService.login = jest.fn().mockReturnValueOnce(Promise.resolve({
      firstName: 'Yariv',
      lastName: 'Katz'
    }));
    submitForm('success@email.com', '12345678');
    await waitFor(
      () => screen.getByTestId('successMessage')
    );
    expect(screen.getByTestId('successMessage')).toHaveTextContent('Hello Yariv Katz')
  });

  it('server error response', async () => {
    userService.login = jest.fn().mockReturnValueOnce(Promise.reject({
      message: 'something happened',
      response: {
        status: 401
      }
    }));
    submitForm('success@email.com', '12345678');
    await waitFor(
      () => screen.getByTestId('errorMessage')
    );
    expect(screen.getByTestId('errorMessage')).toHaveTextContent('something happened')
  })
})
