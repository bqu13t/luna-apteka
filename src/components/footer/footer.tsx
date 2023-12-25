"use client"

import Link from "next/link"
import LunaLogoFooter from "../icons/luna-logo-footer"
import { animateScroll as scroll } from "react-scroll"

const scrollToTop = () => {
  scroll.scrollToTop()
}

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__links">
        <div className="flex items-center gap-2">
          <LunaLogoFooter />
          <span className="font-bold"> © 2024</span>
          <h2 className="sr-only">ЛунаФуд © 2024</h2>
        </div>

        <ul>
          <li>
            <Link
              href="/"
              onClick={scrollToTop}
            >
              Главная
            </Link>
          </li>
          <li className="sr-only">
            <Link href="promo">Акции</Link>
          </li>
          <li>
            <Link href="contacts">Контакты</Link>
          </li>
          <li className="sr-only">
            <Link href="work">Работа в ЛунаФуд</Link>
          </li>
          <li className="sr-only">
            <Link href="about">О нас</Link>
          </li>
        </ul>
      </section>
      <section className="footer__links">
        <h2 className="text-xl font-bold">Как нас найти</h2>
        <ul>
          <li>Метро Заельцовская</li>
          <li>Новосибирск, Дачная 60к14, 1 этаж торгового центра</li>
          <li>
            <a href="tel:+79993220033">+7 (999) 322-00-33</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
