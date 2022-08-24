const advice = document.querySelector('.advice');
const btn = document.querySelector('.next-btn button');
const whatsapp = document.querySelector('.whatsapp');
const copy = document.querySelector('.copy');
const twitter = document.querySelector('.twitter');
const section = document.querySelector('.section');
const preloader = document.querySelector('.preloader')
const copied = document.querySelector('.copied');
const adviceWrapper = document.querySelector('.advice-wrapper');

window.onload = () => {
  setTimeout(() => {
    preloader.classList.add('active');
    section.classList.add('active');
    adviceWrapper.classList.add('animate');
  }, 3000)
}



let response, data;

const getAdvice = async () => {
  response = await fetch('https://api.adviceslip.com/advice');
  data = await response.json();

  advice.textContent = `${data.slip.advice}`
  btn.textContent = 'New Advice';
  btn.classList.remove('loading');
}

btn.addEventListener('click', () => {
  btn.textContent = 'Loading..';
  btn.classList.add('loading');
  getAdvice();
})

whatsapp.addEventListener('click', () => {
  window.open(`whatsapp://send?text=${advice.textContent}`, '_blank');
})

twitter.addEventListener('click', () => {
  window.open(`https://twitter.com/intent/tweet?text=${advice.textContent}`, '_blank');
})

copy.addEventListener('click', () => {
  navigator.clipboard.writeText(advice.innerText);
  copied.classList.add('active');
  setTimeout(() => {
    copied.classList.remove('active');
  }, 2000)
})
