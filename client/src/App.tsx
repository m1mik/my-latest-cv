import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CV from "./components/CV";
import Home from "./components/Home";
import "./App.css";
import axios from "./services/axiosClient";

const App: React.FC = () => {
  useEffect(() => {
    axios.get("/user/whoami");
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/todos" render={() => <div>todos</div>} />
          <Route path="/cv" component={CV} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
