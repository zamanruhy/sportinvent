import { onMount } from 'solid-js'
import UpIcon from '../icons/up.svg?component'
import './ToTop.css'

function script() {
  const el = document.querySelector('.to-top')
  if (!el) return

  function scrollToTop() {
    const currentScroll = window.pageYOffset
    if (currentScroll > 0) {
      requestAnimationFrame(scrollToTop)
      window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5))
    }
  }
  function onScroll() {
    el.classList.toggle('to-top_active', window.pageYOffset > 600)
  }
  window.addEventListener('scroll', onScroll)
  el.addEventListener('click', scrollToTop)
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function ToTop(props) {
  onMount(script)
  return (
    <button class="to-top" type="button" aria-label="Scroll to top">
      <UpIcon />
    </button>
  )
}
