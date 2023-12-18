type ComboItem = {
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

const comboItems: ComboItem[] = [
  {
    id: "combo-01",
    name: "3 мясные пиццы",
    description: "Барбекю, Манхэттен, ДеЛюкс",
    price: 1999,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,
    old_price: 2547,
    promo_title: "Выгода",
    img_url: "/combo-photo/combo-1.png",
  },
  {
    id: "pizza-02",
    name: "2 сырные пиццы и 3 напитка",
    description: "Пиццы Маргарита и 4 сыра, 3 напитка 0,5л на выбор",
    price: 1699,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,
    old_price: 1968,
    promo_title: "Выгода",
    img_url: "/combo-photo/combo-2.png",
  },
  {
    id: "pizza-03",
    name: "🍍 Гавайский микс",
    description:
      "Гавайская пицца с ананасами и ананасовый сок! Идеально, когда хочешь сладенького, но не знаешь чего именно)",
    price: 939,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,
    old_price: 1039,
    promo_title: "Выгода",
    img_url: "/combo-photo/combo-3.png",
  },
  {
    id: "pizza-04",
    name: "Топ 5 комбо",
    description:
      "5 пицц, покорившие ваши сердечки, в одном комбо! Барбекю, Делюкс, Острый Микс, Копченый цыпленок, Манхэттен",
    price: 3199,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,
    old_price: 4245,
    promo_title: "Выгода",
    img_url: "/combo-photo/combo-4.png",
  },
]

export default comboItems
