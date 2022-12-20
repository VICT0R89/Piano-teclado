const buttons = document.getElementById('button-container');

let W_Buttons =[ 
  {
    name : "w-button C0",
    i : 0,
  },
  {
    name : "w-button D0",
    i : 1,
  },
  {
    name : "w-button E0",
    i : 2,
  },
  {
    name : "w-button F0",
    i : 3,
  },
  {
    name : "w-button G0",
    i : 4,
  },
  {
    name : "w-button A0",
    i : 5,
  },
  {
    name : "w-button B0",
    i : 6,
  },
  {
    name : "w-button C1",
    i : 7,
  },
  {
    name : "w-button D1",
    i : 8,
  },
  {
    name : "w-button E1",
    i : 9,
  },
  {
    name : "w-button F1",
    i : 10,
  },
  {
    name : "w-button G1",
    i : 11,
  },
  {
    name : "w-button A1",
    i : 12,
  },
  {
    name : "w-button B1",
    i : 13,
  },
  {
    name : "w-button C2",
    i : 14,
  },
  {
    name : "w-button D2",
    i : 15,
  },
  {
    name : "w-button E2",
    i : 16,
  },
  {
    name : "w-button F2",
    i : 17,
  },
  {
    name : "w-button G2",
    i : 18,
  },
  {
    name : "w-button A2",
    i : 19,
  },
  {
    name : "w-button B2",
    i : 20,
  },
  {
    name : "b-button C#0",
    i : 21,
    pos : 55,
  },
  {
    name : "b-button D#0",
    i : 22,
    pos : 85,
  },
  {
    name : "b-button F#0",
    i : 23,
    pos : 145,
  },
  {
    name : "b-button G#0",
    i : 24,
    pos : 175,
  },
  {
    name : "b-button A#0",
    i : 25,
    pos : 205,
  },
  {
    name : "b-button C#1",
    i : 26,
    pos : 265,
  },
  {
    name : "b-button D#1",
    i : 27,
    pos : 295,
  },
  {
    name : "b-button F#1",
    i : 28,
    pos : 355,
  },
  {
    name : "b-button G#1",
    i : 29,
    pos : 385,
  },
  {
    name : "b-button A#1",
    i : 30,
    pos : 415,
  },
  {
    name : "b-button C#2",
    i : 31,
    pos : 475,
  },
  {
    name : "b-button D#2",
    i : 32,
    pos : 505,
  },
  {
    name : "b-button F#2",
    i : 33,
    pos : 565,
  },
  {
    name : "b-button G#2",
    i : 34,
    pos : 595,
  },
  {
    name : "b-button A#2",
    i : 35,
    pos : 625,
  },
]

const srcArr = [
  "sounds/C0.mp3",
  "sounds/D0.mp3",
  "sounds/E0.mp3",
  "sounds/F0.mp3",
  "sounds/G0.mp3",
  "sounds/A0.mp3",
  "sounds/B0.mp3",
  "sounds/C1.mp3",
  "sounds/D1.mp3",
  "sounds/E1.mp3",
  "sounds/F1.mp3",
  "sounds/G1.mp3",
  "sounds/A1.mp3",
  "sounds/B1.mp3",
  "sounds/C2.mp3",
  "sounds/D2.mp3",
  "sounds/E2.mp3",
  "sounds/F2.mp3",
  "sounds/G2.mp3",
  "sounds/A2.mp3",
  "sounds/B2.mp3",
  "sounds/CC0.mp3",
  "sounds/DD0.mp3",
  "sounds/FF0.mp3",
  "sounds/GG0.mp3",
  "sounds/AA0.mp3",
  "sounds/CC1.mp3",
  "sounds/DD1.mp3",
  "sounds/FF1.mp3",
  "sounds/GG1.mp3",
  "sounds/AA1.mp3",
  "sounds/CC2.mp3",
  "sounds/DD2.mp3",
  "sounds/FF2.mp3",
  "sounds/GG2.mp3",
  "sounds/AA2.mp3"
]
const audios = []

function createAudioSrc(){
  for(let i = 0; i < srcArr.length; i++)
  {
    audios.push(new Audio(srcArr[i]  
      ));}
    }
createAudioSrc();

let createWButtons = () => {
  return (buttons.innerHTML = (W_Buttons.map((x)=>{
    return `
    <input type="button" id="${(x.i)}" class="${(x.name)}" style="left:${(x.pos)}px" onclick="play(${(x.i)})">
    `
  }).join("")));
}
  createWButtons();

function play(i) {
  /* audios[i].playbackRate = 0.5; */
  audios[i].play();
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'a') {
    let inp = document.getElementById('0');
    inp.classList.add("active");
    audios[0].play();
  }
  if (event.key === 's') {
    let inp = document.getElementById('1');
    inp.classList.add("active");
    audios[1].play();
  }
  if (event.key === 'd') {
    let inp = document.getElementById('2');
    inp.classList.add("active");
    audios[2].play();
  }
  if (event.key === 'f') {
    let inp = document.getElementById('3');
    inp.classList.add("active");
    audios[3].play();
  }
  if (event.key === 'g') {
    let inp = document.getElementById('4');
    inp.classList.add("active");
    audios[4].play();
  }
  if (event.key === 'h') {
    let inp = document.getElementById('5');
    inp.classList.add("active");
    audios[5].play();
  }
  if (event.key === 'j') {
    let inp = document.getElementById('6');
    inp.classList.add("active");
    audios[6].play();
  }
  if (event.key === 'k') {
    let inp = document.getElementById('7');
    inp.classList.add("active");
    audios[7].play();
  }
  if (event.key === 'l') {
    let inp = document.getElementById('8');
    inp.classList.add("active");
    audios[8].play();
  }
  if (event.key === '1') {
    let inp = document.getElementById('9');
    inp.classList.add("active");
    audios[9].play();
  }
  if (event.key === '2') {
    let inp = document.getElementById('10');
    inp.classList.add("active");
    audios[10].play();
  }
  if (event.key === '3') {
    let inp = document.getElementById('11');
    inp.classList.add("active");
    audios[11].play();
  }
  if (event.key === '4') {
    let inp = document.getElementById('12');
    inp.classList.add("active");
    audios[12].play();
  }
  if (event.key === '5') {
    let inp = document.getElementById('13');
    inp.classList.add("active");
    audios[13].play();
  }
  if (event.key === '6') {
    let inp = document.getElementById('14');
    inp.classList.add("active");
    audios[14].play();
  }
  if (event.key === '7') {
    let inp = document.getElementById('15');
    inp.classList.add("active");
    audios[15].play();
  }
  if (event.key === '8') {
    let inp = document.getElementById('16');
    inp.classList.add("active");
    audios[16].play();
  }
  if (event.key === '9') {
    let inp = document.getElementById('17');
    inp.classList.add("active");
    audios[17].play();
  }
  if (event.key === '0') {
    let inp = document.getElementById('18');
    inp.classList.add("active");
    audios[18].play();
  }
  if (event.key === '/') {
    let inp = document.getElementById('19');
    inp.classList.add("active");
    audios[19].play();
  }
  if (event.key === '*') {
    let inp = document.getElementById('20');
    inp.classList.add("active");
    audios[20].play();
  }
  if (event.key === 'q') {
    let inp = document.getElementById('21');
    inp.classList.add("active");
    audios[21].play();
  }
  if (event.key === 'w') {
    let inp = document.getElementById('22');
    inp.classList.add("active");
    audios[22].play();
  }
  if (event.key === 'e') {
    let inp = document.getElementById('23');
    inp.classList.add("active");
    audios[23].play();
  }
  if (event.key === 'r') {
    let inp = document.getElementById('24');
    inp.classList.add("active");
    audios[24].play();
  }
  if (event.key === 't') {
    let inp = document.getElementById('25');
    inp.classList.add("active");
    audios[25].play();
  }
  if (event.key === 'y') {
    let inp = document.getElementById('26');
    inp.classList.add("active");
    audios[26].play();
  }
  if (event.key === 'u') {
    let inp = document.getElementById('27');
    inp.classList.add("active");
    audios[27].play();
  }
  if (event.key === 'i') {
    let inp = document.getElementById('28');
    inp.classList.add("active");
    audios[28].play();
  }
  if (event.key === 'o') {
    let inp = document.getElementById('29');
    inp.classList.add("active");
    audios[29].play();
  }
  if (event.key === 'p') {
    let inp = document.getElementById('30');
    inp.classList.add("active");
    audios[30].play();
  }
  if (event.key === 'z') {
    let inp = document.getElementById('31');
    inp.classList.add("active");
    audios[31].play();
  }
  if (event.key === 'x') {
    let inp = document.getElementById('32');
    inp.classList.add("active");
    audios[32].play();
  }
  if (event.key === 'c') {
    let inp = document.getElementById('33');
    inp.classList.add("active");
    audios[33].play();
  }
  if (event.key === 'v') {
    let inp = document.getElementById('34');
    inp.classList.add("active");
    audios[34].play();
  }
  if (event.key === 'b') {
    let inp = document.getElementById('35');
    inp.classList.add("active");
    audios[35].play();
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'a') {
    let inp = document.getElementById('0');
    inp.classList.remove("active");
  }
  if (event.key === 's') {
    let inp = document.getElementById('1');
    inp.classList.remove("active");
  }
  if (event.key === 'd') {
    let inp = document.getElementById('2');
    inp.classList.remove("active");
  }
  if (event.key === 'f') {
    let inp = document.getElementById('3');
    inp.classList.remove("active");
  }
  if (event.key === 'g') {
    let inp = document.getElementById('4');
    inp.classList.remove("active");
  }
  if (event.key === 'h') {
    let inp = document.getElementById('5');
    inp.classList.remove("active");
  }
  if (event.key === 'j') {
    let inp = document.getElementById('6');
    inp.classList.remove("active");
  }
  if (event.key === 'k') {
    let inp = document.getElementById('7');
    inp.classList.remove("active");
  }
  if (event.key === 'l') {
    let inp = document.getElementById('8');
    inp.classList.remove("active");
  }
  if (event.key === '1') {
    let inp = document.getElementById('9');
    inp.classList.remove("active");
  }
  if (event.key === '2') {
    let inp = document.getElementById('10');
    inp.classList.remove("active");
  }
  if (event.key === '3') {
    let inp = document.getElementById('11');
    inp.classList.remove("active");
  }
  if (event.key === '4') {
    let inp = document.getElementById('12');
    inp.classList.remove("active");
  }
  if (event.key === '5') {
    let inp = document.getElementById('13');
    inp.classList.remove("active");
  }
  if (event.key === '6') {
    let inp = document.getElementById('14');
    inp.classList.remove("active");
  }
  if (event.key === '7') {
    let inp = document.getElementById('15');
    inp.classList.remove("active");
  }
  if (event.key === '8') {
    let inp = document.getElementById('16');
    inp.classList.remove("active");
  }
  if (event.key === '9') {
    let inp = document.getElementById('17');
    inp.classList.remove("active");
  }
  if (event.key === '0') {
    let inp = document.getElementById('18');
    inp.classList.remove("active");
  }
  if (event.key === '/') {
    let inp = document.getElementById('19');
    inp.classList.remove("active");
  }
  if (event.key === '*') {
    let inp = document.getElementById('20');
    inp.classList.remove("active");
  }
  if (event.key === 'q') {
    let inp = document.getElementById('21');
    inp.classList.remove("active");
  }
  if (event.key === 'w') {
    let inp = document.getElementById('22');
    inp.classList.remove("active");
  }
  if (event.key === 'e') {
    let inp = document.getElementById('23');
    inp.classList.remove("active");
  }
  if (event.key === 'r') {
    let inp = document.getElementById('24');
    inp.classList.remove("active");
  }
  if (event.key === 't') {
    let inp = document.getElementById('25');
    inp.classList.remove("active");
  }
  if (event.key === 'y') {
    let inp = document.getElementById('26');
    inp.classList.remove("active");
  }
  if (event.key === 'u') {
    let inp = document.getElementById('27');
    inp.classList.remove("active");
  }
  if (event.key === 'i') {
    let inp = document.getElementById('28');
    inp.classList.remove("active");
  }
  if (event.key === 'o') {
    let inp = document.getElementById('29');
    inp.classList.remove("active");
  }
  if (event.key === 'p') {
    let inp = document.getElementById('30');
    inp.classList.remove("active");
  }
  if (event.key === 'z') {
    let inp = document.getElementById('31');
    inp.classList.remove("active");
  }
  if (event.key === 'x') {
    let inp = document.getElementById('32');
    inp.classList.remove("active");
  }
  if (event.key === 'c') {
    let inp = document.getElementById('33');
    inp.classList.remove("active");
  }
  if (event.key === 'v') {
    let inp = document.getElementById('34');
    inp.classList.remove("active");
  }
  if (event.key === 'b') {
    let inp = document.getElementById('35');
    inp.classList.remove("active");
  }
});
