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
    description: 'Нежное филе цыпленка, аппетитные ломтики бекона, богатый слой сыра моцарелла, сочные томаты черри, хрустящие маринованные огурчики, свежий красный лук и фирменный соус бургер. Попробуйте бургер в форме пиццы!',
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
    description: 'Сочная колбаска пепперони, обильный слой сыра моцарелла, свежие томаты, нежные шампиньоны, маслины и фирменный томатный соус',
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
    name: 'Делюкс',
    description: 'Нежное копчено-вареное филе цыпленка, аппетитная грудинка, сочетание красного сыра чеддер и сыра моцарелла, свежий болгарский перчик и фирменный томатный соус',
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
    description: 'Ароматное копченое филе цыпленка, много моцареллы, свежие шампиньоны, сочные томаты и фирменный томатный соус - идеальное сочетание для настоящих ценителей вкуса',
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
    description: 'Нежное филе цыпленка, пикантная колбаска чоризо, обильный слой моцареллы, ароматные вяленые томаты, свежий красный лук, неповторимое сочетание фирменных соусов барбекю и бургер создают атмосферу летнего пикника прохладной зимой',
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
    description: 'Обилие сыра моцарелла, свежие томаты, фирменный томатный соус и ароматный сухой чеснок - для любителей классического вкуса итальянской пиццы',
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
    description: 'Нежное филе цыпленка, много моцареллы, свежие томаты, сочетание ароматного болгарского перца и острых перчиков Халапеньо, свежий красный лук и фирменный томатный соус для любителей пикантных вкусов',
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
    description: 'Насыщенное сочетание красного сыра чеддер, сыра моцарелла, сливочного сыра с голубой плесенью, сыра пармезан и фирменного томатного соуса. Погрузитесь в мир изысканных сыров',
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
    description: 'Отличное сочетание ветчины, ананасов, сыра моцарелла и фирменного томатного соуса',
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
    description: 'Нежное запеченное филе цыпленка, ароматная колбаска пепперони, обилие моцареллы, сочный болгарский перец, вяленые томаты, свежий салат айсберг и фирменный томатный соус создают неповторимый вкус, оставляющий незабываемое впечатление',
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
    description: 'Нежное копчено-вареное филе цыпленка, сочетание красного сыра чеддер и сыра моцарелла, сочный болгарский перчик и фирменный томатный соус',
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