import { Metadata } from "next"

import Header from "@/components/header/header"

export const metadata: Metadata = {
  title: '🍕 О нас | Луна Фуд | Сеть пиццерий в Новосибирске'
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <h1>About</h1>
    </>

  )
}