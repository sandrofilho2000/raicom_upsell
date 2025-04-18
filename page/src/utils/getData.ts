import api from "@/app/api/route";

async function getData(id="") {
    const defaultVariantsUrl = `${process.env.LOCAL_API_URL}/api/variants_list/`;
    const defaultDataUrl = `${process.env.LOCAL_API_URL}/api/variants${id ? `?id=${id}` : ''}`;
    const remoteVariantsUrl = `${process.env.REMOTE_API_URL}/api/variants_list`;
    const remoteDataUrl = `${process.env.REMOTE_API_URL}/api/variants/${id ? id : ''}`;
    
    const [
        defaultVariantList,
        defaultData,
        remoteVariantList,
        remoteData,
    ] = await Promise.all([
        api(defaultVariantsUrl),
        api(defaultDataUrl),
        api(remoteVariantsUrl),
        api(remoteDataUrl),
    ]);

    
    const variantList = remoteVariantList.length ? remoteVariantList : defaultVariantList;
    const data = remoteData ? remoteData : defaultData;

    return { variantList, data };
}


export default getData