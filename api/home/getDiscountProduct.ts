export async function fetchHomeDiscountProductWithId(params: any) {
  return await fetch(`https://api.vgn.cn/apiv2/v3/game/${params.id}`).then(res => res.json())
}
