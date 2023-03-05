// Tone.debug = true;


document.getElementById("play-button").addEventListener("click", function() {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    synth.triggerAttackRelease("G4", "8n", now)
    synth.triggerAttackRelease("E4", "8n", now + 0.25)
    synth.triggerAttackRelease("G4", "8n", now + 0.5)
    synth.triggerAttackRelease("E4", "8n", now + 0.75)
    synth.triggerAttackRelease("C4", "8n", now + 1) 
});