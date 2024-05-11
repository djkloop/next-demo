'use client'

import "./HomeNav.css";
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchHomeCategory } from '@/api/home/getCategory';
import { Skeleton } from '../ui/skeleton';
import { Suspense } from "react";


function MenuLoading() {

  const random = Math.floor(Math.random() * 10)

  return (
    <>
      <div className='flex mt-4 items-center gap-4 justify-center flex-col'>
        {
          Array(random).fill(0).map((_, index) => (
            <Skeleton className="w-[100px] h-[20px]" key={index} />
          ))
        }
      </div>
    </>
  )
}

function MenuWrapper({ list, tag, isShowDivider = true }: { list: any, tag: string, isShowDivider?: boolean }) {
  return (
    <>
      <ul className='gap-4 flex flex-col'>
        <div className='text-large font-bold flex items-center justify-center mt-4'>{tag}</div>
        {
          list.map((item: any) => (
            <li key={item.id} className='homeNavBoxContentItem'>
              {item.name}
            </li>
          ))
        }
      </ul>
      {
        isShowDivider && <div className='homeNavBoxDivider'></div>
      }
    </>
  )
}

function useGetHomeCategoryQuery() {
  const query = useSuspenseQuery({
    queryKey: ['homeCategory'],
    queryFn: () => fetchHomeCategory(),
  })

  return [query.data, query] as const;
}

function HomeNavMenu() {
  const platformMenu = [
    {
      id: 3,
      name: "Steam",
    },
    {
      id: 1,
      name: "Switch",
    },
    {
      id: 2,
      name: "PS4",
    },
    {
      id: 6,
      name: "PS5",
    },
    {
      id: 4,
      name: "Xbox",
    },
  ]
  const [data] = useGetHomeCategoryQuery();
  const gameCategoryMenu = data?.data?.[0]?.data?.map((x: string, index: number) => ({ id: x + '_' + index, name: x })) ?? []

  return (
    <>
      <MenuWrapper tag='游戏平台' list={platformMenu} />
      <MenuWrapper tag='游戏分类' list={gameCategoryMenu} />
    </>
  )
}


export default function HomeNav() {

  return (
    <div className='absolute left-4 top-18 h-full'>
      <div className='block homeNav w-[144px] relative'>
        <div className='homeNavBox'>
          <div className='homeNavBoxContent [scrollbar-width:none]'>
            <Suspense fallback={<MenuLoading />}>
              <HomeNavMenu />
            </Suspense>
          </div>
          <div className='filter-bg'></div>
        </div>
      </div>
    </div>
  )
}
