import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import { drawTheme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CookiesProvider } from "react-cookie";

const App: React.FC = () => (
  <div className="App">
    <ThemeProvider theme={drawTheme}>
      <CookiesProvider>
        <Router>
          <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/*" component={Home} />
          </Switch>
        </Router>
      </CookiesProvider>
    </ThemeProvider>
  </div>
);

export default App;
