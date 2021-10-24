
/**
 * Validation for the login form will be here
 */

import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().min(5, 'more please').required()
});
