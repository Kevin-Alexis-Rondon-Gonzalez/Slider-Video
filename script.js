//Menu Toggle
const menuIconToggle = document.querySelector('.menuIcon')
const navbar = document.getElementById('navBar')
menuIconToggle.addEventListener('click', toggleMenu)
function toggleMenu(){
    menuIconToggle.classList.toggle('active')
    navbar.classList.toggle('active')
}

//Slider video
const sliderShow = document.getElementById('sliderShow')
const slider = sliderShow.getElementsByTagName('video')
const nextButton = document.querySelector('.nextBtn')
const prevButton = document.querySelector('.prevBtn')

nextButton.addEventListener('click', nextSlider, nextSliderText)
prevButton.addEventListener('click', prevSlider, prevSliderText)

let index = 0
function nextSlider(){
    slider[index].classList.remove('active') // Delete class active from video in html
    index = (index + 1) % slider.length
    slider[index].classList.add("active")
}
function prevSlider(){
    slider[index].classList.remove('active') // Delete class active from video in html
    index = (index - 1 + slider.length) % slider.length
    slider[index].classList.add("active")
}

//Slider Text 
const ShowText = document.getElementById('sliderShowText')
const sliderText = ShowText.getElementsByTagName('div')

prevButton.addEventListener('click',prevSliderText)
nextButton.addEventListener('click', nextSliderText)

let indexText = 0

function nextSliderText(){
    sliderText[indexText].classList.remove('active')
    indexText = (indexText + 1) %sliderText.length
    sliderText[indexText].classList.add('active')
    console.log('ok')
}
function prevSliderText(){
    sliderText[indexText].classList.remove('active')
    indexText = (indexText - 1 + sliderText.length) %sliderText.length
    sliderText[indexText].classList.add('active')
}