"use client"
import { useProducts } from "@/hooks/useProducts"
import { iProduct, iTitle } from "@/interfaces"
import getDiscountedPrice from "@/utils/getDiscountedPrice"
import passToCurrency from "@/utils/passToCurrency"
import { useEffect } from "react"
import Title from "../cells/Title"


type JackpotProps = {
    products: iProduct[];
    title: iTitle;
};


const ProductsTable = ({ data }: { data: JackpotProps }) => {
    const { products, title } = data
    const { cartItems, setCartItems } = useProducts()

    useEffect(() => {
        setCartItems(products)
    }, [products])

    return (
        <section className="mb-4">
            <Title title={title} />
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs uppercase text-primary bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3  text-primary">

                            </th>
                            <th scope="col" className="px-6 py-3  text-primary">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3  text-primary">
                                Qtn.
                            </th>
                            <th scope="col" className="px-6 py-3  text-primary">
                                Discount
                            </th>
                            <th scope="col" className="px-6 py-3  text-primary">
                                Full Price
                            </th>
                            <th scope="col" className="px-6 py-3  text-primary">
                                New Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((item) => (
                                <tr key={item.name} className="bg-white border-b border-gray-200">
                                    <td>
                                        <img height={96} width={96} className="h-24 w-24 block object-contain" src={item.image} alt={item.name} title={item.name} />
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.qtn}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.discount}%
                                    </td>
                                    <td className="px-6 py-4">
                                        <s>
                                            {passToCurrency(item.price)}
                                        </s>
                                    </td>
                                    <td className="px-6 py-4">
                                        {passToCurrency(getDiscountedPrice(item.price, item.discount))}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ProductsTable