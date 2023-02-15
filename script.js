'use strict'

const menuBtn = document.querySelector('.menu-btn')
const mobileMenu = document.querySelector('.nav-items')

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('nav-displayed')
  menuBtn.classList.toggle('open')
})

const featuredSpeakers = document.querySelector('.featured-speakers')
class Speaker {
  constructor (imgSrc, name, bio, achievement) {
    this.imgSrc = imgSrc
    this.name = name
    this.bio = bio
    this.achievement = achievement
  }

  displaySpeaker () {
    featuredSpeakers.insertAdjacentHTML('beforeend',
        `
            <div class="speaker">
                <div class="speaker-img__div">
                    <img src="images/checkerboard.jpg" alt="Checkerboard" class="Checkerboard">
                    <img src="${this.imgSrc}" alt="Elon_Musk" class="speaker-img">
                </div>
                <div class="speaker-details">
                    <h4 class="speaker-name">${this.name}</h4>
                    <p class="speaker-bio">${this.bio}</p>
                    <hr class="speaker-line">
                    <p class="speaker-achievements">${this.achievement}</p>
                </div>
            </div>
            `)
  }
}

const speakers = [
  new Speaker(
    'images/Elon_Musk.jpg',
    'Elon Musk',
    'CEO of SpaceX, Tesla, and Neuralink',
    'He is developing rockets for space exploration and colonization at SpaceX, while also accelerating the adoption of sustainable energy at Tesla. At Neuralink, he is working on a brain-machine interface.'
  ),
  new Speaker(
    'images/Jeff_Bezos.jpeg',
    'Jeff Bezos',
    'Founder and former CEO of Amazon',
    'revolutionizing e-commerce and establishing Amazon as one of the world\'s largest companies.'
  ),
  new Speaker(
    'images/Nadella-Satya.jpg',
    'Satya Nadella',
    'CEO of Microsoft',
    'Leading the company\'s transformation into a cloud and AI-focused organization.'
  ),
  new Speaker(
    'images/Tim_Cook.jpg',
    'Tim Cook',
    'CEO of Apple',
    'Responsible for the company\'s continued innovation and financial success in the highly competitive tech industry.'
  ),
  new Speaker(
    'images/Sundar_pichai.png',
    'Sundar Pichai',
    ' CEO of Google.',
    ' Overseeing the company\'s vast array of products and initiatives, from search to artificial intelligence.'
  ),
  new Speaker(
    'images/Jack_Ma.jpg',
    'Jack Ma',
    'Co-founder and former executive chairman of Alibaba Group.',
    'Continually innovating and revolutionizing e-commerce and digital payments. Building Alibaba into a global powerhouse.'
  )
]

const initFeaturedSpeakers = function () {
  speakers.forEach((speaker, i) => {
    if (i <= 1) speaker.displaySpeaker()
  })
}

initFeaturedSpeakers()

const moreBtn = document.querySelector('.more-btn')
const moreIcon = document.querySelector('.more-icon')
const btnName = document.querySelector('.btn-name')
let allSpeakers = false
moreBtn.addEventListener('click', () => {
  if (!allSpeakers) {
    speakers.forEach((speaker, i) => {
      if (i > 1) speaker.displaySpeaker()
      moreIcon.style.transform = 'rotate(180deg)'
      btnName.textContent = 'LESS'
    })
  } else {
    featuredSpeakers.innerHTML = ''
    initFeaturedSpeakers()
    moreIcon.style.transform = 'rotate(0deg)'
    btnName.textContent = 'MORE'
  }
  allSpeakers = !allSpeakers
})
