import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DisplayPage from './pages/DisplayPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/display" component={DisplayPage} />
      </Switch>
    </Router>
  );
};

export default App;
