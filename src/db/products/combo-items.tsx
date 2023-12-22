type ComboItem = {
  id: string
  name: string
  description: string

  price_sm: number
  old_price_sm: number
  weight_sm: number
  meat_weight_sm: number
  cheese_weight_sm: number

  price_lg: number
  old_price_lg: number
  weight_lg: number
  meat_weight_lg: number
  cheese_weight_lg: number

  is_promo: boolean
  is_new: boolean
  is_top: boolean
  is_meatless: boolean
  is_profit: boolean

  promo_title: string
  img_url: string
}

const comboItems: ComboItem[] = [
  {
    id: "combo-01",
    name: "3 мясные пиццы",
    description: "Пиццы Барбекю, Манхэттен и Делюкс, для небольшой компании пок",

    price_sm: 370 + 520 + 470,
    old_price_sm: 400 + 550 + 500,
    weight_sm: 561 + 573 + 588,
    meat_weight_sm: 65 + 60 + 125,
    cheese_weight_sm: 130 + 130 + 130,

    price_lg: 950 + 950 + 950,
    old_price_lg: 1000 + 1000 + 1000,
    weight_lg: 1170 + 1250 + 1176,
    meat_weight_lg: 130 + 120 + 250,
    cheese_weight_lg: 260 + 260 + 260,

    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,

    promo_title: "Выгода",
    img_url: "/combo-photo/combo-1.png",
  },
  {
    id: "combo-02",
    name: "2 сырные пиццы и 3 напитка",
    description: "Пиццы Маргарита и 4 сыра, 3 напитка 0,5л на выбор",

    price_sm: 1270,
    old_price_sm: 1200 + 270,
    weight_sm: 544 + 438,
    meat_weight_sm: 0,
    cheese_weight_sm: 150 + 130,

    price_lg: 2120,
    old_price_lg: 800 + 1350 + 270,
    weight_lg: 1086 + 970,
    meat_weight_lg: 0,
    cheese_weight_lg: 300 + 260,

    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,

    promo_title: "Выгода",
    img_url: "/combo-photo/combo-2.png",
  },
  {
    id: "combo-03",
    name: "🍍 Гавайский микс",
    description:
      "Гавайская пицца с ананасами и ананасовый сок! Идеально, когда хочешь сладенького, но не знаешь чего именно)",

    price_sm: 590,
    old_price_sm: 450 + 190,
    weight_sm: 578,
    meat_weight_sm: 55,
    cheese_weight_sm: 130,

    price_lg: 1100,
    old_price_lg: 1190,
    weight_lg: 1150,
    meat_weight_lg: 110,
    cheese_weight_lg: 260,

    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,

    promo_title: "Выгода",
    img_url: "/combo-photo/combo-3.png",
  },
  {
    id: "combo-04",
    name: "Топ 5 комбо",
    description:
      "5 пицц, покорившие ваши сердечки, в одном комбо! Барбекю, Делюкс, Острый Микс, Копченый цыпленок, Манхэттен",

    price_sm: 2199,
    old_price_sm: 400 + 500 + 550 + 700 + 550,
    weight_sm: 550 + 585 + 650 + 600 + 600,
    meat_weight_sm: 65 + 125 + 80 + 80 + 60,
    cheese_weight_sm: 130 + 130 + 100 + 130 + 130,

    price_lg: 4500,
    old_price_lg: 1000 + 1000 + 1000 + 1500 + 1000,
    weight_lg: 1100 + 1170 + 1310 + 1080 + 1200,
    meat_weight_lg: 130 + 250 + 160 + 160 + 120,
    cheese_weight_lg: 260 + 260 + 200 + 260 + 260,

    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,

    promo_title: "Выгода",
    img_url: "/combo-photo/combo-4.png",
  },
]

export default comboItems
