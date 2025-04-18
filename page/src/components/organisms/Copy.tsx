import { iTitle } from "@/interfaces";
import JackpotIcon from "../atoms/JackpotIcon";
import Title from "../cells/Title";

type CopyProps = {
    title: iTitle;
    text: string;
};

const Copy = ({ data }: { data: CopyProps }) => {
    const { title, text } = data

    return (
        <section className="border max-w-2xl mx-auto rounded-lg text-sm border-solid p-4 text-center">
            <div className="wrapper max-w-lg mx-auto">
                <Title title={title} />
                <div className="mb-b" dangerouslySetInnerHTML={{ __html: text }}></div>
                {/* <p className="mb-2">
                    Take a spin and uncover amazing prizes! From free gifts to exclusive discounts, every spin has something special in store.
                </p>
                <p className="mb-2">
                    Why wait? Every turn of the wheel could bring you a <span className="text-primary font-bold">surprise!</span> Enjoy the thrill and discover your next <span className="text-primary font-bold">great reward today!</span>
                </p> */}
                <div className="flex justify-center">
                    <JackpotIcon />
                </div>
            </div>
        </section>
    )
}

export default Copy