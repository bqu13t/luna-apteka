import Image from "next/image"

export default function HomePagePopular() {
  return (
    <ul className="main__popular">
      <li className="main__popular__item">
        <svg viewBox="0 0 32 24" className="top5-icon">
          <linearGradient id="lg-1" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#ff6762" offset="0"></stop>
            <stop stopColor="#de3e6c" offset="1"></stop>
          </linearGradient>
          <path fill="url(#lg-1)"
            d="M15.66.033a1.924 1.976 0 00-1.186.734L9.141 7.782a.32.32 0 01-.36.11l-6.16-2.438a1.932 1.984 0 00-2.557 2.36L3.776 22.5A1.94 1.992 0 005.585 24h20.773a1.94 1.992 0 001.872-1.5L31.94 7.814a1.948 2 0 00-2.573-2.36l-6.145 2.438a.32.32 0 01-.358-.11L17.53.767A1.924 1.976 0 0015.66.033z" />
        </svg>
        <h2>Топ 5</h2>
        <p>за 30 дней</p>
      </li>
      <li className="main__popular__item">
        <p className="rate-number">1</p>
        <span className="rate-number-color">1</span>
        <Image
          className="item-image"
          src="/pizza-photo/bbq.png"
          width={100}
          height={100}
          alt="Пицца Барбекю"
        />
        <div className="item-description">
          <h3 className="title">Пицца Барбекю</h3>
          <p className="price">от 599 р</p>
        </div>
      </li>
      <li className="main__popular__item">
        <p className="rate-number">2</p>
        <span className="rate-number-color">2</span>
        <Image
          className="item-image"
          src="/pizza-photo/deluxe.png"
          width={100}
          height={100}
          alt="Пицца Делюкс"
        />
        <div className="item-description">
          <h3 className="title">Пицца Делюкс</h3>
          <p className="price">от 649 р</p>
        </div>
      </li>
      <li className="main__popular__item">
        <p className="rate-number">3</p>
        <span className="rate-number-color">3</span>
        <Image
          className="item-image drop-shadow-xl"
          src="/pizza-photo/spicy-mix.png"
          width={100}
          height={100}
          alt="Острый Микс"
        />
        <div className="item-description">
          <h3 className="title">Острый Микс</h3>
          <p className="price">от 749 р</p>
        </div>
      </li>
      <li className="main__popular__item">
        <p className="rate-number">4</p>
        <span className="rate-number-color">4</span>
        <Image
          className="item-image"
          src="/pizza-photo/smoked-chicken.png"
          width={100}
          height={100}
          alt="Пицца Копченый ципленок"
        />
        <div className="item-description">
          <h3 className="title">Копченый ципленок</h3>
          <p className="price">от 649 р</p>
        </div>
      </li>
      <li className="main__popular__item">
        <p className="rate-number">5</p>
        <span className="rate-number-color">5</span>
        <Image
          className="item-image"
          src="/pizza-photo/manhattan.png"
          width={100}
          height={100}
          alt="Пицца Делюкс"
        />
        <div className="item-description">
          <h3 className="title">Пицца Манхэттен</h3>
          <p className="price">от 649 р</p>
        </div>
      </li>
    </ul>
  )
}