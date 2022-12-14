import { onMount } from 'solid-js'
// import ImageZoom from 'js-image-zoom'
// import Magnifier from '../magnifier'
import Amount from './Amount'
import Button from './Button'
import Input from './Input'
import ProductSlider from './ProductSlider'
import './Card.css'

// console.log('ImageZoom', ImageZoom)

function script() {
  const el = document.querySelector('.card')
  if (!el) return

  const tabEls = Array.from(el.querySelectorAll('.card__tab'))
  const panelEls = el.querySelectorAll('.card__tabpanel')

  tabEls.forEach((tabEl) => {
    tabEl.addEventListener('click', (e) => {
      const index = tabEls.indexOf(tabEl)
      tabEls.forEach((n) => n.classList.remove('card__tab_selected'))
      panelEls.forEach((n) => n.classList.remove('card__tabpanel_selected'))
      tabEl.classList.add('card__tab_selected')
      panelEls[index].classList.add('card__tabpanel_selected')
      window.dispatchEvent(new CustomEvent('resize'))
    })
  })

  const pictureEl = el.querySelector('.card__picture')
  const imgEl = el.querySelector('.card__img')

  pictureEl.style.backgroundImage = `url(${imgEl.src})`
  pictureEl.addEventListener('mousemove', (e) => {
    const zoomer = e.currentTarget
    let offsetX, offsetY
    e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX)
    e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX)
    const x = (offsetX / zoomer.offsetWidth) * 100
    const y = (offsetY / zoomer.offsetHeight) * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%'
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Card(props) {
  onMount(script)
  return (
    <div class="card">
      <div class="container">
        <div class="card__pair">
          <div class="card__gallery">
            <figure class="card__picture">
              <img
                class="card__img"
                src="https://shop2full.demoultron.ru/assets/images/products/258/big/1eeca3de9da22d494999d8f851277e579844b3a5.jpg"
                alt="#"
              />
            </figure>
            {(props.discount || props.new || props.popular) && (
              <div class="card__badges">
                {props.discount && (
                  <span class="card__badge card__badge_discount">
                    {props.discount}
                  </span>
                )}
                {props.new && (
                  <span class="card__badge card__badge_new">??????????????</span>
                )}
                {props.popular && (
                  <span class="card__badge card__badge_popular">
                    ????????????????????
                  </span>
                )}
              </div>
            )}
          </div>
          <div class="card__detail">
            <div class="card__heading">
              <h1 class="card__title">??????????????????</h1>
              <div class="card__vendor-code">??????????????: 51832940</div>
            </div>
            <div class="card__price-wrap">
              <div class="card__price">49 990 ???</div>
              <del class="card__old-price">11 000 ???</del>
            </div>
            <div class="card__actions">
              <Amount />
              <div class="card__buttons">
                <Button
                  class="card__button"
                  type="button"
                  variant="primary"
                  size="md"
                >
                  ?? ??????????????
                </Button>
                <Button
                  class="card__button"
                  as="a"
                  href="#"
                  variant="secondary"
                  size="md"
                >
                  ???????????? ?? 1&nbsp;????????
                </Button>
              </div>
            </div>
            <details class="card__spec" open>
              <summary class="card__spec-title">
                ????????????????????????????
                <span class="card__spec-caret" />
              </summary>
              <div class="card__spec-content">
                <ul>
                  <li>
                    <span>??????:</span>
                    <span>60 ????.</span>
                  </li>
                  <li>
                    <span>????????????????:</span>
                    <span>1 ??????</span>
                  </li>
                  <li>
                    <span>???????????? ????????????????????????:</span>
                    <span>??????????</span>
                  </li>
                  <li>
                    <span>?????? ????????????????????????:</span>
                    <span>???? 140 ????</span>
                  </li>
                  <li>
                    <span>????????????, ????:</span>
                    <span>119</span>
                  </li>
                  <li>
                    <span>????????????, ????:</span>
                    <span>67</span>
                  </li>
                  <li>
                    <span>??????????, ????:</span>
                    <span>132</span>
                  </li>
                  <li>
                    <span>??????:</span>
                    <span>??????????????????</span>
                  </li>
                  <li>
                    <span>??????:</span>
                    <span>?????????????? ??????????????????</span>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
        <div class="card__tabs">
          <div role="tablist" class="card__tablist">
            <button
              type="button"
              role="tab"
              class="card__tab card__tab_selected"
            >
              ??????????????
            </button>
            <button type="button" role="tab" class="card__tab">
              ????????????????????
            </button>
          </div>
          <div role="tabpanel" class="card__tabpanel card__tabpanel_selected">
            <p>
              ???????? ?????????????????? ?????????????? ??????????????????, ????????????????????????, ????????????????????
              ?????????????????????????? ?????????????????? ?????????????? ?????????? ?????????? ???????????????????????? ????????????
              ???????? ???? ?????????????? ??????????, ?? ?????????????????????? ?????????????? ???????????????? ??????????
              ?????????????????? ?????????????????????? ?? ???????????????? ????????????????. ?????? ???????????????? ????????????????????
              ???? ???????????????????????? ???????????????????????????? ?????????????????????????? ?????? ??????????. ??????????
              ???????????????????????? ???????????????? ?????????????????? ?????????????? ???? ???????? ???? ????????????
              ?????????????????????? ?? ????????????, ?????? ?????????????????? ?????????????? ?????????? ??????????
              ?????????????????????????????? ?? ?????????? ?????? ??????????????????-?????????????????? ????????????????????.
            </p>
            <p>
              ???? ?????????? ???????? ?????????????????? ???????????????? ?????????????????????????? ?????????????????????????? lorem
              ipsum, ?????????????? ???????????????? ?? ???????????????? ?????????? ???????????????????? ?????? ????????????????
              ?????????????????? ???????? ??????????. ?? ?????????????? ???? lorem ipsum, ?????????? ???????? ????
              ?????????????? ?????????? ???????????????? ?????????? ?????????? ???????????????????? ?????????????? ?? ??????????????
              ???????????????????????? ?????????????? ?????????????????? ????????????.
            </p>
          </div>
          <div role="tabpanel" class="card__tabpanel">
            <div className="card__comment">
              <h2 className="card__comment-title">???????????????? ??????????</h2>
              <form action="#" class="card__comment-form">
                <div className="mb-5 grid gap-5 md:grid-cols-2">
                  <Input name="name" placeholder="???????? ?????? *" />
                  <Input type="email" name="email" placeholder="Email *" />
                </div>
                <div class="mb-10">
                  <Input
                    multiline
                    name="message"
                    placeholder="?????? ?????????? *"
                    rows="7"
                  />
                </div>
                <Button
                  as="input"
                  type="submit"
                  name="submit"
                  variant="primary"
                  size="md"
                  class="card__comment-submit"
                >
                  ???????????????? ??????????
                </Button>
                <div className="card__comment-note">
                  * - ????????, ???????????????????????? ?????? ????????????????????
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="card__extra">
        <div className="container">
          <h2 className="card__extra-title title">?????????? ??????????????????????</h2>
          <div className="card__extra-content">
            <ProductSlider />
          </div>
        </div>
      </div>
    </div>
  )
}
