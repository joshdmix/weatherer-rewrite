import React from 'react';
import Tone from 'tone';

const synth = new Tone.Synth().toMaster();
const invokeTone = tone => {
  synth.triggerAttackRelease(tone, '8n');
};
const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const octaves = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
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

const styleNat = {backgroundColor: 'white', height: '120px'};
const styleFlat = {backgroundColor: 'black', height: '100px', zIndex: 99};

const App = () => {
  return (
    <>
      {octaveSpliceArr.map(startValue => {
        return [
          <ul style={{listStyle: 'none', height: '120px'}}>
            {octaveSlice(startValue).map(tone => {
              return [
                <li style={{display: 'inline', width: '3px', height: '15px'}}>
                  <button
                    onClick={() => invokeTone(tone)}
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

export default App;
