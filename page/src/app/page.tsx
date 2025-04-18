import VariantMenu from "@/components/cells/VariantMenu";
import PageMain from "@/components/organisms/PageMain";
import getData from "@/utils/getData";

export default async function Home() {
  const { variantList, data } = await getData()

  return (
    <>
      <PageMain data={data} />;
      <VariantMenu data={variantList} />
    </>
  )

}
