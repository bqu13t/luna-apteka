import { Metadata } from "next"

import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

export const metadata: Metadata = {
  title: 'Войти в личный кабинет',
  alternates: {
    canonical: '/login'
  },
}

export default function LoginPage() {
  return (
    <>
      <Header />
      <h1>Личный кабинет ЛунаФуд</h1>
      <h2>Войти в личный кабинет</h2>
      <Footer />
    </>
  )
}