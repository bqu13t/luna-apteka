import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__links">
        <h2 className="font-bold">ЛунаФуд © 2023</h2>
        <ul>
          <li>
            <Link href="promo">Акции</Link>
          </li>
          <li>
            <Link href="contacts">Контакты</Link>
          </li>
          <li>
            <Link href="work">Работа в ЛунаФуд</Link>
          </li>
          <li>
            <Link href="about">О нас</Link>
          </li>
        </ul>
      </section>
      <section className="footer__links">
        <h2 className="font-bold">Контакты</h2>
        <ul>
          <li>
            Метро: Заельцовская
          </li>
          <li>
            Адрес: Новосибирск, ул. Дачная 60к14, ТЦ, 1 этаж
          </li>
          <li>
            тел: 8 999 322 00 33
          </li>
        </ul>
      </section>
    </footer>
  )
}