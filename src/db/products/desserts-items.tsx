type DessertItem = {
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

const dessertItems: DessertItem[] = [
  {
    id: 'dessert-01',
    name: 'Пончик классический',
    description: 'Пончик классический',
    price: 119,
    is_promo: true,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: true,
    old_price: 135,
    promo_title: 'Выгода',
    img_url: '/desserts-photo/donut-classic.png'
  },
  {
    id: 'dessert-02',
    name: 'Пончик ванильный',
    description: 'Пончик ванильный',
    price: 135,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: false,
    old_price: 999,
    promo_title: '',
    img_url: '/desserts-photo/donut-vanil.png'
  },
  {
    id: 'dessert-03',
    name: 'Пончик карамельный',
    description: 'Пончик карамельный',
    price: 135,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: false,
    old_price: 9999,
    promo_title: 'Выгода',
    img_url: '/desserts-photo/donut-caramel.png'
  },
  {
    id: 'dessert-04',
    name: 'Пончик фисташковый',
    description: 'Пончик фисташковый',
    price: 135,
    is_promo: true,
    is_new: true,
    is_top: false,
    is_meatless: false,
    is_profit: false,
    old_price: 9999,
    promo_title: 'Новинка',
    img_url: '/desserts-photo/donut-pistachio.png'
  },
  {
    id: 'dessert-05',
    name: 'Пончик шоколадный',
    description: 'Пончик шоколадный',
    price: 135,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_meatless: false,
    is_profit: false,
    old_price: 9999,
    promo_title: '',
    img_url: '/desserts-photo/donut-choco.png'
  }
]

export default dessertItems