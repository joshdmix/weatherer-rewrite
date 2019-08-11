import React from 'react';
import Tone from 'tone';

const synth = new Tone.Synth().toMaster();
const invokeTone = (tone) => { synth.triggerAttackRelease(tone, "8n") }
const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
const octaves = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
let tones = notes.map(note => octaves.map(octave => `${note}${octave}`))
const tonesTotal = []
octaves.forEach(octave => tones.forEach(noteArr => (tonesTotal.push(noteArr[octave]))))
const octaveSpliceArr = [0, 12, 24, 36, 48, 60, 72, 90]
const octaveSplice = (startIndex) => tonesTotal.splice(startIndex, startIndex + 12)







const App = () => {
	return (
					<>
									{
													octaveSpliceArr.map(startValue => {
				<ul>
								{
												octaveSplice(startValue).map(tone =>
																{
																				<li>
																								<button>{tone}</button>
																				</li>
																}
								)}
				</ul>
									})
													}

	</>
	)
}

export default App;
