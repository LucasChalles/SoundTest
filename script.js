let polySynth;
const vel = 0.1;
let synth, soundLoop;

function setup() {
  createCanvas(100, 100);
  background('salmon');
  text('CHORDS', 25, 50);
  userStartAudio();
  synth = new p5.PolySynth();
  
}


function keyPressed() {
  if( key === '1') {
    playInvDMinor(0,2)
  }
  if( key === '2') {
    playAMinor(0,2)
  }
  if( key === '3') {
    playFMajor(0,2)
  }
  if( key === '4') {
    playGMajor(0,2)
  }
  }
   
  //  for( let i = 0; i < 5; i++ ) { // i = i + 1, i += 1
  //     sequence(i*2,2); 


  // let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  // let note = sequence
  // synth.play(note, 0.5, timeFromNow);
  // background(noteIndex * 360 / notePattern.length, 50, 100);
// }

function mousePressed() {
  playSynth();
}

function playSynth() {
  userStartAudio();

//   // note duration (in seconds)
//   let dur = 2.0;

  // time from now (in seconds)
  // let time = 0;

  // notes can overlap with each other
//   playInvDMinor(0.1);
//   playAMinor(2,2);
//   playFMajor(4,2)
//   playGMajor(6,2)

// }

function sequence(startTime, duration) {
  playInvDMinor(0,duration);
  playAMinor(2,duration);
  playFMajor(4,duration)
  playGMajor(6,duration)
}

function playInvDMinor( startTime, duration = 2) {
  polySynth.play('A4', vel, startTime, duration);
  polySynth.play('D4', vel, startTime, duration);
  polySynth.play('F4', vel, startTime, duration); 
}
function playAMinor( startTime, duration = 2 ) {
  polySynth.play('A4', vel, startTime, duration);
  polySynth.play('C4', vel, startTime, duration);
  polySynth.play('E4', vel, startTime, duration);
}
function playFMajor( startTime, duration = 2) {
  polySynth.play('F4', vel, startTime, duration);
  polySynth.play('A4', vel, startTime, duration);
  polySynth.play('C4', vel, startTime, duration);
}
function playGMajor( startTime, duration = 2) {
  polySynth.play('A4', vel, startTime, duration);
  polySynth.play('E4', vel, startTime, duration);
  polySynth.play('G4', vel, startTime, duration);
}