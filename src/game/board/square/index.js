import React from 'react';

import './index.css';

class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }

  toggleValue() {
    let value;
    value = this.state.value ? null : 'X';
    this.setState({value});
  }

  render() {
    return (
      <button className="square" onClick={() => this.toggleValue()}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;