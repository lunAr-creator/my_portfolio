function navbarFunc() {
  document.getElementById('chk').checked = false
}

const logo = document.querySelector('#pronav')
const about = document.querySelector('#about')
const log_text = document.querySelector('#log_text')

const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')

let header = document.querySelector('.header');
const hamburger = document.querySelector('.fa-bars');

const getOffset = () => {
  if(window.pageYOffset > 100){
    header.classList.add('fixed');
    hamburger.classList.add('fixed')
  }
  else {
    header.classList.remove('fixed');
    hamburger.classList.remove('fixed')
  }
}

window.addEventListener('scroll', getOffset)


window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }
