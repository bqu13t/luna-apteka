import { Metadata } from "next"

import Header from "@/components/header/header"
import Promo from "@/components/promo/promo"
import Footer from "@/components/footer/footer"

export const metadata: Metadata = {
  title: '🍕 Акции и скидки | Луна Фуд | Сеть пиццерий в Новосибирске'
}

export default function PromoPage() {
  return (
    <>
      <Header />
      <Promo />
      <Footer />
    </>
  )
}