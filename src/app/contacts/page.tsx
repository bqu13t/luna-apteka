import { Metadata } from "next"

import Header from "@/components/header/header"
import Map from "@/components/contacts/map"
import Contacts from "@/components/contacts/contacts"
import Footer from "@/components/footer/footer"

export const metadata: Metadata = {
  title:
    "Номер телефона онлайн-аптеки в Новосибирске +7 (800) 800-80-80 — адрес аптеки на карте, часы работы аптеки",
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
