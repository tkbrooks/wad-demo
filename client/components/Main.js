import React, { Component } from 'react';
import GlobalControls from './GlobalControls';
import Sound from './Sound';
import makeMix from './scripts/makeMix';

class Main extends Component {
  constructor() {
    super();
    this.state = { mix: { wads: [] } };
  }

  componentDidMount() {
    // http://www.voxengo.com/impulses/
    const mixSounds = [];
    mixSounds.push({ name: 'synth', reverb: 'Musikvereinsaal' });
    mixSounds.push({ name: 'perc', reverb: 'Scala Milan Opera Hall' });
    mixSounds.push({ name: 'bass', reverb: 'Masonic Lodge' });

    const mix = makeMix(mixSounds);
    this.setState({ mix });
  }

  render() {
    const { mix } = this.state;

    return (
      <div className="container mt-3">
        <GlobalControls mix={mix} />
        {mix.wads.map(wad => (
          <Sound key={wad.source} sound={wad} />
        ))}
      </div>
    );
  }
}

export default Main;
