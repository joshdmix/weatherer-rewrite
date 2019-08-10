import React from 'react';
import Tone from 'tone';

const synth = new Tone.Synth().toMaster();
const invokeTone = (tone) => { synth.triggerAttackRelease(tone, "8n") }
const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
const octaves = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
let tones = notes.map(note => octaves.map(octave => `${note}${octave}`))
const tonesTotal = []
octaves.forEach(octave => tones.forEach(noteArr => (tonesTotal.push(noteArr[octave]))))
let color = "white"

const App = () => {
	return (
	<>
    <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
									{tonesTotal.map(tone =>
													<li style={{ float: "left"}}>
																				 <button
																								 style={{backgroundColor: tone.includes("b") ? "black": "white"}}
																								 onClick={() => invokeTone(tone)}>{tone}
																				 </button>
																 </li>
								  )}
     </ul>
	</>
	)
}

export default App;
