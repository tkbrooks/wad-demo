// let synth;
const synth = new Tone.Synth().toMaster();

const app = document.getElementById('app');

const button = document.createElement('button');
button.classList.add('btn', 'btn-primary', 'ml-3');
button.innerText = `Resume Synth`;
button.addEventListener('click', () => {
  synth.resume();
  synth.triggerAttackRelease('C4', '8n');
});

app.appendChild(button);

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease('C4', '8n');
