import { Metadata } from "next"

import Header from "@/components/header/header"
import Work from "@/components/work/work"
import Footer from "@/components/footer/footer"

export const metadata: Metadata = {
  title: 'Работа в ЛунаФуд'
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