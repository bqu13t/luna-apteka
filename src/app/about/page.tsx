import { Metadata } from "next"

import Header from "@/components/header/header"
import About from "@/components/about/about"
import Footer from "@/components/footer/footer"

export const metadata: Metadata = {
  title: '🍕 О нас | Луна Фуд | Сеть пиццерий в Новосибирске'
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  )
}