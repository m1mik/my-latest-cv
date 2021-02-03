import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./services/apollo/client";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import { drawTheme } from "./components/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CookiesProvider } from "react-cookie";

const App: React.FC = () => (
  <div className="App">
    <ThemeProvider theme={drawTheme}>
      <ApolloProvider client={client}>
        <CookiesProvider>
          <Router>
            <Switch>
              <Route path="/signup" exact component={Signup} />
              <Route path="/login" exact component={Login} />
              <Route path="/*" component={Home} />
            </Switch>
          </Router>
        </CookiesProvider>
      </ApolloProvider>
    </ThemeProvider>
  </div>
);

export default App;
