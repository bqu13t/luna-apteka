import { Metadata } from "next"

import Header from "@/components/header/header"
import Work from "@/components/work/work"
import Footer from "@/components/footer/footer"

export const metadata: Metadata = {
  title: "Работа в Аптеке Новосибирск | Вакансии и условия труда",
  alternates: {
    canonical: "/work",
  },
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <Work />
      <Footer />
    </>
  )
}
