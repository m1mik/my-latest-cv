import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import axios from "../../services/axiosClient";
import styles from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { whoami } from "../../store/actions/user";
const useStyles = makeStyles(styles);

const Home = () => {
  const [cookie] = useCookies();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    if (cookie.jwt)
      axios
        .get("/user/whoami", {
          headers: {
            Authorization: `Bearer ${cookie.jwt}`,
          },
        })
        .then((response) => dispatch(whoami(response.data)));
  }, []);

  return (
    <div className="home">
      <div className={classes.center}>
        {cookie.jwt ? (
          !user.id ? (
            <CircularProgress />
          ) : (
            <>
              <div>
                <Link to="/todos">
                  <div className="card">Todos</div>
                </Link>
              </div>
              <div>
                <Link to="/cv">
                  <div className="card">CV</div>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <div className="card">Nowhere</div>
                </Link>
              </div>
            </>
          )
        ) : (
          <>
            <Link to="/signup">
              <div className={classes.card}>
                <div className="card">Signup</div>
              </div>
            </Link>
            <Link to="/login">
              <div className={classes.card}>
                <div className="card">Login</div>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
