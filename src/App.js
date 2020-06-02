import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/elements/header';
import NewsIndex from './components/News/Index';
import GourmetIndex from './components/Gourmet/Index';
import './assets/css/App.css';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/news" component={ NewsIndex } />
            <Route exact path="/gourmet" component={ GourmetIndex } />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
