'use client'

import { useProducts } from "@/hooks/useProducts"
import getDiscountedPrice from "@/utils/getDiscountedPrice"
import passToCurrency from "@/utils/passToCurrency"
import { useEffect, useState } from "react"
import Button from "../atoms/Button"

const BuySection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { cartItems } = useProducts()
  const [total, setTotal] = useState(0)

  const handleTotal = () => {
    let _total = 0
    cartItems.forEach((item) => {
      _total += getDiscountedPrice(item.price, item.discount)
    })

    setTotal(_total)
  }

  useEffect(() => {
    handleTotal()
  }, [cartItems])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 15)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="buySection"
      className={`fixed bottom-0 left-0 w-screen p-4 h-20 bg-white flex items-center justify-between text-primary transition-all duration-500 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-full pointer-events-none'
        }`}
    >
      <Button text="Buy Now" classes="bg-success" />
      <span className="font-bold text-xl text-right text-primary">
        Total: <span className="text-primary">{passToCurrency(total)}</span>
      </span>
    </div>
  )
}

export default BuySection
