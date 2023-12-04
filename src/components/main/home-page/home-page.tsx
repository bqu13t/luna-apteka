import HomePageHeader from "@/components/main/home-page/home-page-header/home-page-header"
import HomePagePopular from "@/components/main/home-page/home-page-popular/home-page-popular"
import HomePageStories from "@/components/main/home-page/home-page-stories/home-page-stories"
import HomePageProducts from "@/components/main/home-page/home-page-products/home-page-products"
import HomePageNav from "@/components/main/home-page/home-page-nav/home-page-nav"
import Footer from "@/components/footer/footer"

export default function HomePage() {
  return (
    <main className="home-page main">
      <HomePageNav />
      <HomePageStories />
      <div className="main__container">
        <HomePageHeader />
        <HomePagePopular />
      </div>
      <HomePageProducts />
    </main>
  )
}
