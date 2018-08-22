import React from 'react';
import Buttons from './Buttons';
import Slider from './Slider';

const GlobalControls = ({ mix }) => (
  <div id="controls" className="row pt-3">
    <Buttons title="Global Controls" sound={mix} />
    <Slider type="volume" width="12" setValue={value => mix.setVolume(value)} />
  </div>
);

export default GlobalControls;
