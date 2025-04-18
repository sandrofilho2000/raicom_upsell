"use client"

import { useProducts } from "@/hooks/useProducts"
import { iProduct } from "@/interfaces"
import getDiscountedPrice from "@/utils/getDiscountedPrice"
import passToCurrency from "@/utils/passToCurrency"
import { useEffect, useState } from "react"
import Confetti from "react-confetti-boom"
import Button from "../atoms/Button"

const GiftWinner = () => {
  const { giftWinner, setGiftWinner, isConfettiExploding, setIsConfettiExploding, isGiftTaken, setIsGiftTaken, cartItems, setCartItems } = useProducts()
  const [discountPrice, setDiscountPrice] = useState<number>()

  const addGiftWinnerToCart = () => {
    if (giftWinner) {
      const newCartItems = [...cartItems, giftWinner as iProduct];
      setCartItems(newCartItems);
    }
  }

  useEffect(() => {
    if (giftWinner) {
      setDiscountPrice(getDiscountedPrice(giftWinner.price, giftWinner.discount))
    }
  }, [giftWinner])

  return (
    <div onClick={() => { setGiftWinner(undefined) }} className={`fixed bg-black w-screen transition-all h-screen bg-opacity-70 top-0 left-0 flex items-center justify-center ${giftWinner && !isGiftTaken ? 'opacity-1 pointer-events-initial' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
      <div className={`w-full left-0 confetti  transition-all fixed top-0 ${isConfettiExploding ? 'opacity-1' : 'opacity-0'}`}>
        <Confetti mode='fall' particleCount={200} />
      </div>
      <div onClick={(e) => { e.stopPropagation() }} className="p-4 giftwinnermodal bg-white rounded-md">
        <p className="text-sm text-center mb-4">
          <strong className="text-primary">CONGRATULATIONS!</strong> You've just won a {' '}
          {giftWinner?.discount === 100 ? (
            <strong> <span className="text-primary">FREE </span>{giftWinner?.name}!</strong>
          ) : (
            <>
              <strong>{giftWinner?.name}</strong> with a <strong className="text-primary">{giftWinner?.discount}% OFF!</strong>
            </>
          )}
        </p>
        <div className="img-container mb-4">
          <img className="object-contain" src={giftWinner?.image} />
        </div>

        {/* <div className="card-info">
              <p className="discount text-xs font-bold rounded-tr-md w-20 pl-2 text-white bg-primary">{giftWinner?.discount}% OFF</p>
              <p className="text-xs block">{giftWinner?.name}</p>
              <p className="card-price">
                <s>
                  {giftWinner?.price && passToCurrency(giftWinner?.price)}
                </s>
              </p>
              <p className="card-price font-bold text-primary">
                {giftWinner?.discount == 100 ? 'FREE' : discountPrice && passToCurrency(discountPrice)}
              </p>
            </div> */}
        {
          giftWinner?.discount !== 100 &&
          <div className="old-price flex gap-2 justify-center mb-4">
            <span className="card-price text-base">
              <s>
                {giftWinner?.price && passToCurrency(giftWinner?.price)}
              </s>
            </span>
            <span className="card-price text-base font-bold text-primary">
              {giftWinner?.discount == 100 ? 'FREE' : discountPrice && passToCurrency(discountPrice)}
            </span>
          </div>
        }
        <div className="buttons flex gap-2 justify-center items-center">
          <Button text="Continue" callback={() => { setIsGiftTaken(true), addGiftWinnerToCart() }} classes="bg-success text-sm py-2 px-4" />
          <Button text="Spin Again" callback={() => setGiftWinner(undefined)} classes="bg-red-500 text-sm py-2 px-4" />
        </div>
      </div>
    </div>
  )
}

export default GiftWinner