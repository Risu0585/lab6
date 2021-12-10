const button = document.getElementById('button')
const menu = document.getElementById('menu')


button.addEventListener('click', () => {
  menu.classList.toggle('visible')
  
  if (button.innerText == '☰') {
    button.innerText = '╳'
  } else {
    button.innerText = '☰'
  }
})