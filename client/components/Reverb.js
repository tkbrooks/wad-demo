import React, { Component, Fragment } from 'react';

class Reverb extends Component {
  constructor() {
    super();
    this.state = { reverb: 0 };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { reverb } = this.state;
    this.props.setValue(reverb / 100);

    return (
      <Fragment>
        <label htmlFor="reverb">Reverb Wet</label>
        <input
          name="reverb"
          type="range"
          min="0"
          max="100"
          value={this.state.reverb}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

export default Reverb;
