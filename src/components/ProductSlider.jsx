import { onMount } from 'solid-js'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import Product from './Product'
import './ProductSlider.css'
import PrevIcon from '../icons/prev.svg?component'
import NextIcon from '../icons/next.svg?component'

function script() {
  const els = Array.from(document.querySelectorAll('.product-slider'))
  if (!els.length) return

  els.forEach((el) => {
    const prevEl = el.querySelector('.product-slider__nav_prev')
    const nextEl = el.querySelector('.product-slider__nav_next')
    const sliderEl = el.querySelector('.product-slider__slider')
    const slider = new KeenSlider(
      sliderEl,
      {
        loop: true,
        slides: { perView: 1 },
        breakpoints: {
          '(min-width: 576px)': {
            slides: { perView: 2 }
          },
          '(min-width: 768px)': {
            slides: { perView: 3 }
          },
          '(min-width: 992px)': {
            slides: { perView: 4 }
          }
        }
      },
      [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 4000)
          }
          slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener('mouseout', () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on('dragStarted', clearNextTimeout)
          slider.on('animationEnded', nextTimeout)
          slider.on('updated', nextTimeout)
        }
      ]
    )
    prevEl.addEventListener('click', (e) => slider.prev())
    nextEl.addEventListener('click', (e) => slider.next())
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function ProductSlider() {
  onMount(script)
  return (
    <div class="product-slider">
      <div class="product-slider__head">
        <div class="product-slider__nav-wrap">
          <button
            type="button"
            class="product-slider__nav product-slider__nav_prev"
          >
            <PrevIcon />
          </button>
          <button
            type="button"
            class="product-slider__nav product-slider__nav_next"
          >
            <NextIcon />
          </button>
        </div>
      </div>
      <div class="product-slider__content">
        <div class="product-slider__slider keen-slider">
          {items.map((item) => (
            <div class="keen-slider__slide">
              <Product {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const items = [
  { discount: '-10%', new: true, old: true },
  {},
  { popular: true, old: true },
  { new: true },
  {}
]
