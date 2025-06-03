import MobileStatusBar from "@/app/(main)/_components/main/mobile-status-bar"
import DesktopHeader from "@/app/(main)/_components/main/desktop-header"
import MobileHeaderProfile from "@/app/(main)/_components/main/mobile-header-profile"
import FeaturedSalonCarousel from "@/app/(main)/_components/main/featured-salon-carousel"
import NearbySalons from "@/app/(main)/_components/main/nearby-salons"
import StylistsSection from "@/app/(main)/_components/main/stylists-section"
import MapSection from "@/app/(main)/_components/main/map-section"
import BottomNavigation from "@/app/(main)/_components/main/bottom-navigation"

const carouselItems = ["/img/image1.png", "/img/image2.jpg"]

const user = {
  name: "فرید میرزاپور",
  img: "/img/profile.jpg",
}

const barbers = [
  {
    name: "امیرعباس سالاری",
    rate: 4.6,
    img: "/img/barber.jpg",
  },
  {
    name: "امیرعباس سالاری",
    rate: 4.8,
    img: "/img/barber.jpg",
  },
  {
    name: "امیرعباس سالاری",
    rate: 5,
    img: "/img/barber.jpg",
  },
  {
    name: "امیرعباس سالاری",
    rate: 5,
    img: "/img/barber.jpg",
  },
  {
    name: "امیرعباس سالاری",
    rate: 5,
    img: "/img/barber.jpg",
  },
]

const salons = [
  {
    name: "سالن جاوید ایرانیان",
    address: "تهران، بازار آهنگ شیمی، میدان بهمن",
    img: "/img/image1.png",
    rate: 4.5,
  },
  {
    name: "سالن جاوید ایرانیان",
    address: "تهران، بازار آهنگ شیمی، میدان بهمن",
    img: "/img/image1.png",
    rate: 4.5,
  },
  {
    name: "سالن جاوید ایرانیان",
    address: "تهران، بازار آهنگ شیمی، میدان بهمن",
    img: "/img/image1.png",
    rate: 4.5,
  },
  {
    name: "سالن جاوید ایرانیان",
    address: "تهران، بازار آهنگ شیمی، میدان بهمن",
    img: "/img/image1.png",
    rate: 4.5,
  },
  {
    name: "سالن جاوید ایرانیان",
    address: "تهران، بازار آهنگ شیمی، میدان بهمن",
    img: "/img/image1.png",
    rate: 4.5,
  },
  {
    name: "سالن جاوید ایرانیان",
    address: "تهران، بازار آهنگ شیمی، میدان بهمن",
    img: "/img/image1.png",
    rate: 4.5,
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MobileStatusBar />
      <DesktopHeader user={user} />
      <MobileHeaderProfile user={user} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Featured Content */}
          <section className="lg:col-span-2 space-y-6" aria-label="Featured content and nearby salons">
            <FeaturedSalonCarousel carouselItems={carouselItems} />
            <NearbySalons salons={salons} />
          </section>

          {/* Right Column - Sidebar Content */}
          <aside className="lg:col-span-1 space-y-6" aria-label="Sidebar content with stylists and map">
            <StylistsSection barbers={barbers} />
            <MapSection />
          </aside>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
