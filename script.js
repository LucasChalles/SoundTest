let polySynth;
function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playSynth);
  background(805);
  text('Amin', 32.5, 50);

  polySynth = new p5.PolySynth();
}

function playSynth() {
  userStartAudio();

  // note duration (in seconds)
  let dur = 4.0;

  // time from now (in seconds)
  let time = 0;

  // velocity (volume, from 0 to 1)
  let vel = 0.1;

  // notes can overlap with each other
  polySynth.play('A4', vel, 0, dur);
  polySynth.play('C4', vel, time += 1/3, dur);
  polySynth.play('E4', vel, time += 1/3, dur);
}