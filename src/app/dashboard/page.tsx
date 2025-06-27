"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn !== "true") {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/login")
  }

  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>Добро пожаловать, admin!</h1>
        <button onClick={handleLogout}>Выйти</button>
      </main>
      <Footer />
    </>
  )
}