import React, { Component } from 'react';
import Volume from './Volume';

class GlobalControls extends Component {
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
          <Volume setValue={(...args) => this.props.mix.setVolume(...args)} />
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
