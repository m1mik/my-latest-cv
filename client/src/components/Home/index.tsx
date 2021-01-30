import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core";
import axios from "../../services/axiosClient";
import styles from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { whoami, nullifyUser } from "../../store/actions/user";
const useStyles = makeStyles(styles);

const Home = () => {
  const [cookie, , removeCookie] = useCookies();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    if (cookie.jwt && !user.id)
      axios
        .get("/user/whoami", {
          headers: {
            Authorization: `Bearer ${cookie.jwt}`,
          },
        })
        .then((response) => dispatch(whoami(response.data)));
  }, [cookie, user, dispatch]);

  const logout = useCallback(() => {
    removeCookie("jwt");
    dispatch(nullifyUser());
  }, [removeCookie, dispatch]);

  return (
    <div className={classes.home}>
      {user.id ? (
        <AppBar position="static">
          <Toolbar className={classes.homeToolbar}>
            <Button variant="outlined" color="secondary" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      ) : null}
      <div className={classes.center}>
        {user.id ? (
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
