"use client"

import Image from "next/image"
import clsx from "clsx"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"

import LineThrough from "@/components/icons/line-through"

import medicineItems from "@/db/products/medicine-items"
import cosmeticItems from "@/db/products/cosmetic-items"
import prescriptionItems from "@/db/products/prescription-items"
import vitaminItems from "@/db/products/vitamin-items"
import medtechnicItems from "@/db/products/medtechnic-items"

import HomePageProductModal from "@/components/main/home-page/home-page-products/home-page-product-modal"

export default function HomePageProducts() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentModal, setCurrentModal] = useState<React.ReactNode | null>(null)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(modal: React.ReactNode) {
    setCurrentModal(modal)
    setIsOpen(true)
  }

  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk4GLAAIxDWRAAMasAb0wzB6IAAAAASUVORK5CYII="

  return (
    <section className="main__cards">
      <section id="over-the-counter" className="main__cards__group">
        <h2 className="main__cards__group__header">Без рецепта</h2>
        <ul className="main__cards__group__list">
          {medicineItems.map(
            ({
              id,
              name,
              description,
              price_sm,
              is_promo,
              is_new,
              is_top,
              is_herbal,
              is_profit,
              old_price_sm,
              promo_title,
              img_url,
            }) => (
              <li
                id={id}
                key={id}
              >
                <button
                  onClick={() => {
                    openModal(<HomePageProductModal id={id} />)
                  }}
                  className="open-modal-btn on-hover on-tap"
                >
                  Подробнее
                </button>
                <div className="card-image">
                  <div
                    className={clsx("promo", {
                      visible: is_promo === true,
                      new: is_new === true,
                      "top-rate": is_top === true,
                      meatless: is_herbal === true,
                      profit: is_profit === true,
                    })}
                  >
                    {is_profit === true
                      ? `${promo_title} ${Math.ceil(
                        (price_sm / old_price_sm - 1) * -100
                      )}%`
                      : `${promo_title}`}
                  </div>
                  <Image
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    quality={50}
                    src={img_url}
                    width={150}
                    height={150}
                    onClick={() => {
                      openModal(<HomePageProductModal id={id} />)
                    }}
                    alt={`Забронируй ${name} в аптеке в Новосибирске`}
                  />
                </div>
                <div className="card-content">
                  <h3 className="name">{`${name}`}</h3>
                  <p className="description">{description}</p>
                  <div className="price-section">
                    <p className="price">{`от ${price_sm} ₽`}</p>
                    <span
                      className={clsx("old-price-section", {
                        visible: is_profit === true,
                      })}
                    >
                      <LineThrough />
                      <span className="old-price">{`${old_price_sm}  ₽`}</span>
                    </span>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>

      </section>

      <section id="prescription" className="main__cards__group">
        <h2 className="main__cards__group__header">С рецептом</h2>
        <ul className="main__cards__group__list">
          {prescriptionItems.map(
            ({
              id,
              name,
              description,
              price_sm,
              is_promo,
              is_new,
              is_top,
              is_herbal,
              is_profit,
              old_price_sm,
              promo_title,
              img_url,
            }) => (
              <li
                id={id}
                key={id}
              >
                <button
                  onClick={() => {
                    openModal(<HomePageProductModal id={id} />)
                  }}
                  className="open-modal-btn on-hover on-tap"
                >
                  Подробнее
                </button>
                <div className="card-image">
                  <div
                    className={clsx("promo", {
                      visible: is_promo === true,
                      new: is_new === true,
                      "top-rate": is_top === true,
                      meatless: is_herbal === true,
                      profit: is_profit === true,
                    })}
                  >
                    {is_profit === true
                      ? `${promo_title} ${Math.ceil(
                        (price_sm / old_price_sm - 1) * -100
                      )}%`
                      : `${promo_title}`}
                  </div>
                  <Image
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    quality={50}
                    src={img_url}
                    width={150}
                    height={150}
                    onClick={() => {
                      openModal(<HomePageProductModal id={id} />)
                    }}
                    alt={`Забронируй ${name} в аптеке в Новосибирске`}
                  />
                </div>
                <div className="card-content">
                  <h3 className="name">{`${name}`}</h3>
                  <p className="description">{description}</p>
                  <div className="price-section">
                    <p className="price">{`от ${price_sm} ₽`}</p>
                    <span
                      className={clsx("old-price-section", {
                        visible: is_profit === true,
                      })}
                    >
                      <LineThrough />
                      <span className="old-price">{`${old_price_sm}  ₽`}</span>
                    </span>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>

      </section>

      <section id="vitamins" className="main__cards__group">
        <h2 className="main__cards__group__header">Витамины</h2>
        <ul className="main__cards__group__list">
          {vitaminItems.map(
            ({
              id,
              name,
              description,
              price_sm,
              is_promo,
              is_new,
              is_top,
              is_herbal,
              is_profit,
              old_price_sm,
              promo_title,
              img_url,
            }) => (
              <li
                id={id}
                key={id}
              >
                <button
                  onClick={() => {
                    openModal(<HomePageProductModal id={id} />)
                  }}
                  className="open-modal-btn on-hover on-tap"
                >
                  Подробнее
                </button>
                <div className="card-image">
                  <div
                    className={clsx("promo", {
                      visible: is_promo === true,
                      new: is_new === true,
                      "top-rate": is_top === true,
                      meatless: is_herbal === true,
                      profit: is_profit === true,
                    })}
                  >
                    {is_profit === true
                      ? `${promo_title} ${Math.ceil(
                        (price_sm / old_price_sm - 1) * -100
                      )}%`
                      : `${promo_title}`}
                  </div>
                  <Image
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    quality={50}
                    src={img_url}
                    width={150}
                    height={150}
                    onClick={() => {
                      openModal(<HomePageProductModal id={id} />)
                    }}
                    alt={`Забронируй ${name} в аптеке в Новосибирске`}
                  />
                </div>
                <div className="card-content">
                  <h3 className="name">{`${name}`}</h3>
                  <p className="description">{description}</p>
                  <div className="price-section">
                    <p className="price">{`от ${price_sm} ₽`}</p>
                    <span
                      className={clsx("old-price-section", {
                        visible: is_profit === true,
                      })}
                    >
                      <LineThrough />
                      <span className="old-price">{`${old_price_sm}  ₽`}</span>
                    </span>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </section>

      <section id="cosmetics" className="main__cards__group">
        <h2 className="main__cards__group__header">Косметика и уход</h2>
        <ul className="main__cards__group__list">
          {cosmeticItems.map(
            ({
              id,
              name,
              description,
              price_sm,
              is_promo,
              is_new,
              is_top,
              is_herbal,
              is_profit,
              old_price_sm,
              promo_title,
              img_url,
            }) => (
              <li
                id={id}
                key={id}
              >
                <button
                  onClick={() => {
                    openModal(<HomePageProductModal id={id} />)
                  }}
                  className="open-modal-btn on-hover on-tap"
                >
                  Подробнее
                </button>
                <div className="card-image">
                  <div
                    className={clsx("promo", {
                      visible: is_promo === true,
                      new: is_new === true,
                      "top-rate": is_top === true,
                      meatless: is_herbal === true,
                      profit: is_profit === true,
                    })}
                  >
                    {is_profit === true
                      ? `${promo_title} ${Math.ceil(
                        (price_sm / old_price_sm - 1) * -100
                      )}%`
                      : `${promo_title}`}
                  </div>
                  <Image
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    quality={50}
                    src={img_url}
                    width={150}
                    height={150}
                    onClick={() => {
                      openModal(<HomePageProductModal id={id} />)
                    }}
                    alt={`Забронируй ${name} в аптеке в Новосибирске`}
                  />
                </div>
                <div className="card-content">
                  <h3 className="name">{`${name}`}</h3>
                  <p className="description">{description}</p>
                  <div className="price-section">
                    <p className="price">{`от ${price_sm} ₽`}</p>
                    <span
                      className={clsx("old-price-section", {
                        visible: is_profit === true,
                      })}
                    >
                      <LineThrough />
                      <span className="old-price">{`${old_price_sm}  ₽`}</span>
                    </span>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </section>

      <section id="medical-devices" className="main__cards__group">
        <h2 className="main__cards__group__header">Медтехника</h2>
        <ul className="main__cards__group__list">
          {medtechnicItems.map(
            ({
              id,
              name,
              description,
              price_sm,
              is_promo,
              is_new,
              is_top,
              is_herbal,
              is_profit,
              old_price_sm,
              promo_title,
              img_url,
            }) => (
              <li
                id={id}
                key={id}
              >
                <button
                  onClick={() => {
                    openModal(<HomePageProductModal id={id} />)
                  }}
                  className="open-modal-btn on-hover on-tap"
                >
                  Подробнее
                </button>
                <div className="card-image">
                  <div
                    className={clsx("promo", {
                      visible: is_promo === true,
                      new: is_new === true,
                      "top-rate": is_top === true,
                      meatless: is_herbal === true,
                      profit: is_profit === true,
                    })}
                  >
                    {is_profit === true
                      ? `${promo_title} ${Math.ceil(
                        (price_sm / old_price_sm - 1) * -100
                      )}%`
                      : `${promo_title}`}
                  </div>
                  <Image
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    quality={50}
                    src={img_url}
                    width={150}
                    height={150}
                    onClick={() => {
                      openModal(<HomePageProductModal id={id} />)
                    }}
                    alt={`Забронируй ${name} в аптеке в Новосибирске`}
                  />
                </div>
                <div className="card-content">
                  <h3 className="name">{`${name}`}</h3>
                  <p className="description">{description}</p>
                  <div className="price-section">
                    <p className="price">{`от ${price_sm} ₽`}</p>
                    <span
                      className={clsx("old-price-section", {
                        visible: is_profit === true,
                      })}
                    >
                      <LineThrough />
                      <span className="old-price">{`${old_price_sm}  ₽`}</span>
                    </span>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div
            className="modal-backdrop-layer"
            onClick={closeModal}
          />
          <div className="fixed inset-0 overflow-y-auto pt-4 pb-4" onClick={closeModal}>
            <div className="flex min-h-full items-center justify-center p-0 text-left">
              {isOpen && (
                <Dialog.Panel
                  className="relative"
                >
                  <button
                    type="button"
                    className="product-modal__close-btn"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="rounded-xl">{currentModal}</div>
                </Dialog.Panel>
              )}
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  )
}
