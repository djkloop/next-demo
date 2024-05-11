export async function fetchHomeDiscount(params: any) {
  return await fetch(`https://api.vgn.cn/apiv2/v3/product/promotion?${new URLSearchParams(params)}`).then(res => res.json())
}
