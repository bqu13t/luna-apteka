import Link from "next/link"

export default function Contacts() {
  return (
    <main className="contacts-header">
      <h1 className="sr-only">
        Номер телефона пиццерии в Новосибирск — адреса ресторанов рядом со мной на карте, часы работы ЛунаФуд
      </h1>
      <div className="contacts-header__contacts">

        {/* <div className="contact-section">
              <div className="contact">
                <span className="title">Станция метро</span>
                <p className="value">Заельцовская</p>
              </div>
            </div> */}

        <div className="contact-section">
          <div className="contact">
            <span className="title">Адрес</span>
            <p className="value">Дачная 60к14</p>
          </div>
        </div>

        <div className="contact-section">
          <div className="contact">
            <span className="title">Телефон</span>
            <Link href='tel:+79993220033' className="value on-hover on-tap">8 999 322 00 33</Link>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact">
            <span className="title">Доставка и самовывоз</span>
            <p className="value">Пн-Вс: 9:00 — 21:00</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact">
            <span className="title">Время работы пиццерии</span>
            <p className="value">Пн-Вс: 9:00 — 21:00</p>
          </div>
        </div>
      </div>
    </main>
  )
}