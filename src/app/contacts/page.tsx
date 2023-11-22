import { Metadata } from "next"

import Header from "@/components/header/header"

export const metadata: Metadata = {
  title: 'Номер телефона пиццерии в Новосибирске — адрес пиццерии на карте, часы работы Луна Фуд'
}

export default function ContactsPage() {
  return (
    <>
      <Header />
      <h1>Contacts</h1>
    </>
  )
}