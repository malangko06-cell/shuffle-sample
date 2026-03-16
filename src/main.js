import './style.css'

const suggestionFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScOB6BxltvfoJNaj7MVbRxMNLFlDTvDLGb6uA9GygEHtbNiFQ/viewform?usp=publish-editor'

const baseWebsiteGroups = {
  general: [
    'https://map.ngii.go.kr/',
    'https://en.climate-data.org/',
    'http://www.dbpia.co.kr/',
    'http://www.riss.kr/',
    'https://kosis.kr/',
    'https://www.gallup.co.kr/',
    'https://datalab.naver.com/',
    'https://trends.google.co.kr/trends/',
    'https://www.20slab.org/',
    'https://www.bigkinds.or.kr/',
  ],
  design: [
    'https://pixabay.com/',
    'https://type.method.ac/#',
    'https://shape.method.ac/',
    'https://fonts.google.com/knowledge',
    'https://randomcolour.com/',
    'https://slidesgo.com/',
    'https://posters.calarts.edu/',
    'https://www.itsnicethat.com/',
    'https://www.flaticon.com/',
    'https://design.co.kr/',
    'https://www.cosmos.so/home',
    'https://www.sulki-min.com/wp/index-random-kr/',
    'https://www.designspiration.com/',
    'https://artvee.com/',
    'https://film-grab.com/#google_vignette',
    'https://artsandculture.google.com/',
    'https://www.behance.net/for_you',
    'https://unsplash.com/ko',
    'https://2colors.colorion.co/',
    'https://www.spottedinprod.com/',
    'https://designcompass.org/',
  ],
  rest: [
    'https://www.trashloop.com/',
    'https://maze.toys/mazes/mini/daily/',
    'https://paint.toys/',
    'https://checkboxrace.com/',
    'https://www.koalastothemax.com/',
    'https://toybox.toms.toys/',
    'https://thezen.zone/',
    'https://santatracker.google.com/',
    'https://quickdraw.withgoogle.com/?locale=ko',
    'https://share.google/LdJy1qDd0CAiEdspK',
  ],
}

const getWebsiteGroups = () => {
  return {
    general: [...baseWebsiteGroups.general],
    design: [...baseWebsiteGroups.design],
    rest: [...baseWebsiteGroups.rest],
  }
}

const getAllWebsites = () => Object.values(getWebsiteGroups()).flat()

const randomWebsite = (websites) => {
  const index = Math.floor(Math.random() * websites.length)
  return websites[index]
}

const openRandomWebsite = (websites) => {
  const destination = randomWebsite(websites)
  window.open(destination, '_blank', 'noopener,noreferrer')
}

document.querySelectorAll('[data-category]').forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category
    const websiteGroups = getWebsiteGroups()

    if (!category || !websiteGroups[category]) {
      return
    }

    openRandomWebsite(websiteGroups[category])
  })
})

document.querySelector('#go-button')?.addEventListener('click', () => {
  openRandomWebsite(getAllWebsites())
})

const suggestionTrigger = document.querySelector('#suggestion-trigger')
suggestionTrigger?.addEventListener('click', () => {
  window.open(suggestionFormUrl, '_blank', 'noopener,noreferrer')
})
