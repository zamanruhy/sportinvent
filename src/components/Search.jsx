import { onMount } from 'solid-js'
import MagIcon from '../icons/mag.svg?component'
import CloseIcon from '../icons/close.svg?component'
import './Search.css'

function script() {
  const el = document.querySelector('.search')
  if (!el) return

  const closeEl = el.querySelector('.search__close')

  function open() {
    el.classList.add('search_open')
  }
  function close() {
    el.classList.remove('search_open')
  }

  closeEl.addEventListener('click', close)
  window.addEventListener('open-search', open)
  window.addEventListener('click', (e) => {
    if (!el.contains(e.target)) close()
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Search() {
  onMount(script)
  return (
    <form class="search" method="get" action="#">
      <div class="search__field">
        <input
          type="text"
          placeholder="Поиск"
          class="search__input"
          name="query"
          autocomplete="off"
        />
        <div class="search__controls">
          <button type="submit" class="search__submit">
            <MagIcon class="h-[23px]" />
          </button>
          <span class="search__separator" />
          <button type="button" class="search__close">
            <CloseIcon class="h-[20px]" />
          </button>
        </div>
      </div>
    </form>
  )
}
