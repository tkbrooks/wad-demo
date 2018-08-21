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
    const url = window.location.href;
    // http://www.voxengo.com/impulses/
    const mixSounds = [];
    mixSounds.push({ name: 'synth', reverb: 'Musikvereinsaal' });
    mixSounds.push({ name: 'perc', reverb: 'Scala Milan Opera Hall' });
    mixSounds.push({ name: 'bass', reverb: 'Masonic Lodge' });

    const mix = makeMix(mixSounds, url);
    this.setState({ mix });
  }

  render() {
    const { mix } = this.state;

    return mix.wads.length ? (
      <div className="container mt-3">
        <GlobalControls mix={mix} />
        {mix.wads.map(wad => {
          const sliceIndex = wad.source.lastIndexOf('/') + 1;
          const name = wad.source.slice(sliceIndex);
          return <Sound key={name} name={name} wad={wad} />;
        })}
      </div>
    ) : (
      <div>LOADING...</div>
    );
  }
}

export default Main;
