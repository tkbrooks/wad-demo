import React from 'react';
import Buttons from './Buttons';
import Slider from './Slider';
import Delay from './Delay';

const Sound = ({ name, wad }) => (
  <div className="row mt-5">
    <div className="col-8 mb-3">
      <h4>{name}</h4>
    </div>
    <Buttons sound={wad} />
    <div className="col-4 mb-3">
      <Slider
        name="volume"
        min="0"
        max="100"
        defaultValue="100"
        setValue={(...args) => wad.setVolume(...args)}
      />
    </div>
    <div className="col-4 mb-3 reverb">
      <Slider
        name="reverb"
        min="0"
        max="100"
        defaultValue="0"
        setValue={(...args) => wad.setReverb(...args)}
      />
    </div>
    <div className="col-4 mb-3 panning">
      <Slider
        name="panning"
        min="-100"
        max="100"
        defaultValue="0"
        setValue={(...args) => wad.setPanning(...args)}
      />
    </div>
    <Delay setValue={(...args) => wad.setDelay(...args)} />
  </div>
);

export default Sound;
