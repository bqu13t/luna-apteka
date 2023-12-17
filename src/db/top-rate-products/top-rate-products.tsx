import pizzaItems from "@/db/products/pizza-items"

type TopRateItem = {
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

const topRateItems: TopRateItem[] = []

pizzaItems
  .filter((item) => item.top_rate !== null && !topRateItems.includes(item))
  .forEach((item) => topRateItems.push(item))

topRateItems.sort((a, b) => {
  if (a.top_rate! > b.top_rate!) return 1
  if (a.top_rate! < b.top_rate!) return -1
  return 0
})

export default topRateItems
