const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10


for (var index = 0; index < rows * 3; index++) {
        const img = document.createElement('img')
        img.src = `${unsplashURL}${getRandomSize()}`
        container.appendChild(img)
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300
}

