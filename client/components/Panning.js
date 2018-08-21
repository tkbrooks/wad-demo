import React, { Component, Fragment } from 'react';

class Panning extends Component {
  constructor() {
    super();
    this.state = { panning: 0 };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { panning } = this.state;
    this.props.setValue(panning / 100);

    return (
      <Fragment>
        <label htmlFor="panning">Panning</label>
        <input
          name="panning"
          type="range"
          min="-100"
          max="100"
          value={this.state.panning}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

export default Panning;
