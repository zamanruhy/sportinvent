import { onMount } from 'solid-js'
import './Drawer.css'

function script() {
  const el = document.querySelector('.drawer')
  if (!el) return

  window.addEventListener('hamburger:active', ({ detail: active }) => {
    // console.log('hamburger:active', active)
    el.classList.toggle('drawer_open', active)
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Drawer(props) {
  onMount(script)
  return (
    <>
      <div class="drawer">
        <ul>
          <li class="active">
            <details>
              <summary>
                <a href="https://google.com">Каталог</a>
                <span />
              </summary>
              <ul>
                <li class="active">
                  <a href="#">Тренажеры</a>
                </li>
                <li>
                  <a href="#">Гантели, штанги, гири</a>
                </li>
                <li>
                  <a href="#">Велосипеды</a>
                </li>
                <li>
                  <a href="#">Все для футбола</a>
                </li>
                <li>
                  <a href="#">Коньки</a>
                </li>
                <li>
                  <a href="#">Мотоциклы</a>
                </li>
                <li>
                  <a href="#">Фитнес аксессуары</a>
                </li>
                <li>
                  <a href="#">Теннис</a>
                </li>
                <li>
                  <a href="#">Спортивный инвентарь</a>
                </li>
                <li>
                  <a href="#">Плавание</a>
                </li>
                <li>
                  <a href="#">Стойки, стеллажи</a>
                </li>
                <li>
                  <a href="#">Лыжный спорт</a>
                </li>
                <li>
                  <a href="#">Санки, снегокаты</a>
                </li>
                <li>
                  <a href="#">Единоборства</a>
                </li>
                <li>
                  <a href="#">Бадминтон</a>
                </li>
                <li>
                  <a href="#">Скейтборды, самокаты</a>
                </li>
                <li>
                  <a href="#">Скутеры, мопеды</a>
                </li>
                <li>
                  <a href="#">Все для баскетбола</a>
                </li>
                <li>
                  <a href="#">Снегоходы</a>
                </li>
                <li>
                  <a href="#">Все для волейбола</a>
                </li>
                <li>
                  <a href="#">Квадроциклы</a>
                </li>
                <li>
                  <a href="#">Всё для хоккея</a>
                </li>
                <li>
                  <a href="#">Сноубординг</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>
                <a href="https://google.com">Акции</a>
                <span />
              </summary>
              <ul>
                <li>
                  <a href="#">Скидка спортсменам, тренерам и кмс</a>
                </li>
                <li>
                  <a href="#">Акция при покупке тренажёра</a>
                </li>
                <li>
                  <a href="#">Скидка на Adidas, Proxima, Royal</a>
                </li>
                <li>
                  <a href="#">Скидка до 65% на инвентарь</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#">Новости</a>
          </li>
          <li>
            <a href="#">Доставка и оплата</a>
          </li>
          <li>
            <a href="#">О компании</a>
          </li>
          <li>
            <a href="#">Отзывы</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
      <div class="drawer-backdrop" />
    </>
  )
}
