import React, {useState} from 'react';
import Tone from 'tone';
import Grid from './grid';

const Keyboard = ({octaveSlice, octaveSpliceArr, noteLength, tonesTotal}) => {

  const styleNat = {backgroundColor: 'white', height: '120px'};
  const styleFlat = {backgroundColor: 'black', height: '100px', zIndex: 99};

  const changeNoteLength = note => {};
  const [oscType, setOscType] = useState('triangle');
  const [modFreq, setModFreq] = useState('0.3');
  const [synthType, setSynthType] = useState('membrane');
  // const changeOsc = oscType => {
  //   oscType === 'pwm' ? setOscType('square') : setOscType('pwm');
  // };
  const synth = new Tone.Synth({
    oscillator: {type: oscType, modulationFrequency: modFreq},
  }).toMaster();

  const membraneSynth = new Tone.MembraneSynth({
    oscillator: {type: oscType, modulationFrequency: modFreq},
  }).toMaster();

  const metalSynth = new Tone.MetalSynth({
    oscillator: {type: oscType, modulationFrequency: modFreq},
  }).toMaster();

  const invokeTone = (tone, noteLength) => {
    synthType === 'membrane'
      ? membraneSynth.triggerAttackRelease(tone, noteLength)
      : synth.triggerAttackRelease(tone, noteLength);
  };

  return (
    <>
      {octaveSpliceArr.map(startValue => {
        return [
          <ul style={{listStyle: 'none', height: '120px'}}>
            {octaveSlice(startValue).map(tone => {
              return [
                <li style={{display: 'inline', width: '3px', height: '15px'}}>
                  <button
                    onClick={() => invokeTone(tone, noteLength)}
                    style={tone.includes('b') ? styleFlat : styleNat}>
                    {tone}
                  </button>
                </li>,
              ];
            })}
          </ul>,
        ];
      })}
    </>
  );
};

const App = () => {
  const notes = [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
  ];
  const octaves = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  const keycodes = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 73];
  let noteLength = '8n';
  let tones = notes.map(note => octaves.map(octave => `${note}${octave}`));
  const tonesTotal = [];
  octaves.forEach(octave =>
    tones.forEach(noteArr => tonesTotal.push(noteArr[octave])),
  );

  const octaveSpliceArr = [0, 12, 24, 36, 48, 60, 72, 90];
  console.log(tonesTotal);
  const octaveSlice = startIndex => {
    return tonesTotal.slice(startIndex, startIndex + 12);
  };
  const [view, setView] = useState('grid');

  const viewSwitch = view => {
    switch (view) {
      case 'keys':
        return <Keyboard tonesTotal={tonesTotal} octaveSpliceArr={octaveSpliceArr} octaveSlice={octaveSlice} noteLength={noteLength} />;
      case 'grid':
        return <Grid tonesTotal={tonesTotal} />;
      case 'info':
        return <div>Info</div>;
      default:
        return <div>Error</div>;
    }
  };

  const handleChangeView = e => setView(e.target.value);

  return (
    <>
      <form>
        <div>
          <label>
		  <input type="radio" value="keys" checked={view === "keys"} onChange={e => handleChangeView(e)} />
            Keys
          </label>
        </div>
        <div>
          <label>
		  <input type="radio" value="grid" checked={view === "grid"}
		  onChange={e => handleChangeView(e)}
		  />
            Grid
          </label>
        </div>
        <div>
          <label>
		  <input type="radio" value="info" checked={view === "info"} 
		  onChange={e => handleChangeView(e)}
		  />
            Info
          </label>
        </div>
      </form>

      {viewSwitch(view)}
    </>
  );
};

export default App;
