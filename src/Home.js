import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Submit from './Submit';

const Home = () => {
  return (
    <div>
      <Router>
      
        <Switch>
          
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/submit" exact>
            <Submit />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
