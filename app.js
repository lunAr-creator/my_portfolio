function navbarFunc() {
  document.getElementById('chk').checked = false
}

const logo = document.querySelector('#pronav')
const about = document.querySelector('#about')
const ham = document.querySelector('#hamburger')
const title = document.querySelector('#logo')

const getOffset = () => {
  if(window.pageYOffset > 100){
     logo.style.backgroundColor = '#f1f1f1';
     logo.style.transition = 'background .5s ease-out';
     ham.style.color = 'black';
     title.style.color = 'black';
  }
  if(window.pageYOffset < 100){
     logo.style.backgroundColor = 'rgba(0,0,0,0)';
     logo.style.transition = 'background .5s ease-out';
     logo.style.boxShadow = 'none';
     ham.style.color = 'white';
     title.style.color = 'white';
  }
}

window.addEventListener('scroll', getOffset)
