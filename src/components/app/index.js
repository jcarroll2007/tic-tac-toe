import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../home';
import Game from './../game';

const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/play' component={Game}/>
        </Switch>
    </main>
);

export default App;