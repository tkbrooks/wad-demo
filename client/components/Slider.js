import React, { Component, Fragment } from 'react';

class Slider extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  componentDidMount() {
    const { defaultValue } = this.props;
    this.setState({ value: defaultValue });
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    const { name, min, max } = this.props;
    const { value } = this.state;
    this.props.setValue(value / 100);

    return (
      <Fragment>
        <label htmlFor={name}>{name.toUpperCase()}</label>
        <input
          name={name}
          type="range"
          min={min}
          max={max}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

export default Slider;
