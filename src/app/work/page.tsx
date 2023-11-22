import { Metadata } from "next"

import Header from "@/components/header/header"

export const metadata: Metadata = {
  title: 'Работа в ЛунаФуд'
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <h1>Work</h1>
    </>
  )
}