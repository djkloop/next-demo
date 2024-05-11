'use client'

import Link from 'next/link'
import ThemeToggle from '../custom-ui/theme-toggle/ThemeToggle'
import {  NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@radix-ui/react-navigation-menu'

export default function HomeHeader() {
  return (
    <>
      <header className='fixed flex items-center justify-between top-0 py-4 px-6 z-50 w-full bg-transparent backdrop-blur'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                游戏爱折扣
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </header>
    </>
  )
}
