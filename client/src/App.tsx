import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CV from "./components/CV";
import Home from "./components/Home";
import Signup from "./components/Signup";
import "./App.css";
import { themeProviderObject } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CookiesProvider } from "react-cookie";
import axios from "./services/axiosClient";

const App: React.FC = () => {
  // useEffect(() => {
  //   axios.get("/user/whoami");
  // }, []);

  return (
    <div className="App">
      <ThemeProvider theme={themeProviderObject}>
        <CookiesProvider>
          <Router>
            <Switch>
              <Route path="/todos" render={() => <div>todos</div>} />
              <Route path="/cv" component={CV} />
              <Route path="/signup" component={Signup} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </CookiesProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
