import otcMedicines from "@/db/products/medicine-items"

type TopRateMedicine = {
  id: string
  name: string
  description: string

  price_sm: number            // цена малой упаковки
  weight_sm: number           // вес малой упаковки (г)
  active_component_sm: number // активное вещество (мг)
  dosage_sm: number           // количество доз в упаковке

  price_lg: number            // цена большой упаковки
  weight_lg: number           // вес большой упаковки (г)
  active_component_lg: number // активное вещество (мг)
  dosage_lg: number           // количество доз в упаковке

  rating: number | null       // рейтинг (0-5)
  is_promo: boolean           // участвует в акции
  is_new: boolean             // новинка
  is_top: boolean             // топ продаж
  is_herbal: boolean          // растительный препарат
  is_profit: boolean          // специальное предложение

  old_price_sm: number        // старая цена малой упаковки
  old_price_lg: number        // старая цена большой упаковки
  promo_title: string         // название акции

  img_url: string             // изображение препарата
  category: string            // категория (антибиотики, витамины и т.д.)
}

const topRateMedicines: TopRateMedicine[] = []

// Фильтрация и сортировка препаратов
otcMedicines
  .filter(item => item.rating !== null && !topRateMedicines.includes(item))
  .forEach(item => topRateMedicines.push(item))

// Сортировка по рейтингу (по убыванию)
topRateMedicines.sort((a, b) => {
  if (a.rating! > b.rating!) return 1  // изменено на -1 для сортировки по убыванию
  if (a.rating! < b.rating!) return -1
  return 0
})

const top5Medicines = topRateMedicines.slice(0, 5)

export default top5Medicines