import React from "react";
import DM from "../DM";
import Player from "../Player";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div data-testid="App" className="App">
      <Router>
          <Switch>
            <Route path="/player" component={Player} />
            <Route path="/" component={DM} />
          </Switch>
      </Router>
    </div>
  );
};

export default App;
