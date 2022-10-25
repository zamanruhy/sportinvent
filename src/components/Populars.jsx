import { onMount } from 'solid-js'
import './Populars.css'
import ProductSlider from './ProductSlider'

function script() {
  const el = document.querySelector('.populars')
  if (!el) return

  const tabEls = Array.from(el.querySelectorAll('.populars__tab'))
  const panelEls = el.querySelectorAll('.populars__tabpanel')

  tabEls.forEach((tabEl) => {
    tabEl.addEventListener('click', (e) => {
      const index = tabEls.indexOf(tabEl)
      tabEls.forEach((n) => n.classList.remove('populars__tab_selected'))
      panelEls.forEach((n) => n.classList.remove('populars__tabpanel_selected'))
      tabEl.classList.add('populars__tab_selected')
      panelEls[index].classList.add('populars__tabpanel_selected')
      window.dispatchEvent(new CustomEvent('resize'))
    })
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Populars() {
  onMount(script)
  return (
    <div class="populars">
      <div class="container">
        <div class="populars__tabs">
          <div role="tablist" class="populars__tablist">
            <button
              type="button"
              role="tab"
              class="populars__tab populars__tab_selected"
            >
              Новинки
            </button>
            <button type="button" role="tab" class="populars__tab">
              Популярное
            </button>
            <button type="button" role="tab" class="populars__tab">
              Распродажа
            </button>
          </div>
          <div
            role="tabpanel"
            class="populars__tabpanel populars__tabpanel_selected"
          >
            <ProductSlider />
          </div>
          <div role="tabpanel" class="populars__tabpanel">
            <ProductSlider />
          </div>
          <div role="tabpanel" class="populars__tabpanel">
            <ProductSlider />
          </div>
        </div>
      </div>
    </div>
  )
}

// z-[1] border-b-blue-500 text-blue-600 focus-visible:ring focus-visible:ring-blue-500/50 focus-visible:ring-offset-2
