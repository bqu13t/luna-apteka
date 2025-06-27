"use client"

import Link from "next/link"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { useEffect } from "react"
import { useCart } from "@/db/cart/cart-store"
import { usePathname } from "next/navigation"

import LunaIcon from "@/components/icons/luna-icon"
import navItems from "@/db/navbar/navbar-items"

export default function HomePageNav() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".home-page .main__nav")
      const navList = document.querySelector(".home-page .main__nav__list")
      const activeLink = nav?.querySelector(".active-link")
      const navPosition = nav?.getBoundingClientRect()

      if (navPosition && nav && navList) {
        if (navPosition!.top <= 1 && !nav!.classList.contains("is-pinned")) {
          nav!.classList.add("is-pinned")
        } else if (
          navPosition!.top > 1 &&
          nav!.classList.contains("is-pinned")
        ) {
          nav!.classList.remove("is-pinned")
        }

        if (activeLink) {
          const navRect = navList!.getBoundingClientRect()
          const linkRect = activeLink.getBoundingClientRect()

          if (linkRect.left < navRect.left) {
            navList!.scrollLeft -= navRect.left - linkRect.left
          } else if (linkRect.right > navRect.right) {
            navList!.scrollLeft += linkRect.right - navRect.right
          }
        }
      }
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <nav className="main__nav flex items-center justify-between">
      <Link href="/" className="main__nav__logo" onClick={scrollToTop}>
        <LunaIcon />
        <span className="sr-only">Вернуться к началу страницы</span>
      </Link>

      <ul className="main__nav__list flex space-x-4">
        {navItems.map(({ id, to, name }) => (
          <li key={id}>
            <ScrollLink
              href={`#${to}`}
              to={to}
              activeClass="active-link"
              duration={500}
              smooth={true}
              offset={-70}
              spy={true}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Кнопка корзины */}
      <CartButton />
    </nav>
  )
}

function CartButton() {
  const cart = useCart()
  type CartItem = { quantity: number; [key: string]: any }
  const items = ("items" in cart ? (cart as any).items : []) as CartItem[]
  const pathname = usePathname()

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)

  // Не показывать на странице корзины
  if (pathname === "/cart") return null

  return (
    <Link href="/cart" className="main__nav__cart ml-auto flex items-center">
      🛒 <span className="ml-1">{totalCount}</span>
      <span className="sr-only">Перейти в корзину</span>
    </Link>
  )
}