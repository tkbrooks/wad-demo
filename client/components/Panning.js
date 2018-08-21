import React, { Component } from 'react';

class Panning extends Component {
  constructor() {
    super();
    this.state = { panning: 0 };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    const { panning } = this.state;
    const transitionTime = 0.2;
    this.props.sound.setPanning(panning / 100, transitionTime);
  };

  render() {
    return (
      <div className="col-4 mb-3 panning">
        <label htmlFor="panning">Panning</label>
        <input
          name="panning"
          type="range"
          min="-100"
          max="100"
          value={this.state.panning}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Panning;
