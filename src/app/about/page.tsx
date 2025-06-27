import { Metadata } from "next"

import Header from "@/components/header/header"
import About from "@/components/about/about"
import Footer from "@/components/footer/footer"

export const metadata: Metadata = {
  title: "💊 О нашей аптеке | Аптека Новосибирск | Круглосуточная доставка лекарств",
  description: "Информация о нашей сети аптек в Новосибирске. Мы предлагаем широкий ассортимент лекарств, медицинских товаров и профессиональные консультации фармацевтов.",
  alternates: {
    canonical: "/about",
  },
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
