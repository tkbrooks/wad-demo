import React, { Component, Fragment } from 'react';

class Buttons extends Component {
  playSound = () => {
    this.props.sound.play({ loop: true });
  };

  stopSound = () => {
    this.props.sound.stop();
  };

  render() {
    return (
      <Fragment>
        <div className="col-2 mb-3">
          <button
            className="btn btn-primary float-right"
            name="start"
            type="button"
            onClick={this.playSound}
          >
            Play Sound
          </button>
        </div>
        <div className="col-2 mb-3">
          <button
            className="btn btn-danger float-right"
            name="stop"
            type="button"
            onClick={this.stopSound}
          >
            Stop Sound
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Buttons;
