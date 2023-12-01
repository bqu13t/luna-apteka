'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog, Popover } from "@headlessui/react"
import { useState, useRef } from "react"
import clsx from "clsx"
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  ArrowRightCircleIcon,
  RocketLaunchIcon,
  MapPinIcon,
  UserGroupIcon,
  PhoneIcon
} from "@heroicons/react/24/solid";

import LogoSection from "@/components/header/header-nav/logo-section";

export default function Header() {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav aria-label="Global">
        <LogoSection onClick={() => setMobileMenuOpen(false)} />
        <button
          type="button"
          className="header__nav__burger-button on-hover on-tap"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Открыть главное меню</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <Popover.Group className="header__nav__desktop-menu">
          <Link href="/promo" className={clsx(
            "on-hover on-tap", {
            "current-path": pathName === '/promo',
          })}>
            Акции
          </Link>
          <Link href="/contacts" className={clsx(
            "on-hover on-tap", {
            "current-path": pathName === '/contacts',
          })}>
            Контакты
          </Link>
          <Link href="/work" className={clsx(
            "on-hover on-tap", {
            "current-path": pathName === '/work',
          })}>
            Работа в ЛунаФуд
          </Link>
          <Link href="/about" className={clsx(
            "on-hover on-tap", {
            "current-path": pathName === '/about',
          })}>
            О нас
          </Link>
        </Popover.Group>
        <div className="header__nav__desktop-menu">
          <Link href="/login" className="sr-only on-hover on-tap">Войти <span aria-hidden="true">&rarr;</span></Link>
          <Link href="tel:+79993220033" className="flex gap-2 on-hover on-tap">
            <PhoneIcon className="h-6 w-6" aria-hidden="true" />
            8 999 322 00 33
          </Link>
        </div>
      </nav>

      <Dialog as="div" className="header__mobile-menu" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" aria-hidden="true" />
        <Dialog.Panel className="header__mobile-menu__panel">
          <div className="header__mobile-menu__panel__header">
            <LogoSection onClick={() => setMobileMenuOpen(false)} />
            <button type="button" className="header__nav__button-close on-hover" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Закрыть главное меню</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="header__mobile-menu__panel__links">
            <Link href="tel:+79993220033" className="link on-hover on-tap">
              <PhoneIcon className="link__icon" aria-hidden="true" />
              <span className="clipped-text font-bold">
                8 999 322 00 33
              </span>
            </Link>
            <Link href="login" className="sr-only link on-hover on-tap">
              <ArrowRightCircleIcon className="link__icon" aria-hidden="true" />
              <span className="block">Войти</span>
            </Link>
            <Link href="promo" className="link on-hover on-tap">
              <RocketLaunchIcon className="link__icon" aria-hidden="true" />
              <span className="block">Акции</span>
            </Link>
            <Link href="contacts" className="link on-hover on-tap">
              <MapPinIcon className="link__icon" aria-hidden="true" />
              <span className="block">Контакты</span>
            </Link>
            <Link href="work" className="link on-hover on-tap">
              <UserGroupIcon className="link__icon" aria-hidden="true" />
              <span className="block">Работа в ЛунаФуд</span>
            </Link>
            <Link href="about"
              className="link on-hover on-tap">
              <MoonIcon className="link__icon" aria-hidden="true" />
              <span className="block">О нас</span>
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
