import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | apteka-novosibirsk.ru",
    default: "Аптека Новосибирск — онлайн-заказ лекарств с доставкой и самовывозом",
  },
  description: "💊 Закажите лекарства и товары для здоровья с бесплатной доставкой по Новосибирску или самовывозом из аптек-партнёров. Низкие цены, наличие аналогов, бронирование онлайн. Работаем круглосуточно! apteka-novosibirsk.ru",
  openGraph: {
    title: "Аптека Новосибирск — доставка лекарств и товаров для здоровья",
    type: "website",
    description: "💊 Онлайн-заказ лекарств с доставкой на дом или самовывозом в Новосибирске. Широкий ассортимент, акции, консультация фармацевта. Доставка 24/7. Тел: +7 (XXX) XXX-XX-XX",
    url: "https://apteka-novosibirsk.ru",
    siteName: "Аптека Новосибирск",
    locale: "ru_RU",
    images: [
      {
        url: "https://apteka-novosibirsk.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Онлайн-аптека Новосибирск",
      },
    ],
  },
  metadataBase: new URL("https://apteka-novosibirsk.ru"),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <Script src="/scripts/yandex.js" />
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  )
}
