"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog, Popover } from "@headlessui/react"
import { useEffect, useState } from "react"
import clsx from "clsx"
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  ArrowRightCircleIcon,
  RocketLaunchIcon,
  MapPinIcon,
  UserGroupIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid"

import LogoSection from "@/components/header/header-nav/logo-section"

export default function Header() {
  const pathName = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const status = localStorage.getItem("isLoggedIn")
      setIsLoggedIn(status === "true")
    }
  }, [])

  return (
    <header className="header">
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/95785139" className="absolute top-[-9999px] w-[1px] h-[1px]" alt="ym" />
        </div>
      </noscript>

      <nav className="header__nav" aria-label="Global">
        <LogoSection onClick={() => setMobileMenuOpen(false)} />
        <button
          type="button"
          className="header__nav__burger-button on-hover on-tap"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Открыть главное меню</span>
          <Bars3Icon width={24} height={24} className="svg-icon" aria-hidden="true" />
        </button>

        <Popover.Group className="header__nav__desktop-menu">
          <Link href="/" className={clsx("on-hover on-tap", { "current-path": pathName === "/" })}>Главная</Link>
          <Link href="/promo" className={clsx("on-hover on-tap", { "current-path": pathName === "/promo" })}>Акции</Link>
          <Link href="/contacts" className={clsx("on-hover on-tap", { "current-path": pathName === "/contacts" })}>Контакты</Link>
          <Link href="/work" className={clsx("on-hover on-tap", { "current-path": pathName === "/work" })}>Работа в Аптеке</Link>
          <Link href="/about" className={clsx("on-hover on-tap", { "current-path": pathName === "/about" })}>О нас</Link>
        </Popover.Group>

        <div className="header__nav__desktop-menu">
          {isLoggedIn ? (
            <Link href="/dashboard" className="login-section on-hover on-tap">
              Кабинет <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <Link href="/login" className="login-section on-hover on-tap">
              Войти <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
          <a href="tel:+79993220033" className="login-section on-hover on-tap">
            +7 (999) 999-99-99
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="header__mobile-menu"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" aria-hidden="true" />
        <Dialog.Panel className="header__mobile-menu__panel" onClick={() => setMobileMenuOpen(false)}>
          <div className="header__mobile-menu__panel__header">
            <LogoSection onClick={() => setMobileMenuOpen(false)} />
            <button
              type="button"
              className="header__nav__button-close on-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Закрыть главное меню</span>
              <XMarkIcon width={24} height={24} className="svg-icon" aria-hidden="true" />
            </button>
          </div>
          <div className="header__mobile-menu__panel__links">
            <a href="tel:+79993220033" className="link on-hover on-tap">
              <PhoneIcon className="link__icon" aria-hidden="true" />
              <span className="clipped-text">+7 (999) 999-99-99</span>
            </a>
            <Link href="/" className="link on-hover on-tap">
              <ArrowRightCircleIcon className="link__icon" aria-hidden="true" />
              <span className="block">Главная</span>
            </Link>
            {isLoggedIn ? (
              <Link href="/dashboard" className="link on-hover on-tap">
                <ArrowRightCircleIcon className="link__icon" aria-hidden="true" />
                <span className="block">Кабинет</span>
              </Link>
            ) : (
              <Link href="/login" className="link on-hover on-tap">
                <ArrowRightCircleIcon className="link__icon" aria-hidden="true" />
                <span className="block">Войти</span>
              </Link>
            )}
            <Link href="/promo" className="link on-hover on-tap">
              <RocketLaunchIcon className="link__icon" aria-hidden="true" />
              <span className="block">Акции</span>
            </Link>
            <Link href="/contacts" className="link on-hover on-tap">
              <MapPinIcon className="link__icon" aria-hidden="true" />
              <span className="block">Контакты</span>
            </Link>
            <Link href="/work" className="link on-hover on-tap">
              <UserGroupIcon className="link__icon" aria-hidden="true" />
              <span className="block">Работа в Аптеке</span>
            </Link>
            <Link href="/about" className="link on-hover on-tap">
              <MoonIcon className="link__icon" aria-hidden="true" />
              <span className="block">О нас</span>
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
