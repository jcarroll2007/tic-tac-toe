import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../home';
import Game from './../game';

class GameManager {
    constructor() {
        this.games = {};
        this.lastId = 0;
    }

    newGame(player1, player2) {
        const newGameId = this.lastId += 1;
        this.games[newGameId] = {
            id: newGameId,
            player1,
            player2,
            moves: [],
        };
        return this.games[newGameId];
    }

    get(id) {
        return this.games[id];
    }
}

const gameManager = new GameManager();
const App = () => (
    <main>
        <Switch>
            <Route exact path='/' render={(props) => (
                <Home {...props} games={gameManager}/>
            )}/>
            <Route path='/play/:gameId' render={(props) => (
                <Game {...props} games={gameManager}/>
            )}/>
        </Switch>
    </main>
);

export default App;