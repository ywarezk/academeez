import { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Alert
} from '@mui/material';
import styles from './Login.module.scss';
import { useFormik } from 'formik';
import { loginSchema } from './login.validation';
import { userService } from './user.service';

export const Login = () => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('')

  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        const user = await userService.login(values);
        setUser(user);
        setErrorMessage('');
      } catch (err) {
        debugger;
        setErrorMessage(err.message);
        setUser(null);
      }
    }
  })

  return (
    <Card className={styles.card}>
      <CardHeader title="Login" className={styles.header} />
      <form noValidate onSubmit={formik.handleSubmit}>
        <CardContent>
          <div className={styles.textFieldWrapper}>
            <TextField
              data-testid="emailInput"
              className={styles.textField}
              type="email"
              name="email"
              placeholder="johndoe@ncr.com" label="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className={styles.textFieldWrapper}>
            <TextField
              data-testid="passwordInput"
              className={styles.textField}
              type="password"
              name="password"
              placeholder="******"
              label="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
        </CardContent>
        <CardActions className={styles.actions}>
          <Button
            data-testid="submitButton"
            color="primary"
            variant="contained"
            type="submit"
          >Login</Button>
        </CardActions>
        {
          user && (
            <Alert severity="success" data-testid="successMessage">
              Hello {user.firstName} {user.lastName}
            </Alert>
          )
        }
        {
          errorMessage && (
            <Alert severity="error" data-testid="errorMessage">
              {errorMessage}
            </Alert>
          )
        }
      </form>
    </Card>
  )
}
