import { onMount } from 'solid-js'
import Button from './Button'
import Nav from './Nav'
import MagIcon from '../icons/mag.svg?component'
import BagIcon from '../icons/bag.svg?component'
import PhoneIcon from '../icons/phone.svg?component'
import Hamburger from './Hamburger'
import Search from './Search'
import Drawer from './Drawer'
import Callback from './Callback'
import CloseIcon from '../icons/close.svg?component'
import './Header.css'

function script() {
  const el = document.querySelector('.header')
  if (!el) return

  const searchButtonEl = el.querySelector('.header__search-button')

  searchButtonEl.addEventListener('click', (e) => {
    e.stopPropagation()
    window.dispatchEvent(new CustomEvent('open-search'))
  })

  const cbButtonEls = Array.from(
    el.querySelectorAll('.header__callback, .header__callback-mobile')
  )
  const dialogEl = el.querySelector('.header__dialog')

  cbButtonEls.forEach((btnEl) => {
    btnEl.addEventListener('click', (e) => {
      e.preventDefault()
      dialogEl.showModal()
      requestAnimationFrame(() => {
        window.addEventListener('click', outsideClick)
      })
    })
  })

  function outsideClick(e) {
    if (!dialogEl.contains(e.target)) {
      dialogEl.close()
    }
  }

  dialogEl.addEventListener('close', (e) => {
    window.removeEventListener('click', outsideClick)
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Header() {
  onMount(script)
  return (
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="header__top-inner">
            <Nav />
            <Button class="header__callback" variant="primary" size="sm">
              Обратный звонок
            </Button>
            <button class="header__callback-mobile">
              <PhoneIcon />
            </button>
          </div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="container">
          <div class="header__bottom-inner">
            <div class="header__addr">
              <a class="header__phone" href="tel:+71234567890">
                +7 (123) 456-78-90
              </a>
              <a class="header__email" href="mailto:info@sitename.ru">
                info@sitename.ru
              </a>
            </div>
            <a class="header__logo" href=".">
              <img
                src="https://shop2full.demoultron.ru/images/site/logo.png"
                alt="#"
              />
            </a>
            <div class="header__widget">
              <ul>
                <li>
                  <button class="header__search-button lg:-mb-1">
                    <MagIcon class="w-[20px] lg:w-[25px]" />
                  </button>
                </li>
                <li class="order-first lg:order-none">
                  <a href="#">
                    <BagIcon class="w-[23px] lg:w-[28px]" />
                    <span className="header__widget-badge">0</span>
                  </a>
                </li>
                <li class="lg:hidden">
                  <Hamburger />
                </li>
              </ul>
              <div class="header__widget-label">
                <div class="header__widget-title">Корзина</div>
                <div class="header__widget-sum">12 680 ₽</div>
              </div>
            </div>
            <Search />
          </div>
        </div>
      </div>

      <Drawer />

      <dialog class="header__dialog">
        <button
          type="button"
          class="close"
          onclick="this.closest('dialog').close()"
        >
          <CloseIcon />
        </button>
        <Callback />
      </dialog>
    </header>
  )
}
