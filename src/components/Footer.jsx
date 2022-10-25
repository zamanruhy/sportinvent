import './Footer.css'
import YtIcon from '../icons/yt.svg?component'
import TwIcon from '../icons/tw.svg?component'
import FbIcon from '../icons/fb.svg?component'
import InIcon from '../icons/in.svg?component'
import VkIcon from '../icons/vk.svg?component'
import OkIcon from '../icons/ok.svg?component'

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__cols">
            <div class="footer__col">
              <h3>КОМПАНИЯ</h3>
              <ul>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Доставка и оплата</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Отзывы</a>
                </li>
                <li>
                  <a href="#">Положение о конфиденциальности</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Партнерам</a>
                </li>
                <li>
                  <a href="#">Вакансии</a>
                </li>
                <li>
                  <a href="#">Вопросы и ответы</a>
                </li>
              </ul>
            </div>
            <div class="footer__col">
              <h3>КАТАЛОГ</h3>
              <ul>
                <li>
                  <a href="#">Тренажёры</a>
                </li>
                <li>
                  <a href="#">Гантели, штанги, гири</a>
                </li>
                <li>
                  <a href="#">Все для футбола</a>
                </li>
                <li>
                  <a href="#">Спортивный инвентарь</a>
                </li>
                <li>
                  <a href="#">Теннис</a>
                </li>
                <li>
                  <a href="#">Мотоциклы</a>
                </li>
                <li>
                  <a href="#">Велосипеды</a>
                </li>
                <li>
                  <a href="#">Фитнес аксессуары</a>
                </li>
                <li>
                  <a href="#">Лыжный спорт</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__info">
            <ul class="footer__social">
              <li>
                <a href="#">
                  <YtIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <FbIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <VkIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <OkIcon />
                </a>
              </li>
            </ul>
            <div class="footer__phone-wrap">
              <div class="footer__phone-legend">Возникли вопросы? Звоните!</div>
              <a class="footer__phone" href="tel:+71234567890">
                +7 (123) 456-78-90
              </a>
            </div>
            <div class="footer__schedule">
              <h3 class="footer__schedule-title">ГРАФИК РАБОТЫ</h3>
              <p>C 10:00 до 20:00 без выходных.</p>
              <p>
                Оформление заявок происходит круглосуточно, их исполнение
                происходит согласно режиму работы компании.
              </p>
            </div>
          </div>
        </div>
        <div class="footer__bottom">&#169; Copyright</div>
      </div>
    </footer>
  )
}
