export async function fetchHomeCategory() {
  return await fetch('https://api.vgn.cn/apiv2/v2/discount/condition').then(res => res.json())
}
