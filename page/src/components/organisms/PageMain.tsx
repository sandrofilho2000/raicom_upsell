
import Countdown from "@/components/cells/Countdown";
import BuySection from "@/components/organisms/BuySection";
import Copy from "@/components/organisms/Copy";
import Gifts from "@/components/organisms/Gifts";
import GiftWinner from "@/components/organisms/GiftWinner";
import Jackpot from "@/components/organisms/Jackpot";
import ProductsTable from "@/components/organisms/ProductsTable";
import { iPage } from "@/interfaces";

const PageMain = ({ data }: { data: iPage }) => {
    const {
        gifts,
        chances_of_winning,
        products,
        copy_title,
        gifts_title,
        jackpot_title,
        products_table_title,
        countdown_minutes
    } = data

    return (
        <main className="p-4 pb-20">
            <Countdown minutes={countdown_minutes} />
            <Copy data={copy_title} />
            <Gifts data={{ gifts: gifts, title: gifts_title }} />
            <Jackpot data={{ gifts: gifts, title: jackpot_title, chances_of_winning: chances_of_winning }} />
            <ProductsTable data={{ products: products, title: products_table_title }} />
            <BuySection />
            <GiftWinner />
        </main>
    )
}

export default PageMain