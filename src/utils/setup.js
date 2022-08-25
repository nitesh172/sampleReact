import { callAPI } from "./API"

export const setupBrandData = async (context) => {
    const { setBrandData } = context
    const brandInfo = await callAPI('/brand/setup', 'GET')
    setBrandData(brandInfo && brandInfo.BrandID ? brandInfo : null)
    return
}