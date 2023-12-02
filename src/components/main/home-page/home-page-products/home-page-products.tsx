'use client'

import Image from "next/image"
import clsx from "clsx";

import LineThrough from "@/components/icons/line-through";

import pizzaItems from "@/db/products/pizza-items";
import drinkItems from "@/db/products/drink-items";
import comboItems from "@/db/products/combo-items";
import dessertItems from "@/db/products/desserts-items";

export default function HomePageProducts() {
  return (
    <section className="main__cards">
      <section id="pizza" className="main__cards__group">
        <h2 className="main__cards__group__header">Пицца</h2>
        <ul className="main__cards__group__list">
          {pizzaItems.map(({
            id,
            name,
            description,
            price,
            is_promo,
            is_new,
            is_top,
            is_meatless,
            is_profit,
            old_price,
            promo_title,
            img_url
          }) => (
            <li key={id}>
              <div className="card-image">
                <div className={clsx(
                  "promo", {
                  "visible": is_promo === true,
                  "new": is_new === true,
                  "top-rate": is_top === true,
                  "meatless": is_meatless === true,
                  "profit": is_profit === true
                })}>
                  {is_profit === true ? `${promo_title} ${Math.ceil((price / old_price - 1) * -100)}%` : `${promo_title}`}
                </div>
                <Image
                  src={img_url}
                  width={150}
                  height={150}
                  alt={`Пицца ${name} с бесплатной доставкой в Новосибирске от пиццерии ЛунаФуд`}
                />
              </div>
              <div className="card-content">
                <h3 className="name">{`Пицца ${name}`}</h3>
                <p className="description">{description}</p>
                <div className="price-section">
                  <p className="price">{`${price} ₽`}</p>
                  <span className={clsx(
                    "old-price-section", {
                    "visible": is_profit === true
                  })}>
                    <LineThrough />
                    <span className="old-price">{`${old_price}  ₽`}</span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="combo" className="main__cards__group">
        <h2 className="main__cards__group__header">Комбо</h2>
        <ul className="main__cards__group__list">
          {comboItems.map(({
            id,
            name,
            description,
            price,
            is_promo,
            is_new,
            is_top,
            is_meatless,
            is_profit,
            old_price,
            promo_title,
            img_url
          }) => (
            <li key={id}>
              <div className="card-image">
                <div className={clsx(
                  "promo", {
                  "visible": is_promo === true,
                  "new": is_new === true,
                  "top-rate": is_top === true,
                  "meatless": is_meatless === true,
                  "profit": is_profit === true
                })}>
                  {is_profit === true ? `${promo_title} ${Math.round((price / old_price - 1) * -100)}%` : `${promo_title}`}
                </div>
                <Image
                  src={img_url}
                  width={150}
                  height={150}
                  alt={`Комбо ${name} с бесплатной доставкой в Новосибирске от пиццерии ЛунаФуд`}
                />
              </div>
              <div className="card-content">
                <h3 className="name">{name}</h3>
                <p className="description">{description}</p>
                <div className="price-section">
                  <p className="price">{`${price} ₽`}</p>
                  <span className={clsx(
                    "old-price-section", {
                    "visible": is_profit === true
                  })}>
                    <LineThrough />
                    <span className="old-price">{`${old_price}  ₽`}</span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="desserts" className="main__cards__group">
        <h2 className="main__cards__group__header">Десерты</h2>
        <ul className="main__cards__group__list">
          {dessertItems.map(({
            id,
            name,
            description,
            price,
            is_promo,
            is_new,
            is_top,
            is_meatless,
            is_profit,
            old_price,
            promo_title,
            img_url
          }) => (
            <li key={id}>
              <div className="card-image">
                <div className={clsx(
                  "promo", {
                  "visible": is_promo === true,
                  "new": is_new === true,
                  "top-rate": is_top === true,
                  "meatless": is_meatless === true,
                  "profit": is_profit === true
                })}>
                  {is_profit === true ? `${promo_title} ${Math.round((price / old_price - 1) * -100)}%` : `${promo_title}`}
                </div>
                <Image
                  src={img_url}
                  width={150}
                  height={150}
                  alt={`Десерт ${name} с бесплатной доставкой в Новосибирске от пиццерии ЛунаФуд`}
                />
              </div>
              <div className="card-content">
                <h3 className="name">{name}</h3>
                <p className="description">{description}</p>
                <div className="price-section">
                  <p className="price">{`${price} ₽`}</p>
                  <span className={clsx(
                    "old-price-section", {
                    "visible": is_profit === true
                  })}>
                    <LineThrough />
                    <span className="old-price">{`${old_price}  ₽`}</span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="drinks" className="main__cards__group">
        <h2 className="main__cards__group__header">Напитки</h2>
        <ul className="main__cards__group__list">
          {drinkItems.map(({
            id,
            name,
            description,
            price,
            is_promo,
            is_new,
            is_profit,
            old_price,
            promo_title,
            img_url
          }) => (
            <li key={id}>
              <div className="card-image">
                <div className={clsx(
                  "promo", {
                  "visible": is_promo === true,
                  "new": is_new === true,
                  "profit": is_profit === true
                })}>
                  {is_profit === true ? `${promo_title} ${Math.round((price / old_price - 1) * -100)}%` : `${promo_title}`}
                </div>
                <Image
                  src={img_url}
                  width={150}
                  height={150}
                  alt={`${name} с бесплатной доставкой в Новосибирске от пиццерии ЛунаФуд`}
                />
              </div>
              <div className="card-content">
                <h3 className="name">{`${name}`}</h3>
                <p className="description">{description}</p>
                <p className="price">{`${price} ₽`}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
