"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import topRateItems from "@/db/top-rate-products/top-rate-products"

export default function HomePagePopular() {
  const [screenWidth, setScreenWidth] = useState(0)
  const mobilePriorityImagesCount = 2
  const desktopPriorityImagesCount = 5
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk4GLAAIxDWRAAMasAb0wzB6IAAAAASUVORK5CYII="

  // useEffect(() => {
  //   setScreenWidth(window.innerWidth)
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth)
  //   }
  //   window.addEventListener("resize", handleResize)
  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, [])

  // const priorityImagesCount =
  //   screenWidth < 640 ? mobilePriorityImagesCount : desktopPriorityImagesCount

  return (
    <ul className="main__popular">
      <li className="main__popular__item">
        <svg width={24} height={24} viewBox="0 0 32 24" className="top5-icon">
          <linearGradient id="lg-1" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#ff6762" offset="0"></stop>
            <stop stopColor="#de3e6c" offset="1"></stop>
          </linearGradient>
          <path
            fill="url(#lg-1)"
            d="M15.66.033a1.924 1.976 0 00-1.186.734L9.141 7.782a.32.32 0 01-.36.11l-6.16-2.438a1.932 1.984 0 00-2.557 2.36L3.776 22.5A1.94 1.992 0 005.585 24h20.773a1.94 1.992 0 001.872-1.5L31.94 7.814a1.948 2 0 00-2.573-2.36l-6.145 2.438a.32.32 0 01-.358-.11L17.53.767A1.924 1.976 0 0015.66.033z"
          />
        </svg>
        <h3>Топ 5</h3>
        <p>за 30 дней</p>
      </li>
      {topRateItems.map(({ id, name, price, top_rate, img_url }, index) => (
        <li key={`top-${id}`} className="main__popular__item">
          <p className="rate-number">{top_rate}</p>
          <span className="rate-number-color">{top_rate}</span>
          <Image
            placeholder="blur"
            blurDataURL={blurDataURL}
            quality={50}
            // priority={index < priorityImagesCount ? true : false}
            priority={false}
            className="item-image"
            src={img_url}
            width={100}
            height={100}
            alt={name}
          />
          <div className="item-description">
            <h3 className="title">{`Пицца ${name}`}</h3>
            <p className="price">{price} ₽</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
