type PizzaItem = {
  id: string
  name: string
  description: string
  price: number
  is_promo: boolean
  is_new: boolean
  is_top: boolean
  is_meatless: boolean
  is_profit: boolean
  old_price: number
  promo_title: string
  img_url: string
}

const pizzaItems: PizzaItem[] = [
  {
    id: 'pizza-05',
    name: 'Пицбургер',
    description: 'Нежное филе ципленка, ломтики бекона, сыр моцарелла, томаты черри, маринованные огурчики, красный лук, фирменный соус бургер',
    price: 849,
    is_promo: true,
    is_new: true,
    is_top: false,
    is_meatless: false,
    is_profit: false,
    old_price: 990,
    promo_title: 'Новинка',
    img_url: '/pizza-photo/pizza-burger.png'
  },
  {
    id: 'pizza-01',
    name: 'Манхэттен',
    description: 'Колбаска перрерони, сыр моцарелла, свежие томаты, шампиньоны, маслины, фирменный томатный соус',
    price: 849,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_meatless: false,
    is_profit: false,
    old_price: 999,
    promo_title: 'Хит',
    img_url: '/pizza-photo/manhattan.png'
  },
  {
    id: 'pizza-02',
    name: 'Де Люкс',
    description: 'Копчено-вареное филе ципленка, грудинка, красный сыр чеддер, сыр моцарелла, болгарский перчик, фирменный томатный соус',
    price: 859,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,
    old_price: 949,
    promo_title: 'Выгода',
    img_url: '/pizza-photo/deluxe.png'
  },
  {
    id: 'pizza-03',
    name: 'Копченый цыпленок',
    description: 'Копченое филе ципленка, сыр моцарелла, шампиньоны, свежие томаты, фирменный томатный соус',
    price: 849,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_meatless: false,
    is_profit: false,
    old_price: 990,
    promo_title: 'Хит',
    img_url: '/pizza-photo/smoked-chicken.png'
  },
  {
    id: 'pizza-04',
    name: 'Барбекю',
    description: 'Нежное филе ципленка, колбаска чоризо, сыр моцарелла, вяленые томаты, красный лук, фирменные соусы барбекю и бургер',
    price: 849,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_meatless: false,
    is_profit: false,
    old_price: 990,
    promo_title: 'Хит',
    img_url: '/pizza-photo/bbq.png'
  },
  {
    id: 'pizza-06',
    name: 'Маргарита',
    description: 'Сыр моцарелла, свежие томаты, фирменный томатный соус, сухой чеснок',
    price: 849,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: true,
    is_profit: false,
    old_price: 990,
    promo_title: 'Без мяса',
    img_url: '/pizza-photo/margarita.png'
  },
  {
    id: 'pizza-07',
    name: 'Острый микс',
    description: 'Нежное филе ципленка, сыр моцарелла, свежие томаты, болгарский перец, перчики Халапеньо, красный лук, фирменный томатный соус',
    price: 849,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_meatless: false,
    is_profit: false,
    old_price: 990,
    promo_title: 'Хит',
    img_url: '/pizza-photo/spicy-mix.png'
  },
  {
    id: 'pizza-08',
    name: 'Четыре сыра',
    description: 'Красный сыр чеддер, сыр моцарелла, сливочный сыр с голубой плесенью, сыр пармезан, фирменный томатный соус',
    price: 849,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: true,
    is_profit: false,
    old_price: 990,
    promo_title: 'Без мяса',
    img_url: '/pizza-photo/four-cheese.png'
  },
  {
    id: 'pizza-09',
    name: 'Гавайская',
    description: 'Ветчина, ананасы, сыр моцарелла, фирменный томатный соус',
    price: 849,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: false,
    old_price: 990,
    promo_title: '',
    img_url: '/pizza-photo/hawaiian.png'
  },
  {
    id: 'pizza-10',
    name: 'Ким Чи',
    description: 'Запеченное филе ципленка, колбаска пепперони, сыр моцарелла, болгарский перец,  вяленые томаты, салат айсберг, фирменный томатный соус',
    price: 849,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: false,
    old_price: 990,
    promo_title: '',
    img_url: '/pizza-photo/kim-chee.png'
  },
  {
    id: 'pizza-11',
    name: 'Сливочный дуэт',
    description: 'Копчено-вареное филе ципленка, красный сыр чеддер, сыр моцарелла, болгарский перчик, фирменный томатный соус',
    price: 849,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: false,
    old_price: 990,
    promo_title: '',
    img_url: '/pizza-photo/cream-duet.png'
  },
]

export default pizzaItems