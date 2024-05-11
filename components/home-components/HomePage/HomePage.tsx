import { Suspense } from "react";
import "./HomePage.css";
import HomePageTop from "./HomePageTop";


export default function HomePage() {
  return (
    <div className='homePage'>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageTop />
      </Suspense>
    </div>
  )
}
