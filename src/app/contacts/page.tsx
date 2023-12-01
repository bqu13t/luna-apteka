import { Metadata } from "next"

import Header from "@/components/header/header"
import Map from "@/components/contacts/map"
import MapHider from "@/components/contacts/map-hider"
import Contacts from "@/components/contacts/contacts"
import Footer from "@/components/footer/footer"
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid"

export const metadata: Metadata = {
  title: 'Номер телефона пиццерии в Новосибирске — адрес пиццерии на карте, часы работы Луна Фуд'
}

export default function ContactsPage() {

  return (
    <>
      <Map />
      <MapHider />
      <div className="contacts-container">
        <Header />
        <Contacts />
      </div>
      <Footer />
    </>
  )
}
