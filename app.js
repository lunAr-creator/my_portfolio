function navbarFunc() {
  document.getElementById('chk').checked = false
}

const logo = document.querySelector('#pronav')
const about = document.querySelector('#about')
const log_text = document.querySelector('#log_text')

const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')

const getOffset = () => {
  if(window.pageYOffset > 100){
     logo.style.backgroundColor = 'white';
     logo.style.transition = 'background .2s ease-out';
     log_text.style.color = 'black';
     link1.style.color = 'black';
     link2.style.color = 'black';
     link3.style.color = 'black';
  }
  if(window.pageYOffset < 100){
     logo.style.backgroundColor = 'rgba(0,0,0,0)';
     logo.style.transition = 'background .2s ease-out';
     log_text.style.color = 'white';
     link1.style.color = 'white';
     link2.style.color = 'white';
     link3.style.color = 'white';
  }
}
// 
// if(window.pageYOffset > 100){
//   function changeToBlueColor(){
//     document.querySelector("#link1").style.color = "#AEC6CF";
//   }
//   function changeToBlackColor(){
//     document.querySelector("#link1").style.color = "black";
//   }
// } else if(window.pageYOffset < 100){
//   function changeToBlueColor(){
//     document.querySelector("#link1").style.color = "#AEC6CF";
//   }
//   function changeToBlackColor(){
//     document.querySelector("#link1").style.color = "black";
//   }
//
// } else {
//   function changeToBlackColor(){
//     document.querySelector("#link1").style.color = "white";
//   }
// }

window.addEventListener('scroll', getOffset)


// const tds = document.querySelector('#link1');
// tds.forEach((a) => {
//   a.style.setProperty('--a-color', '#00ff00');
// });
