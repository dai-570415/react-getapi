import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Index';
import Aside from './components/elements/Aside';
import JapanNews from './components/News/Japan';
import Anime from './components/News/Anime';
import HyogoTake from './components/Gourmet/HyogoTake';
import './assets/css/App.css';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Aside />
        <main>
          <Switch>
            <Route exact path="/" component={ Dashboard } />
            <Route exact path="/japan_news" component={ JapanNews } />
            <Route exact path="/anime_news" component={ Anime } />
            <Route exact path="/hyogo_take" component={ HyogoTake } />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
