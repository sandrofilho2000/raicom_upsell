'use client'

import { iGift, iProduct } from '@/interfaces'
import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type ProductsContextProps = {
  products: iProduct[]
  cartItems: iProduct[]
  giftWinner: iGift | undefined
  isConfettiExploding: boolean
  isGiftTaken: boolean
  setProducts(products: iProduct[]): void
  setCartItems(cartItems: iProduct[]): void
  setGiftWinner(gift: iGift | undefined): void
  setIsConfettiExploding(isConfettiExploding: boolean): void
  setIsGiftTaken(isGiftTaken: boolean): void
}

const ProductsContext = createContext({} as ProductsContextProps)

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [isConfettiExploding, setIsConfettiExploding] = useState(false);
  const [isGiftTaken, setIsGiftTaken] = useState(false);
  const [cartItems, setCartItems] = useState<iProduct[]>([]);
  const [products, setProducts] = useState<iProduct[]>([]);
  const [giftWinner, setGiftWinner] = useState<iGift | undefined>(undefined);
  const router = useRouter()


  useEffect(() => {
    setGiftWinner(undefined)
    setIsGiftTaken(false)
  }, [router]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartItems,
        setProducts,
        setCartItems,
        giftWinner,
        setGiftWinner,
        isConfettiExploding,
        setIsConfettiExploding,
        isGiftTaken,
        setIsGiftTaken
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts(): ProductsContextProps {
  return useContext(ProductsContext)
}
