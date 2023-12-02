import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['cyrillic', 'latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: {
    template: '%s | lunafood.ru',
    default: 'Пицца Новосибирск — заказать с доставкой на дом бесплатно, доставка еды из пиццерии Луна Фуд'
  },
  description: '🍕 Закажи пиццу с бесплатной доставкой в Новосибирске за 30 минут. Купить недорогую еду в Новосибирске рядом с домом или офисом в пиццерии Луна Фуд. Оформи заказ на сайте lunafood.ru или по телефону 8-999-322-00-33',
  openGraph: {
    title:
      "Пицца Новосибирск — заказать с доставкой на дом бесплатно, доставка еды из пиццерии Луна Фуд",
    type: "website",
    description:
      "🍕 Закажи пиццу с бесплатной доставкой в Новосибирске за 30 минут. Купить недорогую еду в Новосибирске рядом с домом или офисом в пиццерии Луна Фуд. Оформи заказ на сайте lunafood.ru или по телефону 8-999-322-00-33",
    url: "https://lunafood.ru",
    siteName: "ЛунаФуд",
    locale: "ru_RU",
    images: [
      {
        url: "https://lunafood.ru/lunafood-ru.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  metadataBase: new URL("https://lunafood.ru"),
  alternates: {
    canonical: '/'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  )
}
