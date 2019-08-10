import React from 'react';
import Tone from 'tone';

var synth = new Tone.Synth().toMaster();

const invokeTone = (tone) => { synth.triggerAttackRelease(tone, "8n") }



const notes = ["C", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "B#"]
const octaves = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
let tones = notes.map(note => octaves.map(octave => `${note}${octave}`))
const tonesTotal = []

octaves.forEach(octave => tones.forEach(noteArr => (tonesTotal.push(noteArr[octave]))))




const App = () => {
	return (
	<>

		{tonesTotal.map((tone) => 
	<button onClick={() => invokeTone(tone)}>{tone}</button>)
		}
	</>
	)
}

export default App;
