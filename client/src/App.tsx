import * as React from "react";
import "./App.css";
import CV from "./components/CV";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App: React.FC = () => {
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
