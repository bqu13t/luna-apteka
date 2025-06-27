"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
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
      <main className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="/avatar-placeholder.png" // помести этот файл в public/
                alt="Аватар пользователя"
                width={96}
                height={96}
                className="rounded-full border-4 border-blue-500"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Добро пожаловать, <span className="text-blue-600">admin</span>!
            </h1>
            <p className="text-gray-500 mb-6">Вы находитесь в личном кабинете</p>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-medium transition"
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
