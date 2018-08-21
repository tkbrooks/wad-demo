import React from 'react';
import Buttons from './Buttons';
import Volume from './Volume';
import Reverb from './Reverb';
import Panning from './Panning';
import Delay from './Delay';

const Sound = ({ name, wad }) => (
  <div className="row mt-5">
    <div className="col-8 mb-3">
      <h4>{name}</h4>
    </div>
    <Buttons sound={wad} />
    <div className="col-4 mb-3">
      <Volume setValue={(...args) => wad.setVolume(...args)} />
    </div>
    <div className="col-4 mb-3 reverb">
      <Reverb setValue={(...args) => wad.setReverb(...args)} />
    </div>
    <div className="col-4 mb-3 panning">
      <Panning setValue={(...args) => wad.setPanning(...args)} />
    </div>
    <Delay setValue={(...args) => wad.setDelay(...args)} />
  </div>
);

export default Sound;
