// src/app/variants/[id]/page.tsx

import VariantMenu from "@/components/cells/VariantMenu";
import PageMain from "@/components/organisms/PageMain";
import getData from "@/utils/getData";

interface PageProps {
    params: {
        id: string;
    };
}

export default async function Home({ params }: PageProps) {
    params = await params
    const id = await params.id

    const { variantList, data } = await getData(id)

    return (
        <>
            <PageMain data={data} />
            <VariantMenu data={variantList} />
        </>
    );
}



