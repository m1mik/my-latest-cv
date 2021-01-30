import React from "react";
import { useFormik, FormikValues } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Send from "@material-ui/core/Icon";
import { emailRegExp } from "../../services/constants";
import { whoami } from "../../store/actions/user";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import axios from "../../services/axiosClient";

const useStyles = makeStyles(styles);

const validateSignUpForm = (values: FormikValues) => {
  const errors: any = {};

  if (!values.name) errors.name = "Required!";

  if (!emailRegExp.test(values.email))
    errors.email = "Email format is invalid!";

  if (!values.password.length) errors.password = "Required!";
  else if (values.password.length <= 3) errors.password = "Password too short!";

  return errors;
};

const Signup = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: validateSignUpForm,
    onSubmit: (values) => {
      const { name, email, password } = values;
      axios
        .post("/user/signup", {
          name,
          email,
          password,
        })
        .then((response) => {
          dispatch(whoami(response.data));
          history.push("/");
        });
    },
  });

  return (
    <div className={classes.cardMain}>
      <Button
        style={{ display: "inline-block", width: "100%" }}
        variant="contained"
        onClick={() => history.push("/")}
      >
        Back home
      </Button>
      <form className={classes.SignupForm} onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            required
            name="name"
            label="User name"
            placeholder="user name"
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div>
          <TextField
            required
            name="email"
            label="email"
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
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
