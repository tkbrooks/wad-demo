import React, { Component } from 'react';
import sliderTypes from './scripts/sliderTypes';

const defaultWidth = '4';

class Slider extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  componentDidMount() {
    const { type } = this.props;
    this.setState({ value: sliderTypes[type].defaultValue });
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    const { type, setValue, width = defaultWidth } = this.props;
    const { name, min, max } = sliderTypes[type];

    const { value } = this.state;
    setValue(value / 100);

    return (
      <div className={`col-${width} mb-3 ${type}`}>
        <label htmlFor={type}>{name}</label>
        <input
          name={type}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Slider;
