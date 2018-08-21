// Wad.js Demo

const app = document.getElementById('app');

const makeButton = sound => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary', 'ml-3');
  button.innerText = `Play ${sound.source}`;
  button.addEventListener('click', () => {
    sound.destination.context.resume();
    sound.play();
  });
  app.appendChild(button);
};

// *******************************************************************
// Simple Wad Constructors with Waveforms

// const sine = new Wad({
//   source: 'sine',
//   callback: makeButton
// });

// const triangle = new Wad({
//   source: 'triangle',
//   callback: makeButton
// });

// const square = new Wad({
//   source: 'square',
//   volume: 0.5,
//   callback: makeButton
// });

// const sawtooth = new Wad({
//   source: 'sawtooth',
//   volume: 0.5,
//   callback: makeButton
// });

// *******************************************************************
// Wad Constructor Detail

// const sound = new Wad({
//   source: 'sawtooth',
//   volume: 0.3,
//   callback: makeButton,
//   pitch: 'D1', // 36.71 Hz
//   env: {
//     attack: 0,
//     decay: 0.2,
//     sustain: 0,
//     hold: 0,
//     release: 0
//   },
//   filter: {
//     type: 'lowpass',
//     frequency: 500,
//     q: 4,
//     env: {
//       frequency: 100,
//       attack: 0.07
//     }
//   },
//   delay: {
//     delayTime: 0.2,
//     wet: 0.5,
//     feedback: 0.4
//   },
//   reverb: {
//     wet: 1,
//     impulse: 'http://localhost:8080/impulses/Large%20Bottle%20Hall.wav'
//   }
//   tuna: {
//     WahWah: {
//       automode: true,
//       baseFrequency: 0.5,
//       excursionOctaves: 2,
//       sweep: 0.2,
//       resonance: 10,
//       sensitivity: 0.5,
//       bypass: 0
//     },
//     Overdrive: {
//       outputGain: 0.5,
//       drive: 0.7,
//       curveAmount: 1,
//       algorithmIndex: 0,
//       bypass: 0
//     }
//   }
// });

// *******************************************************************

// Methods
// synth.play()
// synth.stop()
// synth.setDelay()
// synth.setDetune()
// synth.setPanning()
// synth.setPitch()
// synth.setRate()
// synth.setReverb()
// synth.setVolume()

// *******************************************************************

const makeWad = (detune, pitch) => {
  return new Wad({
    source: 'sawtooth',
    volume: 0.2,
    pitch: pitch,
    env: {
      attack: 0,
      decay: 0.2,
      sustain: 0,
      hold: 0,
      release: 0
    },
    filter: {
      type: 'lowpass',
      frequency: 300,
      q: 7,
      env: {
        frequency: 100,
        attack: 0.07
      }
    },
    delay: {
      delayTime: 0.4,
      wet: 0.1,
      feedback: 0.3
    },
    tuna: {
      Overdrive: {
        outputGain: 0.5,
        drive: 0.5,
        curveAmount: 1,
        algorithmIndex: 0,
        bypass: 0
      }
    },
    detune: detune
  });
};

const makeDetunedWads = (detune, pitch) => {
  const synths = new Wad.Poly();
  synths.source = pitch;
  for (let i = 0; i < 5; i++) {
    const newSynth = makeWad(detune, pitch);
    synths.add(newSynth);
    detune += 10;
    pitch += pitch;
  }
  makeButton(synths);
  return synths;
};

const D = makeDetunedWads(-25, 36.71);
const E = makeDetunedWads(-25, 41.2);
const F = makeDetunedWads(-25, 43.65);
const G = makeDetunedWads(-25, 48.99);
const A = makeDetunedWads(-25, 55);
const Bb = makeDetunedWads(-25, 58.27);
const C = makeDetunedWads(-25, 65.41);
