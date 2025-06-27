import medicineItems from "@/db/products/medicine-items"
import prescriptionItems from "@/db/products/prescription-items"
import vitaminItems from "@/db/products/vitamin-items"
import cosmeticItems from "@/db/products/cosmetic-items"
import medtechnicItems from "@/db/products/medtechnic-items"


import Image from "next/image"
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import clsx from "clsx"

import WeightIcon from "@/components/icons/weight-icon"
// import ActiveComponentIcon from "@/components/icons/active-component-icon"
// import PackageIcon from "@/components/icons/package-icon"
import PriceIcon from "@/components/icons/price-icon"
import LineThrough from "@/components/icons/line-through"

export default function ProductCard({ id }: { id: string }) {
  let productItem

  if (id.startsWith('med')) {
    productItem = medicineItems.find((item) => item.id === id)
  } else if (id.startsWith('rx')) {
    productItem = prescriptionItems.find((item) => item.id === id)
  } else if (id.startsWith('vit')) {
    productItem = vitaminItems.find((item) => item.id === id)
  } else if (id.startsWith('cos')) {
    productItem = cosmeticItems.find((item) => item.id === id)
  } else if (id.startsWith('tec')) {
    productItem = medtechnicItems.find((item) => item.id === id)
  }

  const name = productItem?.name || ""
  const description = productItem?.description || ""

  const priceSm = productItem?.price_sm || null
  const oldPriceSm = productItem?.old_price_sm || null
  const weightSm = productItem?.weight_sm || null
  const activeComponentSm = productItem?.active_component_sm || null
  const volumeSm = productItem?.weight_sm || null

  const priceLg = productItem?.price_lg || null
  const oldPriceLg = productItem?.old_price_lg || null
  const weightLg = productItem?.weight_lg || null
  const activeComponentLg = productItem?.active_component_lg || null
  const volumeLg = productItem?.weight_lg || null

  const isPromo = productItem?.is_promo || false
  const isNew = productItem?.is_new || false
  const isTop = productItem?.is_top || false
  const isHerbal = productItem?.is_herbal || false
  const isProfit = productItem?.is_profit || false

  const promoTitle = productItem?.promo_title || ""
  const imgSrc = productItem?.img_url || ""
  const imgAlt = productItem?.description || "Лекарственный препарат"

  const blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk4GLAAIxDWRAAMasAb0wzB6IAAAAASUVORK5CYII="

  return (
    <div id={id} className="product-modal">
      <Image
        className="product-image"
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
          <Tab.List className="product-modal__size-tablist">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button className={selected ? 'tab-selected tab' : 'tab'}>
                  Маленькая
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button className={selected ? 'tab-selected tab' : 'tab'}>
                  Большая
                </button>
              )}
            </Tab>
          </Tab.List>

          <Tab.Panels>
            {/* Маленькая упаковка */}
            <Tab.Panel className="flex flex-col flex-wrap gap-4">
              <div className={clsx("promo", {
                visible: isPromo,
                new: isNew,
                "top-rate": isTop,
                meatless: isHerbal,
                profit: isProfit,
              })}>
                {isProfit 
                  ? `${promoTitle} ${Math.ceil((priceSm! / oldPriceSm! - 1) * -100)}%` 
                  : promoTitle}
              </div>

              <div className="product-feature">
                <div className="product-feature__icon">
                  <WeightIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Вес упаковки</span>
                  <p className="value"><strong>{weightSm} гр</strong></p>
                </div>
              </div>

              <div className="product-feature">
                <div className="product-feature__icon">
                  {/* <ActiveComponentIcon /> */}
                </div>
                <div className="product-feature__description">
                  <span className="title">Активное вещество</span>
                  <p className="value"><strong>{activeComponentSm} мг</strong></p>
                </div>
              </div>

              <div className="product-feature">
                <div className="product-feature__icon">
                  {/* <PackageIcon /> */}
                </div>
                <div className="product-feature__description">
                  <span className="title">Количество</span>
                  <p className="value"><strong>{volumeSm} шт/уп</strong></p>
                </div>
              </div>

              <div className="product-feature">
                <div className="product-feature__icon">
                  <PriceIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Цена</span>
                  <div className="price-section">
                    <p className="value"><strong>{priceSm} ₽</strong></p>
                    {isProfit && (
                      <span className="old-price-section">
                        <LineThrough />
                        <span className="old-price">{oldPriceSm} ₽</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Tab.Panel>

            {/* Большая упаковка */}
            <Tab.Panel className="flex flex-col flex-wrap gap-4">
              <div className={clsx("promo", {
                visible: isPromo,
                new: isNew,
                "top-rate": isTop,
                meatless: isHerbal,
                profit: isProfit,
              })}>
                {isProfit 
                  ? `${promoTitle} ${Math.ceil((priceLg! / oldPriceLg! - 1) * -100)}%` 
                  : promoTitle}
              </div>

              <div className="product-feature">
                <div className="product-feature__icon">
                  <WeightIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Вес упаковки</span>
                  <p className="value"><strong>{weightLg} гр</strong></p>
                </div>
              </div>

              <div className="product-feature">
                <div className="product-feature__icon">
                  {/* <ActiveComponentIcon /> */}
                </div>
                <div className="product-feature__description">
                  <span className="title">Активное вещество</span>
                  <p className="value"><strong>{activeComponentLg} мг</strong></p>
                </div>
              </div>

              <div className="product-feature">
                <div className="product-feature__icon">
                  {/* <PackageIcon /> */}
                </div>
                <div className="product-feature__description">
                  <span className="title">Количество</span>
                  <p className="value"><strong>{volumeLg} шт/уп</strong></p>
                </div>
              </div>

              <div className="product-feature">
                <div className="product-feature__icon">
                  <PriceIcon />
                </div>
                <div className="product-feature__description">
                  <span className="title">Цена</span>
                  <div className="price-section">
                    <p className="value"><strong>{priceLg} ₽</strong></p>
                    {isProfit && (
                      <span className="old-price-section">
                        <LineThrough />
                        <span className="old-price">{oldPriceLg} ₽</span>
                      </span>
                    )}
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