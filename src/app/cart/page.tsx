"use client"

import { useCart, CartContextType } from "@/db/cart/cart-store"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

type CartItem = {
  id: string
  name: string
  size: string
  price: number
  quantity: number
}

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart() as CartContextType

  const total = items.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0)

  return (
    <>
    <Header />
      <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Корзина</h1>

      {items.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex justify-between border p-4 rounded-lg shadow-sm"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Размер: {item.size.toUpperCase()}</p>
                <p className="text-sm text-gray-500">Количество: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p>{item.price * item.quantity} ₽</p>
                <button
                  onClick={() => removeFromCart(item.id, item.size as "sm" | "lg")}
                  className="text-red-500 text-sm mt-2"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4">
            <span className="font-semibold">Итого:</span>
            <span className="text-lg font-bold">{total} ₽</span>
          </div>

          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Очистить корзину
          </button>
        </div>
      )}
    </div>
    <Footer />
    </>
    
  )
}
