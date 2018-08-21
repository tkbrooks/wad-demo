import React, { Component } from 'react';
import Buttons from './Buttons';
import Volume from './Volume';
import Reverb from './Reverb';
import Panning from './Panning';
import Delay from './Delay';

class Sound extends Component {
  constructor() {
    super();
    this.state = {
      sound: {},
      name: ''
    };
  }

  componentDidMount() {
    const { sound } = this.props;
    const sliceIndex = sound.source.lastIndexOf('/') + 1;
    const name = sound.source.slice(sliceIndex);
    this.setState({ sound, name });
  }

  render() {
    const { sound, name } = this.state;

    return (
      <div className="row mt-5">
        <div className="col-8 mb-3">
          <h4>{name}</h4>
        </div>
        <Buttons sound={sound} />
        <Volume sound={sound} />
        <Reverb sound={sound} />
        <Panning sound={sound} />
        <Delay sound={sound} />
      </div>
    );
  }
}

export default Sound;
