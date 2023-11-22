import { Metadata } from "next"

import Header from "@/components/header/header"

export const metadata: Metadata = {
  title: 'Войти в личный кабинет'
}

export default function LoginPage() {
  return (
    <>
      <Header />
      <h1>Login</h1>
    </>
  )
}