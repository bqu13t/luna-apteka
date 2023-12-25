import Link from "next/link"
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid"

export default function HomePageHeader() {
  return (
    <header className="main__header">
      <h1>Доставка пиццы в Новосибирске от пиццерии ЛунаФуд</h1>
      <p className="main__header__description">
        Закажите бесплатную доставку пиццы по телефону или в нашей пиццерии
      </p>
      <div className="main__header__contacts">
        <div className="contact-section">
          <div className="icon">
            <svg
              width={24}
              height={24}
              version="1.1"
              viewBox="0 0 65.4 54.4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m32.7 54.4-14.2-27.3-7.7 26.4h-10.8l15.7-53.5 17 32.9 17-32.9 15.7 53.5h-10.8l-7.7-26.4z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="contact">
            <span className="title">Станция метро</span>
            <p className="value">Заельцовская</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="icon">
            <MapPinIcon width={24} height={24} />
          </div>
          <div className="contact">
            <span className="title">Адрес</span>
            <p className="value">Дачная 60к14, ТЦ</p>
          </div>
        </div>

        <div className="contact-section">
          <div className="icon">
            <PhoneIcon width={24} height={24} />
          </div>
          <div className="contact">
            <span className="title">Телефон</span>
            <a href="tel:+79993220033" className="value on-hover on-tap">
              +7 (999) 322-00-33
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
