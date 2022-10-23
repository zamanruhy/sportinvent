import { onMount } from 'solid-js'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import PrevIcon from '../icons/prev.svg?component'
import NextIcon from '../icons/next.svg?component'
import './Intro.css'

function script() {
  const el = document.querySelector('.intro')
  if (!el) return

  const sliderEl = el.querySelector('.intro__slider')
  const prevEl = el.querySelector('.intro__nav_prev')
  const nextEl = el.querySelector('.intro__nav_next')
  const slider = new KeenSlider(sliderEl, {
    loop: true,
    defaultAnimation: {
      duration: 2000
    },
    detailsChanged: (s) => {
      s.slides.forEach((element, idx) => {
        element.style.opacity = s.track.details.slides[idx].portion
      })
    },
    renderMode: 'custom'
  })

  prevEl.addEventListener('click', () => slider.prev())
  nextEl.addEventListener('click', () => slider.next())
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Intro() {
  onMount(script)
  return (
    <div class="intro">
      <div id="my-keen-slider" class="intro__slider fader">
        <a href="#" class="fader__slide keen-slider__slide">
          <img
            src="https://shop2full.demoultron.ru/assets/cache_image/images/slider/banner-1_1910x580_2a0.jpg"
            alt="#"
          />
        </a>
        <a href="#" class="fader__slide keen-slider__slide">
          <img
            src="https://shop2full.demoultron.ru/assets/cache_image/images/slider/banner-2_1910x580_2a0.jpg"
            alt="#"
          />
        </a>
        <a href="#" class="fader__slide keen-slider__slide">
          <img
            src="https://shop2full.demoultron.ru/assets/cache_image/images/slider/banner-3_1910x580_2a0.jpg"
            alt="#"
          />
        </a>
        <a href="#" class="fader__slide keen-slider__slide">
          <img
            src="https://shop2full.demoultron.ru/assets/cache_image/images/slider/banner-4_1910x580_2a0.jpg"
            alt="#"
          />
        </a>
      </div>
      <button type="button" class="intro__nav intro__nav_prev">
        <PrevIcon />
      </button>
      <button type="button" class="intro__nav intro__nav_next">
        <NextIcon />
      </button>
    </div>
  )
}
