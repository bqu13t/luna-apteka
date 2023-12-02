'use client'

import Image from "next/image"
import { Fragment, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import storiesList from "@/db/stories/stories-list"
import HomePageStoryModal from "@/components/main/home-page/home-page-stories/home-page-story-modal";

export default function HomePageStories() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState<React.ReactNode | null>(
    null,
  );
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [visitedItems, setVisitedItems] = useState<string[]>([]);
  const [cookies, setCookie] = useCookies(["visitedItems"]);

  const blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk4GLAAIxDWRAAMasAb0wzB6IAAAAASUVORK5CYII='

  useEffect(() => {
    if (cookies.visitedItems) {
      setVisitedItems(cookies.visitedItems);
    }
  }, [cookies.visitedItems]);

  function handleItemClick(itemId: string) {
    if (!visitedItems.includes(itemId)) {
      const newVisitedItems = [...visitedItems, itemId];
      setVisitedItems(newVisitedItems);
      setCookie("visitedItems", newVisitedItems, { path: "/" });
    }
  }

  useEffect(() => {
    const newTimer = setInterval(() => {
      if (!isMouseDown) {
        setProgress((prevProgress) => prevProgress + 0.01);
      }
    }, 10);

    setTimer(newTimer);

    if (progress >= 10) {
      clearInterval(newTimer);
      closeModal();
    }

    return () => {
      clearInterval(newTimer);
    };
  }, [progress, isMouseDown]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(modal: React.ReactNode) {
    setCurrentModal(modal);
    setIsOpen(true);
    setProgress(0);
  }

  return (
    <div className="stories-bg">
      <div className="stories-container">
        <ul className="main__stories">
          {storiesList.map(({
            id, title, title_img_src, title_img_height, title_img_width,
          }) => (
            <li
              key={id}
              className="main__stories__story relative"
              onClick={() => {
                openModal(<HomePageStoryModal id={id} />);
                handleItemClick(id);
              }}
            >
              <div className={`ping-icon ${!visitedItems.includes(id) ? 'visible' : ''}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-100"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
                </span>
              </div>

              <Image
                className="rounded-2xl object-cover"
                quality={50}
                placeholder="blur"
                blurDataURL={blurDataURL}
                src={title_img_src}
                alt={title}
                width={parseInt(title_img_width)}
                height={parseInt(title_img_height)}
              />
            </li>
          ))}
        </ul>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-lg"
              onClick={closeModal} />
            <div className="fixed inset-0 overflow-y-auto"
              onClick={closeModal}>
              <div className="flex min-h-full items-center justify-center p-0 text-left">
                {isOpen && (
                  <Dialog.Panel
                    className="relative"
                    onMouseDown={() => setIsMouseDown(true)}
                    onMouseUp={() => setIsMouseDown(false)}
                    onTouchStart={() => setIsMouseDown(true)}
                    onTouchEnd={() => setIsMouseDown(false)}
                  >
                    <div className="progress-bar absolute top-[4px] bg-white/25">
                      <div
                        className="progress-bar-fill bg-white/80"
                        style={{ width: `${progress * 10}%` }}
                      ></div>
                    </div>
                    <button
                      type="button"
                      className="absolute right-[11px] top-[11px] rounded-lg bg-white p-1.5"
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
      </div>
    </div >
  )
}