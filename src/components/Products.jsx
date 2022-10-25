import Product from './Product'
import './Products.css'

export default function Products() {
  return (
    <div class="products">
      <div className="container">
        <h2 class="products__title title">Популярные товары</h2>
        <div className="products__grid">
          {Array.from({ length: 8 }).map((_) => (
            <Product />
          ))}
        </div>
      </div>
    </div>
  )
}
