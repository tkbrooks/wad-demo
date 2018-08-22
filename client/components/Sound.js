import React from 'react';
import Buttons from './Buttons';
import Slider from './Slider';
import Delay from './Delay';

const Sound = ({ name, wad }) => (
  <div className="row mt-5">
    <Buttons title={name} sound={wad} />
    <Slider type="volume" setValue={value => wad.setVolume(value)} />
    <Slider type="reverb" setValue={value => wad.setReverb(value)} />
    <Slider type="panning" setValue={value => wad.setPanning(value)} />
    {/* State management issue with setDelay so it gets its own component - will fix later */}
    <Delay setValue={(...args) => wad.setDelay(...args)} />
  </div>
);

export default Sound;
