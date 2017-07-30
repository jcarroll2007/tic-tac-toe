import React from 'react';
import Board from './board';

import GameNotFound from './gameNotFound';

class Game extends React.PureComponent {
    constructor(props) {
        super(props);

        const gameId = this.props.match.params.gameId;
        this.state = {
            game: this.props.games.get(gameId)
        };
    }
    render() {
        return !this.state.game ? <GameNotFound/> : (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;