// src/app/variants/[id]/page.tsx

import VariantMenu from "@/components/cells/VariantMenu";
import PageMain from "@/components/organisms/PageMain";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        id: string;
    };
}

export default async function Home({ params }: PageProps) {
    params = await params
    const id = await params.id

    const [data, variantList] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_HOST}/api/variants/${id}`, {
            cache: "no-store",
        }).then((res) => res.json()),

        fetch(`${process.env.NEXT_PUBLIC_HOST}/api/variants_list`, {
            cache: "no-store",
        }).then((res) => res.json()),
    ]);

    if (!data) return notFound();

    return (
        <>
            <PageMain data={data} />
            <VariantMenu data={variantList} />
        </>
    );
}



