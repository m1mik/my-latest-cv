import React from "react";
import { useFormik, FormikValues } from "formik";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Send from "@material-ui/core/Icon";
import { emailRegExp } from "../../services/constants";
import { makeStyles } from "@material-ui/core";
import axios from "../../services/axiosClient";
import styles from "./styles";

const useStyles = makeStyles(styles);

const validate = (values: FormikValues) => {
  const errors: any = {};

  if (!emailRegExp.test(values.email))
    errors.email = "Email format is invalid!";

  if (!values.password.length) errors.password = "Required!";
  else if (values.password.length <= 3) errors.password = "Password too short!";

  return errors;
};

const Login = () => {
  const history = useHistory();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const { email, password } = values;
      axios.post("/user/login", {
        email,
        password,
      });
    },
  });

  return (
    <div className={classes.cardMain}>
      <Button
        style={{ display: "inline-block", width: "100%" }}
        variant="contained"
        onClick={() => history.goBack()}
      >
        Back home
      </Button>
      <form className={classes.SignupForm} onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            required
            name="email"
            label="Email"
            placeholder="email"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div>
          <TextField
            required
            name="password"
            label="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div>
          <Button variant="contained" type="submit" endIcon={<Send />}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
