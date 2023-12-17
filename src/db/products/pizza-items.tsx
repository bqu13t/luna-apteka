type PizzaItem = {
  id: string
  name: string
  description: string

  price_sm: number            // цена маленькой пиццы
  weight_sm: number           // вес маленькой пиццы
  meat_weight_sm: number      // вес мясной начинки в маленькой пицце
  cheese_weight_sm: number    // вес сырной начинки в маленькой пицце

  price_lg: number
  weight_lg: number           // вес большой пиццы
  meat_weight_lg: number      // вес мясной начинки в большой пицце
  cheese_weight_lg: number    // вес сырной начинки в большой пицце

  top_rate: number | null
  is_promo: boolean
  is_new: boolean
  is_top: boolean
  is_meatless: boolean
  is_profit: boolean

  old_price_sm: number
  old_price_lg: number
  promo_title: string

  img_url: string
}

const pizzaItems: PizzaItem[] = [
  {
    id: "pizza-05",
    name: "Пицбургер",
    description:
      "Нежное филе цыпленка, ломтики бекона, сыр моцарелла, томаты черри, маринованные огурчики, свежий красный лук и фирменный соус бургер. Попробуйте бургер в форме пиццы!",

    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: null,
    is_promo: true,
    is_new: true,
    is_top: false,
    is_meatless: false,
    is_profit: false,

    old_price_sm: 999,
    old_price_lg: 999,
    promo_title: "Новинка",
    img_url: "/pizza-photo/pizza-burger.png",
  },
  {
    id: "pizza-01",
    name: "Манхэттен",
    description:
      "Колбаска пепперони, сыр моцарелла, свежие томаты, свежие шампиньоны, маслины и фирменный томатный соус",

    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: 5,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_meatless: false,
    is_profit: false,

    old_price_sm: 999,
    old_price_lg: 999,
    promo_title: "Хит",
    img_url: "/pizza-photo/manhattan.png",
  },
  {
    id: "pizza-02",
    name: "Делюкс",
    description:
      "Копчено-вареное филе цыпленка, свиная грудинка, сочетание красного сыра чеддер и сыра моцарелла, свежий болгарский перчик и фирменный томатный соус",

    price_sm: 549,
    old_price_sm: 649,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    old_price_lg: 949,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: 2,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,

    promo_title: "Выгода",
    img_url: "/pizza-photo/deluxe.png",
  },
  {
    id: "pizza-03",
    name: "Копченый цыпленок",
    description:
      "Ароматное копченое филе цыпленка, сыр моцарелла, свежие шампиньоны, свежие томаты и фирменный томатный соус - идеальное сочетание для настоящих ценителей вкуса",

    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: 4,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_meatless: false,
    is_profit: false,

    old_price_sm: 999,
    old_price_lg: 999,
    promo_title: "Хит",
    img_url: "/pizza-photo/smoked-chicken.png",
  },
  {
    id: "pizza-04",
    name: "Барбекю",
    description:
      "Нежное филе цыпленка, пикантная колбаска чоризо, сыр моцарелла, вяленые томаты, свежий красный лук, сочетание фирменных соусов барбекю и бургер наполняют атмосферой летнего пикника",
    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: 1,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_meatless: false,
    is_profit: false,
    old_price_sm: 999,
    old_price_lg: 990,
    promo_title: "Хит",
    img_url: "/pizza-photo/bbq.png",
  },
  {
    id: "pizza-06",
    name: "Маргарита 🧀",
    description:
      "Много сыра моцарелла, свежие томаты, фирменный томатный соус и ароматный сухой чеснок - для любителей классического вкуса итальянской пиццы",
    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 0,
    cheese_weight_sm: 250,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 0,
    cheese_weight_lg: 400,

    top_rate: null,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: true,
    is_profit: false,

    old_price_sm: 999,
    old_price_lg: 990,
    promo_title: "Без мяса",
    img_url: "/pizza-photo/margarita.png",
  },
  {
    id: "pizza-07",
    name: "Острый микс 🌶",
    description:
      "Нежное филе цыпленка, сыр моцарелла, свежие томаты, свежий болгарский перчик и острые перчики Халапеньо, свежий красный лук и фирменный томатный соус для любителей пикантных вкусов",
    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: 3,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_meatless: false,
    is_profit: false,

    old_price_sm: 999,
    old_price_lg: 990,
    promo_title: "Хит",
    img_url: "/pizza-photo/spicy-mix.png",
  },
  {
    id: "pizza-08",
    name: "Четыре сыра 🧀",
    description:
      "Насыщенное сочетание красного сыра чеддер, сыра моцарелла, сливочного сыра с голубой плесенью, сыра пармезан и фирменного томатного соуса - погрузитесь в мир изысканных сыров",
    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: null,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: true,
    is_profit: false,

    old_price_sm: 999,
    old_price_lg: 990,
    promo_title: "Без мяса",
    img_url: "/pizza-photo/four-cheese.png",
  },
  {
    id: "pizza-09",
    name: "Гавайская 🍍",
    description:
      "Отличное сочетание ветчины, ананасов, сыра моцарелла и фирменного томатного соуса",
    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: null,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: false,

    old_price_sm: 999,
    old_price_lg: 990,
    promo_title: "",
    img_url: "/pizza-photo/hawaiian.png",
  },
  {
    id: "pizza-10",
    name: "Ким Чи",
    description:
      "Запеченное филе цыпленка, колбаска пепперони, сыр моцарелла, болгарский перец, вяленые томаты, свежий салат айсберг и фирменный томатный соус",
    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: null,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: false,

    old_price_sm: 999,
    old_price_lg: 990,
    promo_title: "",
    img_url: "/pizza-photo/kim-chee.png",
  },
  {
    id: "pizza-11",
    name: "Сливочный дуэт",
    description:
      "Нежное копчено-вареное филе цыпленка, сочетание красного сыра чеддер и сыра моцарелла, сочный болгарский перчик и фирменный томатный соус",
    price_sm: 549,
    weight_sm: 625,
    meat_weight_sm: 187.5,
    cheese_weight_sm: 187.5,

    price_lg: 849,
    weight_lg: 1000,
    meat_weight_lg: 300,
    cheese_weight_lg: 300,

    top_rate: null,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: false,

    old_price_sm: 999,
    old_price_lg: 990,
    promo_title: "",
    img_url: "/pizza-photo/cream-duet.png",
  },
]

export default pizzaItems
