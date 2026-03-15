import './style.css'

const websites = [
  { name: 'RISS', url: 'http://www.riss.kr/' },
  { name: 'KOSIS', url: 'https://kosis.kr/' },
  { name: 'Pixabay', url: 'https://pixabay.com/' },
  { name: 'Trashloop', url: 'https://www.trashloop.com/' },
  { name: 'The Zen Zone', url: 'https://thezen.zone/' },
]

const randomWebsite = () => {
  const index = Math.floor(Math.random() * websites.length)
  return websites[index]
}

document.querySelector('#go-button')?.addEventListener('click', () => {
  const destination = randomWebsite()
  window.open(destination.url, '_blank', 'noopener,noreferrer')
})
