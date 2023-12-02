'use client'

import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { useEffect } from 'react'

import LunaIcon from "@/components/icons/luna-icon"
import navItems from '@/db/navbar/navbar-items'

export default function HomePageNav() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.home-page .main__nav')
      const navList = document.querySelector('.home-page .main__nav__list')
      const activeLink = nav?.querySelector('.active-link')
      const navPosition = nav?.getBoundingClientRect()

      if (navPosition && nav && navList) {
        if (navPosition!.top < 1 && !nav!.classList.contains('is-pinned')) {
          nav!.classList.add('is-pinned')
        } else if (navPosition!.top >= 1 && nav!.classList.contains('is-pinned')) {
          nav!.classList.remove('is-pinned')
        }

        if (activeLink) {
          const navRect = navList!.getBoundingClientRect()
          const linkRect = activeLink.getBoundingClientRect()

          if (linkRect.left < navRect.left) {
            navList!.scrollLeft -= (navRect.left - linkRect.left)
          } else if (linkRect.right > navRect.right) {
            navList!.scrollLeft += (linkRect.right - navRect.right)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="main__nav">
      <div className="main__nav__container">
        <Link href="/" className="main__nav__logo on-hover" onClick={scrollToTop}>
          <LunaIcon />
        </Link>
        <ul className="main__nav__list">
          {navItems.map(({ id, to, name }) => (
            <li key={id}>
              <ScrollLink
                href={`#${to}`}
                to={to}
                activeClass="active-link"
                duration={500}
                smooth={true}
                offset={-72}
                spy={true}
              >
                {`${name} `}
                <span className='sr-only'>от пиццерии ЛунаФуд</span>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}