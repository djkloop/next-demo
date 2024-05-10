'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import ThemeToggle from '@/components/custom-ui/theme-toggle/ThemeToggle'
import HomeNav from '@/components/home-components/HomeNav'

export default function Home() {
  return (
    <main>
      <header className='sticky flex justify-between top-0 py-2 px-6 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                Game Box
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </header>
      <HomeNav />
    </main>
  )
}
