const $navLinks = document.getElementById('navLinks')
const $navToggle = document.getElementById('navToggle')

$navToggle.addEventListener('click', function () {
  $navLinks.classList.toggle('open')
})

$navLinks.addEventListener('click', function () {
  $navLinks.classList.remove('open')
})
