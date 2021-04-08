function navbarFunc() {
  document.getElementById('chk').checked = false
}

const logo = document.querySelector('#pronav')
const about = document.querySelector('#about')

const getOffset = () => {
  if(window.pageYOffset > 100){
     logo.style.backgroundColor = 'white';
     logo.style.transition = 'background .2s ease-out';
  }
  if(window.pageYOffset < 100){
     logo.style.backgroundColor = 'rgba(0,0,0,0)';
     logo.style.transition = 'background .2s ease-out';
  }
}

window.addEventListener('scroll', getOffset)
