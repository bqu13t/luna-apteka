
export default function Contacts() {
  return (
    <main className="contacts-header">
      <h1 className="sr-only">
        Контакты аптеки в Новосибирске — телефон, адреса аптек на карте, 
        часы работы и доставка лекарств
      </h1>
      <div className="contacts-header__contacts">
        <div className="contact-section">
          <div className="contact">
            <span className="title">Главный офис</span>
            <p className="value">ул. Фрунзе, 18</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact">
            <span className="title">Круглосуточный телефон</span>
            <a href="tel:+73832020202" className="value on-hover on-tap">
              +7 (383) 202-02-02
            </a>
            <p className="small">Консультация фармацевта</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact">
            <span className="title">Доставка лекарств</span>
            <p className="value">Круглосуточно</p>
            <p className="small">Бесплатно при заказе от 1500₽</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact">
            <span className="title">График работы аптек</span>
            <p className="value">Пн-Вс: 8:00 - 22:00</p>
            <p className="small">Некоторые - круглосуточно</p>
          </div>
        </div>
      </div>
    </main>
  )
}