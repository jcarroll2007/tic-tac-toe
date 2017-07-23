import React from 'react';

class Home extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }

    handlePlay() {

        // TODO: It's probably not ideal that a component
        // at this level knows about routing?
        console.log(this.props);
        // this.props.history.push('/play');
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
                <input placeholder="Player 1"/>
                <input placeholder="Player 2"/>
                <button onClick={() => this.handlePlay()}>
                    PLAY
                </button>
            </div>
        );
    }
}

export default Home;