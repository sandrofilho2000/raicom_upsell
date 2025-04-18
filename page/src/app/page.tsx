import VariantMenu from "@/components/cells/VariantMenu";
import PageMain from "@/components/organisms/PageMain";

export default async function Home() {
  const [data, variantList] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/variants`, {
      cache: 'no-store',
    }).then(res => res.json()),

    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/variants_list`, {
      cache: 'no-store',
    }).then(res => res.json()),
  ]);


  return (
    <>
      <PageMain data={data} />;
      <VariantMenu data={variantList} />
    </>
  )

}
