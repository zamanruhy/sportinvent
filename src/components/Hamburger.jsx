import { onMount } from 'solid-js'
import './Hamburger.css'

function script() {
  const el = document.querySelector('.hamburger')
  if (!el) return
  let active = false

  el.addEventListener('click', (e) => {
    active = !active
    el.classList.toggle('hamburger_active', active)
    window.dispatchEvent(
      new CustomEvent('hamburger:active', { detail: active })
    )
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Hamburger() {
  onMount(script)
  return (
    <button class="hamburger">
      <span class="hamburger__bar">
        <span class="hamburger__line"></span>
      </span>
    </button>
  )
}
