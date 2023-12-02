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
    description: 'Пышное заварное тесто, обжаренное до золотистой хрустящей корочки - отличное дополнение к утреннему кофе или сладкому перекусу в любое время дня',
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
    description: 'Нежное заварное тесто, наполненное ароматным ванильным кремом и покрытое мягкой ванильной глазурью. Каждый укус этого пончика наполнен нежным ванильным вкусом, который растает во рту, оставляя ощущение невероятного удовольствия',
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
    description: 'Нежное заварное тесто, наполненное ароматным карамельным кремом, обильно покрытое мягкой карамельной глазурью и украшенное карамельным топингом',
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
    description: 'Нежное пышное тесто, наполненное ароматным фисташковым кремом, обильно покрытое мягкой фисташковой глазурью и посыпанное шоколадной крошкой',
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
    description: 'Нежное пышное тесто, наполненное ароматным шоколадным кремом, обильно покрытое глазурью из темного шоколада и украшенное мягкими шоколадными стружками',
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