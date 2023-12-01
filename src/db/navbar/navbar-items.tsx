type NavItem = {
  id: string
  to: string
  name: string
}

const navItems: NavItem[] = [
  { id: 'nav1', to: 'pizza', name: 'Пицца' },
  { id: 'nav3', to: 'combo', name: 'Комбо' },
  { id: 'nav5', to: 'desserts', name: 'Десерты' },
  { id: 'nav2', to: 'drinks', name: 'Напитки' }
]

export default navItems