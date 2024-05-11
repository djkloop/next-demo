import HomeNav from '@/components/home-components/HomeNav'
import HomePage from '@/components/home-components/HomePage/HomePage'
import HomeHeader from '@/components/home-components/HomeHeader'

export default function Home() {
  return (
    <main className='relative'>
      <HomeHeader />
      <HomePage />
      <HomeNav />
    </main>
  )
}
