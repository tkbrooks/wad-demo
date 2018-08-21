import React, { Component, Fragment } from 'react';

class Slider extends Component {
  constructor() {
    super();
    this.state = { volume: 100 };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { volume } = this.state;
    this.props.setValue(volume / 100);

    return (
      <Fragment>
        <label htmlFor="volume">Volume</label>
        <input
          name="volume"
          type="range"
          min="0"
          max="100"
          value={this.state.volume}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

export default Slider;
