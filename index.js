const buttons = document.getElementById('button-container');
const audios = [];

function createAudioSrc(){
  srcArr.forEach((sound)=>{
    audios.push(new Audio(sound))
  })
};
createAudioSrc();
let createWButtons = () => {
  return (buttons.innerHTML = (W_Buttons.map((x)=>{
    let { i, name, pos, nameText } = x;
    return `
    <button type="button" id="${(i)}" class="${(name)}" style="left:${(pos)}px" onclick="play(${(i)})">${nameText}</button>
    `
  }).join("")));
};
  createWButtons();

const btns = document.querySelectorAll('button')
document.addEventListener('keydown', e =>{
  let pressBtn = e.key
btns.forEach((btn, i)=>{
  let btnKey = btn.innerText
  if (btnKey == pressBtn.toUpperCase()){
    let btn = document.getElementById(i);
    btn.classList.add("active");
    audios[i].play();
  };
  })
});

document.addEventListener('keyup', e =>{
  let upBtn = e.key
btns.forEach((btn, i)=>{
  let btnKey = btn.innerText
  if (btnKey == upBtn.toUpperCase()){
    let btn = document.getElementById(i);
    btn.classList.remove("active");
  };
  })
});
