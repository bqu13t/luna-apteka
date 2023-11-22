import { Metadata } from "next"

import Header from "@/components/header/header"

export const metadata: Metadata = {
  title: '🍕 Акции и скидки | Луна Фуд | Сеть пиццерий в Новосибирске'
}

export default function PromoPage() {
  return (
    <>
      <Header />
      <h1>Promo</h1>
    </>
  )
}