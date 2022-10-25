import './Breadcrumb.css'

export default function Breadcrumb() {
  return (
    <div class="breadcrumb">
      <div className="container">
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Тренажеры</a>
          </li>
          <li>
            <a>Кроссовер</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
