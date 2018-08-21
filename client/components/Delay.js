import React, { Component, Fragment } from 'react';

class Delay extends Component {
  constructor() {
    super();
    this.state = {
      delayTime: 0,
      delayWet: 0,
      delayFeedback: 0
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { delayTime, delayWet, delayFeedback } = this.state;
    this.props.setValue(delayTime / 100, delayWet / 100, delayFeedback / 100);

    return (
      <Fragment>
        <div className="col-4 mb-3 delay">
          <label htmlFor="delayTime">Delay Time</label>
          <input
            name="delayTime"
            type="range"
            min="0"
            max="100"
            value={this.state.delayTime}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-4 mb-3 delay">
          <label htmlFor="delayWet">Delay Wet</label>
          <input
            name="delayWet"
            type="range"
            min="0"
            max="100"
            value={this.state.delayWet}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-4 mb-3 delay">
          <label htmlFor="delayFeedback">Delay Feedback</label>
          <input
            name="delayFeedback"
            type="range"
            min="0"
            max="100"
            value={this.state.delayFeedback}
            onChange={this.handleChange}
          />
        </div>
      </Fragment>
    );
  }
}

export default Delay;
