import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import axios from "../../services/axiosClient";
import TabPanel from "./deps/TabPanel";
import styles from "./styles";
import { whoami, nullifyUser } from "../../store/actions/user";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import InputIcon from "@material-ui/icons/Input";

const useStyles = makeStyles(styles);

const Home = () => {
  const [cookie, , removeCookie] = useCookies();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [tab, setTab] = useState<number>(1);

  const changeTab = (event: React.ChangeEvent<any>, newValue: number) => {
    setTab(newValue);
  };

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
        <>
          <AppBar position="static">
            <Toolbar className={classes.homeToolbar}>
              <Button variant="outlined" color="secondary" onClick={logout}>
                Logout
              </Button>
            </Toolbar>
            <Tabs
              classes={{ root: classes.homeTabsRoot }}
              value={tab}
              onChange={changeTab}
            >
              <Tab value={1} label="Todos" />
              <Tab value={2} label="CV" />
            </Tabs>
          </AppBar>
          <TabPanel value={tab} index={1}>
            <div>Todos</div>
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <div>CV</div>
          </TabPanel>
        </>
      ) : (
        <div className={classes.center}>
          <Link className={classes.link} to="/signup">
            <div className={classes.card}>
              <div className="card">
                <div>Signup</div>
                <div className={classes.iconCentralizer}>
                  <HowToRegIcon className={classes.icon} />
                </div>
              </div>
            </div>
          </Link>
          <Link className={classes.link} to="/login">
            <div className={classes.card}>
              <div className="card">
                <div>Login</div>
                <div className={classes.iconCentralizer}>
                  <InputIcon className={classes.icon} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
