"use client"
import { iVariant } from "@/interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";


const VariantMenu = ({ data }: { data: iVariant[] }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setIsScrolled(scrollY > 15)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className={`fixed ${isScrolled ? 'bottom-24' : 'bottom-4'} right-4 flex transition-all flex-col items-end gap-2`}>
            <div id="dropdownHover" className={`z-10 ${!isMenuOpen && 'hidden'} bg-white divide-y divide-gray-100 rounded-lg w-44`}>
                <ul className="py-2 text-sm" aria-labelledby="dropdownHoverButton">
                    {
                        data.map((item) => (
                            <li key={item.id}>
                                <Link href={`/variants/${item.id}`} className="block px-4 py-2 hover:bg-gray-100">{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <button onClick={() => { setIsMenuOpen(!isMenuOpen) }} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white  bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">
                <FaExchangeAlt />
                <span className="ml-2 text-white">
                    Split Test
                </span>
            </button>


        </div>

    )
}

export default VariantMenu