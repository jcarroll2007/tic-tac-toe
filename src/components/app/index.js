import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../home';
import Game from './../game';

class State {
    constructor() {
        this.games = [];
    }

    newGame(player1, player2) {
        const newGame = {
            player1,
            player2,
            moves: []
        }
        this.games.push(newGame);
        this.currentGame = newGame;
    }
}

const state = new State();
const App = () => (
    <main>
        <Switch>
            <Route path='/' render={(props) => (
                <Home {...props} games={state}/>
            )}/>
            <Route path='/play' render={(props) => (
                <Game {...props} games={state}/>
            )}/>
        </Switch>
    </main>
);

export default App;