import Button from './Button'
import './Product.css'

export default function Product(props) {
  return (
    <a href="#" class="product">
      <div class="product__pic">
        <img
          src="https://shop2full.demoultron.ru/assets/images/products/256/medium/a4ab23e9d39e8d40a05f95018e459eed0df5fe0d.jpg"
          alt="#"
        />
      </div>
      <div class="product__content">
        <h3 class="product__title">
          Беговая дорожка электрическая FITEX SALLY
        </h3>
        <dl className="product__spec">
          <dt>Калибр:</dt>
          <dd>1,75" (45мм)</dd>

          <dt>Время работы:</dt>
          <dd>30</dd>

          <dt>Размер:</dt>
          <dd>120мм</dd>
        </dl>
        <div class="product__price-container">
          <div class="product__price">54 000 ₽</div>
          {props.old && <del class="product__old-price">60 000 ₽</del>}
        </div>
      </div>
      <div class="product__actions">
        <Button class="product__button" as="div" variant="primary" size="md">
          Подробнее
        </Button>
      </div>
      {(props.discount || props.new || props.popular) && (
        <div class="product__badges">
          {props.discount && (
            <span class="product__badge product__badge_discount">
              {props.discount}
            </span>
          )}
          {props.new && (
            <span class="product__badge product__badge_new">Новинка</span>
          )}
          {props.popular && (
            <span class="product__badge product__badge_popular">
              Популярный
            </span>
          )}
        </div>
      )}
    </a>
  )
}
