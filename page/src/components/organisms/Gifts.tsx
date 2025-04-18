import { iGift, iTitle } from "@/interfaces";
import Title from "../cells/Title";


type TitleProps = {
    gifts: iGift[];
    title: iTitle;
};

const Gifts = ({ data }: { data: TitleProps }) => {
    const { gifts, title } = data
    const enshort_string = (string: string) => {
        let new_string = string
        if (new_string.length > 30) {
            new_string = new_string.slice(0, 30) + '...'
        }

        return new_string
    }
    return (
        <section className="max-w-2xl mx-auto">
            <Title title={title} />
            <div className="gifts-wrapper flex gap-6 justify-center flex-wrap">
                {
                    gifts.map((item, index) => (
                        <div key={index} className=" w-44 h-44 md:w-52 md:h-52 rounded-xl gift-card p-4">
                            <div className="w-full h-2/3 img_container">
                                <img src={item.image} className="h-full mx-auto object-contain " />
                            </div>
                            <div className="card-info">
                                <p className="discount text-sm font-bold rounded-tr-md w-20 pl-2 text-white bg-primary">
                                    {item.discount != 100 ? `${item.discount}% OFF` : 'FREE'}
                                </p>
                                <p className="text-sm">
                                    {enshort_string(item.name)}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Gifts