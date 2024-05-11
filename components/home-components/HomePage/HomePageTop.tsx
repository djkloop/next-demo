'use client'

import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { fetchHomeDiscount } from '@/api/home/getDiscount'
import Image from 'next/image'
import { fetchHomeDiscountProductWithId } from '@/api/home/getDiscountProduct'
import { SimplePlayer } from 'xgplayer';

import 'xgplayer/dist/index.min.css';

function useQueryDiscountGameList() {
  //

  const query = useSuspenseQuery({
    queryKey: ['homeDiscount'],
    queryFn: () => fetchHomeDiscount({
      page: 1,
      page_size: 10,
      onlyLowest: 0,
      filters: [],
      platform: 3,
    }),
  })
  return [query.data, query] as const
}


function useQueryProductDetail(id?:number) {
  const query = useQuery({
    queryKey: ['homeDiscountProduct', id],
    queryFn: () => fetchHomeDiscountProductWithId({id}),
    enabled: false
  })

  return [query.data, query] as const
}

export default function HomePageTop() {

  const [spuId, setSpuId] = useState()
  // 请求顶部数据
  const [data, query] = useQueryDiscountGameList()
  const [productDetailData, productDetailQuery] = useQueryProductDetail(spuId)

  if (query.isLoading) {
    return <div className='w-full h-[44vw] text-center text-3xl'>加载数据</div>
  }

  useEffect(() => {
    const firstData = data?.data?.[0]
    setSpuId(firstData?.spu_id)
    productDetailQuery.refetch()
  }, [data])

  useEffect(() => {
    const video_url = productDetailData?.data?.movie?.[0]?.video_url ?? ""
     new SimplePlayer({
      id: "activeVideo",
      autoplayMuted: true,
      autoplay: true,
      fluid: true,
      loop: true,
      url: video_url
    })
  }, [productDetailData])

  return (
    <div className='w-full h-[44vw]'>
      <div className='w-full h-[98.8%] relative overflow-hidden'>
        <div className='activeImage w-full h-full relative'>
          <div id='activeVideo'></div>
        </div>
      </div>
    </div>
  )
}
