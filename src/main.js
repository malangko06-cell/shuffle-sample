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

document.body.innerHTML = `
  <main class="hero">
    <section class="card">
      <p class="eyebrow">Shuffle Web Guide</p>
      <h1>나에게 필요한 웹사이트로</h1>
      <p class="description">버튼을 누르면 준비된 사이트 중 하나로 랜덤하게 이동합니다.</p>
      <button class="go-button" type="button">가기</button>
    </section>
  </main>
`

document.querySelector('.go-button')?.addEventListener('click', () => {
  const destination = randomWebsite()
  window.open(destination.url, '_blank', 'noopener,noreferrer')
})
