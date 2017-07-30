import React from 'react';

class Home extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            player1Name: '',
            player2Name: '',
        };
    }

    handlePlayerNameChange(event, player) {
        this.setState({ [player]: event.target.value });
    }

    handlePlay() {

        // TODO: It's probably not ideal that a component
        // at this level knows about routing?
        const newGame = this.props.games.newGame(
            this.state.player1Name, this.state.player2Name);
        this.props.history.push(`/play/${newGame.id}`);
    }

    render() {
        return (
            <div>
                <h1>
                    reTic react reToe
                </h1>
                <p>
                    Who will be playing?
                </p>
                <input placeholder="Player 1" value={this.state.player1Name}
                    onChange={(e) => this.handlePlayerNameChange(e, 'player1Name')}/>
                <input placeholder="Player 2" value={this.state.player2Name}
                    onChange={(e) => this.handlePlayerNameChange(e, 'player2Name')}/>
                <button onClick={() => this.handlePlay()}>
                    PLAY
                </button>
            </div>
        );
    }
}

export default Home;