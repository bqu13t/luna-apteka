"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type CartItem = {
  id: string
  name: string
  size: "sm" | "lg"
  price: number
  quantity: number
}

export type CartContextType = {
  items: Array<{
    id: string
    name: string
    size: string
    price: number
    quantity: number
  }>
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string, size: "sm" | "lg") => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.size === item.size)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string, size: "sm" | "lg") => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    )
  }

  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
