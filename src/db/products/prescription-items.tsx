type PrescriptionItem = {
  id: string          // уникальный идентификатор (начинается с "med-")
  name: string        // название препарата
  description: string // краткое описание

  price_sm: number            // цена малой упаковки
  weight_sm: number           // вес малой упаковки в граммах
  active_component_sm: number // количество активного вещества в малой упаковке (мг)
  dosage_sm: number           // количество доз/таблеток в малой упаковке

  price_lg: number            // цена большой упаковки
  weight_lg: number           // вес большой упаковки в граммах
  active_component_lg: number // количество активного вещества в большой упаковке (мг)
  dosage_lg: number           // количество доз/таблеток в большой упаковке

  rating: number | null       // рейтинг препарата (0-5)
  is_promo: boolean           // участвует в акциях
  is_new: boolean             // новинка
  is_top: boolean             // топ продаж
  is_herbal: boolean          // растительного происхождения
  is_profit: boolean          // специальное предложение

  old_price_sm: number        // старая цена малой упаковки (для отображения скидки)
  old_price_lg: number        // старая цена большой упаковки
  promo_title: string         // название акции ("Выгода", "Новинка" и т.д.)

  img_url: string             // URL изображения препарата
  category: string            // категория (например: "антибиотики", "витамины")
  manufacturer: string        // производитель
  requires_prescription: boolean // требуется рецепт
}

const prescriptionDrugs: PrescriptionItem[] = [
  {
    id: "rx-001",
    name: "Амоксиклав",
    description: "Антибактериальный препарат широкого спектра действия",
    price_sm: 350,
    weight_sm: 30,
    active_component_sm: 875, // амоксициллин + клавулановая кислота
    dosage_sm: 14,
    price_lg: 650,
    weight_lg: 60,
    active_component_lg: 1750,
    dosage_lg: 28,
    rating: 4.7,
    is_promo: false,
    is_new: false,
    is_top: true,
    is_herbal: false,
    is_profit: false,
    old_price_sm: 0,
    old_price_lg: 0,
    promo_title: "",
    img_url: "/drugs/amoksiklav.webp",
    category: "антибиотики",
    manufacturer: "Sandoz",
    requires_prescription: true
  },
  {
    id: "rx-002",
    name: "Нолипрел",
    description: "Комбинированный антигипертензивный препарат",
    price_sm: 1200,
    weight_sm: 28,
    active_component_sm: 5, // периндоприл + индапамид
    dosage_sm: 28,
    price_lg: 2200,
    weight_lg: 56,
    active_component_lg: 10,
    dosage_lg: 56,
    rating: 4.5,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_herbal: false,
    is_profit: true,
    old_price_sm: 1400,
    old_price_lg: 2500,
    promo_title: "Выгода",
    img_url: "/drugs/amoksiklav.webp",
    category: "кардиология",
    manufacturer: "Servier",
    requires_prescription: true
  },
  {
    id: "rx-003",
    name: "Сертралин",
    description: "Антидепрессант из группы СИОЗС",
    price_sm: 800,
    weight_sm: 20,
    active_component_sm: 50,
    dosage_sm: 30,
    price_lg: 1500,
    weight_lg: 40,
    active_component_lg: 100,
    dosage_lg: 60,
    rating: 4.3,
    is_promo: false,
    is_new: true,
    is_top: false,
    is_herbal: false,
    is_profit: false,
    old_price_sm: 0,
    old_price_lg: 0,
    promo_title: "Новинка",
    img_url: "/drugs/amoksiklav.webp",
    category: "антидепрессанты",
    manufacturer: "Зентива",
    requires_prescription: true
  },
  {
    id: "rx-004",
    name: "Ксарелто",
    description: "Прямой ингибитор фактора Ха",
    price_sm: 2500,
    weight_sm: 28,
    active_component_sm: 20,
    dosage_sm: 28,
    price_lg: 4800,
    weight_lg: 56,
    active_component_lg: 20,
    dosage_lg: 56,
    rating: 4.8,
    is_promo: false,
    is_new: false,
    is_top: true,
    is_herbal: false,
    is_profit: false,
    old_price_sm: 0,
    old_price_lg: 0,
    promo_title: "",
    img_url: "/drugs/amoksiklav.webp",
    category: "антикоагулянты",
    manufacturer: "Bayer",
    requires_prescription: true
  },
  {
    id: "rx-005",
    name: "Симбикорт",
    description: "Комбинированный препарат для лечения астмы",
    price_sm: 1800,
    weight_sm: 120,
    active_component_sm: 320, // будесонид + формотерол
    dosage_sm: 120,
    price_lg: 3400,
    weight_lg: 240,
    active_component_lg: 640,
    dosage_lg: 240,
    rating: 4.6,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_herbal: false,
    is_profit: true,
    old_price_sm: 2000,
    old_price_lg: 3800,
    promo_title: "Выгода",
    img_url: "/drugs/amoksiklav.webp",
    category: "пульмонология",
    manufacturer: "AstraZeneca",
    requires_prescription: true
  },
  {
    id: "rx-006",
    name: "Лираглутид",
    description: "ГПП-1 агонист для лечения диабета 2 типа",
    price_sm: 9500,
    weight_sm: 18,
    active_component_sm: 18,
    dosage_sm: 3,
    price_lg: 18000,
    weight_lg: 36,
    active_component_lg: 36,
    dosage_lg: 6,
    rating: 4.4,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_herbal: false,
    is_profit: false,
    old_price_sm: 0,
    old_price_lg: 0,
    promo_title: "",
    img_url: "/drugs/amoksiklav.webp",
    category: "диабет",
    manufacturer: "Novo Nordisk",
    requires_prescription: true
  },
  {
    id: "rx-007",
    name: "Эутирокс",
    description: "Гормон щитовидной железы",
    price_sm: 150,
    weight_sm: 25,
    active_component_sm: 100, // левотироксин натрия
    dosage_sm: 50,
    price_lg: 280,
    weight_lg: 50,
    active_component_lg: 200,
    dosage_lg: 100,
    rating: 4.2,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_herbal: false,
    is_profit: false,
    old_price_sm: 0,
    old_price_lg: 0,
    promo_title: "",
    img_url: "/drugs/amoksiklav.webp",
    category: "эндокринология",
    manufacturer: "Merck",
    requires_prescription: true
  },
  {
    id: "rx-008",
    name: "Омез",
    description: "Ингибитор протонной помпы",
    price_sm: 300,
    weight_sm: 30,
    active_component_sm: 20, // омепразол
    dosage_sm: 30,
    price_lg: 550,
    weight_lg: 60,
    active_component_lg: 40,
    dosage_lg: 60,
    rating: 4.5,
    is_promo: true,
    is_new: false,
    is_top: true,
    is_herbal: false,
    is_profit: true,
    old_price_sm: 350,
    old_price_lg: 650,
    promo_title: "Выгода",
    img_url: "/drugs/amoksiklav.webp",
    category: "гастроэнтерология",
    manufacturer: "Dr. Reddy's",
    requires_prescription: true
  },
  {
    id: "rx-009",
    name: "Фенибут",
    description: "Ноотропное и анксиолитическое средство",
    price_sm: 450,
    weight_sm: 20,
    active_component_sm: 250,
    dosage_sm: 20,
    price_lg: 850,
    weight_lg: 40,
    active_component_lg: 500,
    dosage_lg: 40,
    rating: 4.0,
    is_promo: false,
    is_new: true,
    is_top: false,
    is_herbal: false,
    is_profit: false,
    old_price_sm: 0,
    old_price_lg: 0,
    promo_title: "Новинка",
    img_url: "/drugs/amoksiklav.webp",
    category: "неврология",
    manufacturer: "Олайнфарм",
    requires_prescription: true
  },
  {
    id: "rx-010",
    name: "Ксанакс",
    description: "Анксиолитик из группы бензодиазепинов",
    price_sm: 1200,
    weight_sm: 30,
    active_component_sm: 1, // алпразолам
    dosage_sm: 30,
    price_lg: 2300,
    weight_lg: 60,
    active_component_lg: 2,
    dosage_lg: 60,
    rating: 4.1,
    is_promo: false,
    is_new: false,
    is_top: false,
    is_herbal: false,
    is_profit: false,
    old_price_sm: 0,
    old_price_lg: 0,
    promo_title: "",
    img_url: "/drugs/amoksiklav.webp",
    category: "психотропные",
    manufacturer: "Pfizer",
    requires_prescription: true
  }
];

export default prescriptionDrugs;