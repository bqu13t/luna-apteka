import pizzaItems from "@/db/products/pizza-items"
import comboItems from "@/db/products/combo-items"

import Image from "next/image"

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

import WeightIcon from "@/components/icons/weight-icon"
import MeatIcon from "@/components/icons/meat-icon"
import CheeseIcon from "@/components/icons/cheese-icon"
import PriceIcon from "@/components/icons/price-icon"
import clsx from "clsx"
import LineThrough from "@/components/icons/line-through"

export default function ProductCard({ id }: { id: string }) {
  let productItem

  if (id.startsWith('pizza')) {
    productItem = pizzaItems.find((item) => item.id === id)
  } else if (id.startsWith('combo')) {
    productItem = comboItems.find((item) => item.id === id)
  }

  const name = productItem ? productItem.name : ""
  const description = productItem ? productItem.description : ""

  const priceSm = productItem ? productItem.price_sm : null
  const oldPriceSm = productItem ? productItem.old_price_sm : null
  const weightSm = productItem ? productItem.weight_sm : null
  const meatWeightSm = productItem ? productItem.meat_weight_sm : null
  const cheeseWeightSm = productItem ? productItem.cheese_weight_sm : null

  const priceLg = productItem ? productItem.price_lg : null
  const oldPriceLg = productItem ? productItem.old_price_lg : null
  const weightLg = productItem ? productItem.weight_lg : null
  const meatWeightLg = productItem ? productItem.meat_weight_lg : null
  const cheeseWeightLg = productItem ? productItem.cheese_weight_lg : null

  const isPromo = productItem ? productItem.is_promo : null
  const isNew = productItem ? productItem.is_new : null
  const isTop = productItem ? productItem.is_top : null
  const isMeatless = productItem ? productItem.is_meatless : null
  const isProfit = productItem ? productItem.is_profit : null

  const promoTitle = productItem ? productItem.promo_title : null

  const imgSrc = productItem ? productItem.img_url : ""
  const imgAlt = productItem ? productItem.description : ""

  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk4GLAAIxDWRAAMasAb0wzB6IAAAAASUVORK5CYII="

  return (
    <div id={id} className="product-modal">
      <Image
        className=""
        placeholder="blur"
        blurDataURL={blurDataURL}
        quality={75}
        src={imgSrc}
        width={300}
        height={300}
        alt={imgAlt}
      />

      <div className="product-modal__description">
        <h3>{name}</h3>

        <div className="product-feature">
          <div className="product-feature__description">
            <p className="value">{description}</p>
          </div>
        </div>
        <Tab.Group>
          <Tab.List className="poduct-modal__size-tablist">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'tab-selected tab' : 'tab'
                  }
                >
                  Маленькая 25 см
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'tab-selected tab' : 'tab'
                  }
                >
                  Большая 40 см
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="flex flex-col flex-wrap gap-4">
              <div
                className={clsx("promo", {
                  visible: isPromo === true,
                  new: isNew === true,
                  "top-rate": isTop === true,
                  meatless: isMeatless === true,
                  profit: isProfit === true,
                })}
              >
                {isProfit === true
                  ? `${promoTitle} ${Math.ceil(
                    (priceSm! / oldPriceSm! - 1) * -100
                  )}%`
                  : `${promoTitle}`}
              </div>
              <div className="product-feature">
                <div className="product-feature__icon">
                  <WeightIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Общий вес</span>
                  <p className="value"><strong>{weightSm} гр</strong></p>
                </div>
              </div>
              <div
                className={clsx("product-feature", {
                  "product-feature-hidden": isMeatless === true,
                })}
              >
                <div className="product-feature__icon">
                  <MeatIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Мясная начинка</span>
                  <p className="value"><strong>{Math.round(meatWeightSm! / weightSm! * 100)}% - {meatWeightSm} гр</strong></p>
                </div>
              </div>
              <div className="product-feature">
                <div className="product-feature__icon">
                  <CheeseIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Cырная начинка</span>
                  <p className="value"><strong>{Math.round(cheeseWeightSm! / weightSm! * 100)}% - {cheeseWeightSm} гр</strong></p>
                </div>
              </div>
              <div className="product-feature">
                <div className="product-feature__icon">
                  <PriceIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Цена</span>
                  <div className="price-section">
                    <p className="value">
                      <strong>{priceSm} ₽</strong>
                    </p>
                    <span
                      className={clsx("old-price-section", {
                        visible: isProfit === true,
                      })}
                    >
                      <LineThrough />
                      <span className="old-price">{`${oldPriceSm}  ₽`}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="flex flex-col flex-wrap gap-4">
              <div
                className={clsx("promo", {
                  visible: isPromo === true,
                  new: isNew === true,
                  "top-rate": isTop === true,
                  meatless: isMeatless === true,
                  profit: isProfit === true,
                })}
              >
                {isProfit === true
                  ? `${promoTitle} ${Math.ceil(
                    (priceLg! / oldPriceLg! - 1) * -100
                  )}%`
                  : `${promoTitle}`}
              </div>
              <div className="product-feature">
                <div className="product-feature__icon">
                  <WeightIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Общий вес</span>
                  <p className="value"><strong>{weightLg} гр</strong></p>
                </div>
              </div>
              <div
                className={clsx("product-feature", {
                  "product-feature-hidden": isMeatless === true,
                })}
              >
                <div className="product-feature__icon">
                  <MeatIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Мясная начинка</span>
                  <p className="value"><strong>{Math.round(meatWeightLg! / weightLg! * 100)}% - {meatWeightLg} гр</strong></p>
                </div>
              </div>
              <div className="product-feature">
                <div className="product-feature__icon">
                  <CheeseIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Cырная начинка</span>
                  <p className="value"><strong>{Math.round(cheeseWeightLg! / weightLg! * 100)}% - {cheeseWeightLg} гр</strong></p>
                </div>
              </div>
              <div className="product-feature">
                <div className="product-feature__icon">
                  <PriceIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Цена</span>
                  <div className="price-section">
                    <p className="value">
                      <strong>{priceLg} ₽</strong>
                    </p>
                    <span
                      className={clsx("old-price-section", {
                        visible: isProfit === true,
                      })}
                    >
                      <LineThrough />
                      <span className="old-price">{`${oldPriceLg}  ₽`}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}