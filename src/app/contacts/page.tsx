import { Metadata } from "next"

import Header from "@/components/header/header"
import Map from "@/components/contacts/map"
import Contacts from "@/components/contacts/contacts"
import Footer from "@/components/footer/footer"

export const metadata: Metadata = {
  title:
    "Номер телефона пиццерии в Новосибирске +7 (999) 322-00-33 — адрес пиццерии на карте, часы работы Луна Фуд",
  alternates: {
    canonical: "/contacts",
  },
}

export default function ContactsPage() {
  return (
    <>
      <Map />
      <div className="contacts-container">
        <Header />
        <Contacts />
      </div>
      <Footer />
    </>
  )
}
