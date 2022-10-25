import './Categories.css'

const items = [
  {
    title: 'Тренажеры',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat1_310x270_e26.png'
  },
  {
    title: 'Все для футбола',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat4_310x270_b5b.jpg'
  },
  {
    title: 'Мотоциклы',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat17_310x270_b5b.jpg'
  },
  {
    title: 'Теннис',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat13_310x270_b5b.jpg'
  },
  {
    title: 'Фитнес аксессуары',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat3_310x270_b5b.jpg'
  },
  {
    title: 'Лыжный спорт',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat9_310x270_b5b.jpg'
  },
  {
    title: 'Плавание',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat12_310x270_b5b.jpg'
  },
  {
    title: 'Велосипеды',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat16_310x270_b5b.jpg'
  },
  {
    title: 'Гантели, штанги, гири',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat2_310x270_b5b.jpg'
  },
  {
    title: 'Коньки',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat10_310x270_b5b.jpg'
  },
  {
    title: 'Стойки, стеллажи',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat8_310x270_b5b.jpg'
  },
  {
    title: 'Скутеры, мопеды',
    src: 'https://shop2full.demoultron.ru/assets/cache_image/images/categories/cat18_310x270_b5b.jpg'
  }
]

export default function Categories() {
  return (
    <div class="categories">
      <div class="container">
        <h2 class="categories__title title">Категории магазина</h2>
        <div class="categories__grid">
          {items.map((item) => (
            <a href="#" class="categories__item">
              <img class="categories__item-img" src={item.src} alt="#" />
              <h3 class="categories__item-title">{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
