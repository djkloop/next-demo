'use client'

import "./HomeNav.css";
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchHomeCategory } from '@/api/home/getCategory';
import { Skeleton } from '../ui/skeleton';
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { RiSteamFill } from "../icon/RiSteamFill";
import { RiXboxFill } from "../icon/RiXboxFill";
import { RiSwitchFill } from "../icon/RiSwitchFill";
import { RiPlaystationFill } from "../icon/RiPlaystationFill";


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

function MenuWrapper({ isTop = false, list, tag, isShowDivider = true }: { isTop?: boolean, list: any, tag: string, isShowDivider?: boolean }) {
  return (
    <>
      <ul className='gap-4 flex flex-col items-center justify-center'>
        <div className={cn('text-large font-bold flex items-center justify-center', [isTop ? 'mt-4' : 'mt-2'])}>{tag}</div>
        {
          list.map((item: any) => (
            <li key={item.id} className='homeNavBoxContentItem'>
              {
                item?.icon && (
                  <div className="w-[28px] h-[28px] flex items-center justify-start">
                    {item.icon}
                  </div>
                )
              }
              <span className={cn([item?.icon && 'min-w-12'])}>{item.name}</span>
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
      icon: <RiSteamFill fontSize={20} />
    },
    {
      id: 1,
      name: "Switch",
      icon: <RiSwitchFill fontSize={20} />
    },
    {
      id: 2,
      name: "PS4",
      icon: <RiPlaystationFill fontSize={20} />
    },
    {
      id: 6,
      name: "PS5",
      icon: <RiPlaystationFill fontSize={20} />
    },
    {
      id: 4,
      name: "Xbox",
      icon: <RiXboxFill fontSize={20} />
    },
  ]
  // 打折信息
  const discountInfoMenu = [
    {
      id: 0,
      name: "正在打折",
    },
    {
      id: 1,
      name: "历史新低",
    },
    {
      id: 3,
      name: "任意史低",
    }
  ]
  const [data] = useGetHomeCategoryQuery();
  // 游戏分类
  const gameCategoryMenu = data?.data?.[0]?.data?.map((x: string, index: number) => ({ id: x + '_' + index, name: x })) ?? []
  

  return (
    <>
      <MenuWrapper tag='游戏平台' isTop={true} list={platformMenu}  />
      <MenuWrapper tag='折扣力度' list={discountInfoMenu}  />
      <MenuWrapper tag='游戏分类' list={gameCategoryMenu} />
    </>
  )
}


export default function HomeNav() {

  return (
    <div className='absolute z-20 left-4 top-[68px] h-full'>
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
