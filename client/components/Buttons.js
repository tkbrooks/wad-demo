import React, { Component, Fragment } from 'react';

class Buttons extends Component {
  play = () => {
    this.props.sound.play({ loop: true });
  };

  stop = () => {
    this.props.sound.stop();
  };

  render() {
    return (
      <Fragment>
        <div className="col-8 mb-3">
          <h4>{this.props.title}</h4>
        </div>
        <div className="col-2 mb-3">
          <button
            className="btn btn-primary float-right"
            name="start"
            type="button"
            onClick={this.play}
          >
            Play
          </button>
        </div>
        <div className="col-2 mb-3">
          <button
            className="btn btn-danger float-right"
            name="stop"
            type="button"
            onClick={this.stop}
          >
            Stop
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Buttons;
