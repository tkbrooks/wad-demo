import React, { Component } from 'react';

class Reverb extends Component {
  constructor() {
    super();
    this.state = { reverb: 0 };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    const { reverb } = this.state;
    this.props.sound.setReverb(reverb / 100);
  };

  render() {
    return (
      <div className="col-4 mb-3 reverb">
        <label htmlFor="reverb">Reverb Wet</label>
        <input
          name="reverb"
          type="range"
          min="0"
          max="100"
          value={this.state.reverb}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Reverb;
