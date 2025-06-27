type NavItem = {
  id: string
  to: string
  name: string
}

const navItems: NavItem[] = [
  { id: "nav1", to: "over-the-counter", name: "Без рецепта" },
  { id: "nav2", to: "prescription", name: "С рецептом" },
  { id: "nav3", to: "vitamins", name: "Витамины" },
  { id: "nav4", to: "cosmetics", name: "Косметика и уход" },
  { id: "nav5", to: "medical-devices", name: "Медтехника" }
]

export default navItems