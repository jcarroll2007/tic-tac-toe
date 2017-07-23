import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Game from './components/game';

import './index.css';

const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/play' component={Game}/>
        </Switch>
    </main>
);

render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);