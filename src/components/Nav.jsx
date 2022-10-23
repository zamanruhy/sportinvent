import { onMount } from 'solid-js'
import './Nav.css'

function script() {
  const el = Array.from(document.querySelectorAll('.nav__sub'))
  if (!el) return

  el.forEach((node) => {
    const imgEl = node.querySelector('img')
    const linkEls = Array.from(node.querySelectorAll('a'))

    linkEls.forEach((linkEl) => {
      linkEl.addEventListener('mouseenter', (e) => {
        const src = linkEl.dataset.imgsrc
        imgEl.src = src
      })
    })
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Nav() {
  onMount(script)
  return (
    <nav class="nav">
      <ul>
        <li>
          <a href="katalog/">Каталог</a>
          <NavSub />
        </li>
        <li>
          <a href="akczii/">Акции</a>
        </li>
        <li>
          <a href="novosti/">Новости</a>
        </li>
        <li>
          <a href="dostavka-i-oplata">Доставка и оплата</a>
        </li>
        <li>
          <a href="o-kompanii">О компании</a>
        </li>
        <li>
          <a href="otzyivyi">Отзывы</a>
        </li>
        <li>
          <a href="kontaktyi">Контакты</a>
        </li>
      </ul>
    </nav>
  )
}

function NavSub() {
  return (
    <div class="nav__sub">
      <div class="nav__sub-backdrop"></div>
      <div class="nav__sub-dialog">
        <div class="nav__sub-content">
          <ul>
            <li class="first">
              <a
                href="trenazheryi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/cat1.png"
              >
                Тренажеры
              </a>
            </li>
            <li>
              <a
                href="ganteli-shtangi-giri/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu2.png"
              >
                Гантели, штанги, гири
              </a>
            </li>
            <li>
              <a
                href="velosipedyi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu16.png"
              >
                Велосипеды
              </a>
            </li>
            <li>
              <a
                href="vse-dlya-futbola/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu4.png"
              >
                Все для футбола
              </a>
            </li>
            <li>
              <a
                href="konki/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu10.png"
              >
                Коньки
              </a>
            </li>
            <li>
              <a
                href="motocziklyi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu17.png"
              >
                Мотоциклы
              </a>
            </li>
            <li>
              <a
                href="fitnes-aksessuaryi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu13.png"
              >
                Фитнес аксессуары
              </a>
            </li>
            <li>
              <a
                href="tennis/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu3.png"
              >
                Теннис
              </a>
            </li>
            <li>
              <a
                href="sportivnyij-inventar/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu7.png"
              >
                Спортивный инвентарь
              </a>
            </li>
            <li>
              <a
                href="plavanie/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu12.png"
              >
                Плавание
              </a>
            </li>
            <li>
              <a
                href="stojki-stellazhi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu8.png"
              >
                Стойки, стеллажи
              </a>
            </li>
            <li>
              <a
                href="lyizhnyij-sport/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu9.png"
              >
                Лыжный спорт
              </a>
            </li>
            <li>
              <a
                href="sanki-snegokatyi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu11.png"
              >
                Санки, снегокаты
              </a>
            </li>
            <li>
              <a
                href="edinoborstva/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/cat22.png"
              >
                Единоборства
              </a>
            </li>
            <li>
              <a
                href="badminton/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu14.png"
              >
                Бадминтон
              </a>
            </li>
            <li>
              <a
                href="skejtbordyi-samokatyi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu15.png"
              >
                Скейтборды, самокаты
              </a>
            </li>
            <li>
              <a
                href="skuteryi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu18.png"
              >
                Скутеры, мопеды
              </a>
            </li>
            <li>
              <a
                href="vse-dlya-basketbola/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu5.png"
              >
                Все для баскетбола
              </a>
            </li>
            <li>
              <a
                href="snegoxodyi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu19.png"
              >
                Снегоходы
              </a>
            </li>
            <li>
              <a
                href="vse-dlya-volejbola/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu6.png"
              >
                Все для волейбола
              </a>
            </li>
            <li>
              <a
                href="kvadrocziklyi/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/megamenu20.png"
              >
                Квадроциклы
              </a>
            </li>
            <li>
              <a
                href="vsyo-dlya-xokkeya/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/cat21.png"
              >
                Всё для хоккея
              </a>
            </li>
            <li class="last">
              <a
                href="snoubording/"
                data-imgsrc="https://shop2full.demoultron.ru/images/categories/cat23.png"
              >
                Сноубординг
              </a>
            </li>
          </ul>
          <div class="nav__sub-pic">
            <img
              src="https://shop2full.demoultron.ru/images/categories/cat1.png"
              alt="#"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
