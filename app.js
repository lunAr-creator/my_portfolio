function navbarFunc() {
  document.getElementById('chk').checked = false
}

// function changeColor() {
//   document.getElementById('home-tag1').style.color = 'black';
// }
//
// const logo = document.querySelector('#pronav')
// const about = document.querySelector('#about')
// const ham = document.querySelector('#hamburger')
// const title = document.querySelector('#logo')
//
// const nav1 = document.querySelector('#home-tag1')
// const nav2 = document.querySelector('#home-tag2')
// const nav3 = document.querySelector('#home-tag3')
// const nav4 = document.querySelector('#home-tag4')
// const nav5 = document.querySelector('#home-tag5')
//
// const getOffset = () => {
//   if(window.pageYOffset > 100){
//      logo.style.backgroundColor = '#f1f1f1';
//      logo.style.transition = 'background .5s ease-out';
//
//      ham.style.color = 'black';
//      ham.style.hover = '#AEC6CF';
//      title.style.color = 'black';
//
//      nav1.style.color = 'black';
//      nav2.style.color = 'black';
//      nav3.style.color = 'black';
//      nav4.style.color = 'black';
//      nav5.style.color = 'black';
//   }
//   if(window.pageYOffset < 100){
//      logo.style.backgroundColor = 'rgba(0,0,0,0)';
//      logo.style.transition = 'background .5s ease-out';
//      logo.style.boxShadow = 'none';
//
//      ham.style.color = 'white';
//      ham.style.hover = '#AEC6CF';
//      title.style.color = 'white';
//
//      nav1.style.color = 'white';
//      nav2.style.color = 'white';
//      nav3.style.color = 'white';
//      nav4.style.color = 'white';
//      nav5.style.color = 'white';
//   }
// }
//
// window.addEventListener('scroll', getOffset)

const logo = document.querySelector('#pronav')
const about = document.querySelector('#about')

const getOffset = () => {
  if(window.pageYOffset > 100){
     logo.style.backgroundColor = 'white';
     logo.style.transition = 'background .5s ease-out';
  }
  if(window.pageYOffset < 100){
     logo.style.backgroundColor = 'rgba(0,0,0,0)';
     logo.style.transition = 'background .5s ease-out';
  }
}

window.addEventListener('scroll', getOffset)
