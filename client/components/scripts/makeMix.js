import Wad from 'web-audio-daw';

const makeMix = mixSounds => {
  const mix = new Wad.Poly({
    compressor: {
      attack: 0.05, // The amount of time, in seconds, to reduce the gain by 10dB. This parameter ranges from 0 to 1.
      knee: 20, // A decibel value representing the range above the threshold where the curve smoothly transitions to the "ratio" portion. This parameter ranges from 0 to 40.
      ratio: 2, // The amount of dB change in input for a 1 dB change in output. This parameter ranges from 1 to 20.
      release: 0.2, // The amount of time (in seconds) to increase the gain by 10dB. This parameter ranges from 0 to 1.
      threshold: -20 // The decibel value above which the compression will start taking effect. This parameter ranges from -100 to 0.
    }
  });

  mixSounds.forEach(({ name, reverb }) => {
    const wad = new Wad({
      source: `${window.location.href}/sounds/${name}.wav`,
      env: {
        hold: 300
      },
      reverb: {
        wet: 0,
        impulse: `${window.location.href}/impulses/${reverb}.wav`
      },
      delay: {
        delayTime: 0,
        wet: 0,
        feedback: 0
      }
    });

    wad.name = name;

    mix.add(wad);
  });

  return mix;
};

export default makeMix;
