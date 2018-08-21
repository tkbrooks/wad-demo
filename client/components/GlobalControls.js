import React, { Component } from 'react';

class GlobalControls extends Component {
  constructor() {
    super();
    this.state = { volume: 100 };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    if (event.target.name === 'volume') {
      const volume = this.state.volume / 100;
      this.props.mix.setVolume(volume);
    }
  };

  playMix = () => {
    this.props.mix.play({ loop: true });
  };

  stopMix = () => {
    this.props.mix.stop();
  };

  render() {
    return (
      <div id="controls" className="row">
        <div className="col-12">
          <h4>Global Controls</h4>
        </div>
        <div className="col-12">
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
        <div className="col-6 mt-4">
          <button
            className="btn btn-primary float-right"
            name="play"
            type="button"
            onClick={this.playMix}
          >
            Play Mix
          </button>
        </div>
        <div className="col-6 mt-4">
          <button
            className="btn btn-danger"
            name="stop"
            type="button"
            onClick={this.stopMix}
          >
            Stop Mix
          </button>
        </div>
      </div>
    );
  }
}

export default GlobalControls;
