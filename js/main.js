// change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('windows-scroll', window.scrollY > 0)
})