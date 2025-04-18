'use client'

import { useEffect, useState } from 'react';
import { IoIosTime } from "react-icons/io";

interface CountdownProps {
  minutes: number
  onFinish?: () => void
}

export default function Countdown({ minutes, onFinish }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60) // em segundos

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onFinish) onFinish()
      return
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft, onFinish])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  return (
    <section style={{borderRadius: "30px"}} className="mx-auto flex items-center justify-center rounded-[30px] gap-4 w-60 bg-primary p-4 text-base text-white">
      <IoIosTime className='text-2xl' />
      <span className='text-white'>
      Offer expires in <span className='font-semibold text-white'>{formatTime(timeLeft)}</span>
      </span>
    </section>
  )
}
