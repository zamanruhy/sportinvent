import './Features.css'
import TruckIcon from '../icons/truck.svg?component'
import BonusIcon from '../icons/bonus.svg?component'
import SaleIcon from '../icons/sale.svg?component'
import BubbleIcon from '../icons/bubble.svg?component'

export default function Features() {
  return (
    <div class="features">
      <div class="container">
        <div class="features__list">
          <div class="features__item">
            <TruckIcon class="features__item-icon" />
            <div class="features__item-content">
              <h2 class="features__item-title">Бесплатная доставка</h2>
              <div class="features__item-text">по Новороссийску</div>
            </div>
          </div>
          <div class="features__item">
            <BonusIcon class="features__item-icon" />
            <div class="features__item-content">
              <h2 class="features__item-title">Клиентские программы</h2>
              <div class="features__item-text">для постоянных клиентов</div>
            </div>
          </div>
          <div class="features__item">
            <SaleIcon class="features__item-icon" />
            <div class="features__item-content">
              <h2 class="features__item-title">Скидки на черную пятницу</h2>
              <div class="features__item-text">до 10%</div>
            </div>
          </div>
          <div class="features__item">
            <BubbleIcon class="features__item-icon" />
            <div class="features__item-content">
              <h2 class="features__item-title">Онлайн поддержка</h2>
              <div class="features__item-text">
                Время работы : с 8:00 - 23:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
