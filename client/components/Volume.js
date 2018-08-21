import React, { Component } from 'react';

class Volume extends Component {
  constructor() {
    super();
    this.state = { volume: 100 };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    const { volume } = this.state;
    this.props.sound.setVolume(volume / 100);
  };

  render() {
    return (
      <div className="col-4 mb-3">
        <label htmlFor="volume">Volume</label>
        <input
          name="volume"
          type="range"
          min="0"
          max="100"
          value={this.state.volume}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Volume;
