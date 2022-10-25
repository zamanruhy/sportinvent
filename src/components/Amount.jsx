import { onMount } from 'solid-js'
import './Amount.css'

function script() {
  const els = Array.from(document.querySelectorAll('.amount'))
  if (!els.length) return

  els.forEach((el) => {
    const decrEl = el.querySelector('.amount__button:first-of-type')
    const incrEl = el.querySelector('.amount__button:last-of-type')
    const inputEl = el.querySelector('.amount__input')

    function set(val) {
      if (val < 1) val = 1
      decrEl.disabled = val < 2
      inputEl.value = val
    }

    incrEl.addEventListener('click', (e) => set(+inputEl.value + 1))
    decrEl.addEventListener('click', (e) => set(+inputEl.value - 1))
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Amount() {
  onMount(script)
  return (
    <div class="amount">
      <button type="button" class="amount__button" disabled>
        -
      </button>
      <input
        tabIndex="-1"
        type="text"
        name="count"
        class="amount__input"
        value="1"
      ></input>
      <button type="button" class="amount__button">
        +
      </button>
    </div>
  )
}
