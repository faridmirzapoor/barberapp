// app/page.jsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Carousel } from "../(main)/_components/image_slider/carousal";
import { Card } from "../(main)/_components/image_slider/card";
import { CardContent } from "@/components/ui/card";
import { Scissors } from "lucide-react";
import StylistsSection from "../(main)/_components/main/stylists-section";

const carouselItems = ["/img/image3.webp", "/img/image4.jpg"];
const salon = {
  name: "سالن جاوید ایرانیان",
  address: "تهران، بازار آهنگ شیمی، میدان بهمن",
  img: "/img/image1.png",
  rate: 4.5,
};

const salonBarbers = [
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

const tags = [
  "اصلاح سر",
  "رنگ مو",
  "پاکسازی صورت",
  "دستشو",
  "مشاور",
  "دکلره",
  "کرم",
  "کراتین",
  "اصلاح ریش",
  "اصلاح صورت",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white rounded-2xl pb-16 md:pb-0">
      {/* Header و تصویر سالن */}
      <section className="p-4 flex justify-center">
        <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <Image
            src={salon.img}
            width={600}
            height={260}
            alt="سالن"
            className="w-full h-[180px] md:h-[240px] object-cover transition-all"
            priority
          />
          <div className="absolute bottom-8 left-0 w-full flex flex-col items-center md:bottom-10 px-6 text-center">
            <div className="bg-[#363062] text-white px-6 w-full py-2 rounded-xl font-semibold text-base md:text-lg border-white border-1">
              سالن جاوید ایرانیان
            </div>

            <div className="flex justify-between w-full mt-2 text-xs md:text-sm text-white ">
              <span>ساعت ۲۱:۰۰ تا ۱۰:۰۰</span>
              <span>منتخب کاربران، امتیاز ۴</span>
            </div>
          </div>
        </div>
      </section>
      {/* مشخصات */}
      <section className="px-4 py-2 max-w-xl mx-auto">
        <div className="border rounded-xl p-3 md:p-4 bg-white flex flex-col gap-2">
          <div className="flex justify-between items-center py-1 border-b">
            <span className="text-gray-600">نام مدیر</span>
            <span className="font-semibold">امیرعباس ستاکی</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-600">تعداد پرسنل‌ها</span>
            <span className="font-semibold text-indigo-600">۴</span>
          </div>
        </div>
      </section>
      {/* تگ سرویس‌ها */}
      <section className="px-4 py-2 max-w-xl mx-auto">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-blue-100 px-2 md:px-4 py-1 rounded text-xs md:text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </section>
      {/* نمونه کارها */}
      <section className="px-4 pt-2 max-w-xl mx-auto">
        <h3 className="font-bold text-yellow-700 mb-2 text-base md:text-lg">
          نمونه کارها
        </h3>
        <div className="mt-4 md:mt-0">
          <div className="relative flex w-full items-stretch">
            <Carousel autoplay={true} delay={3000} stopOnInteraction={true}>
              {carouselItems.map((item, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 md:h-64 lg:h-80">
                      <Image
                        src={item || "/placeholder.svg"}
                        alt="Interior of سالن جاوید ایرانیان"
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      {/* Book button */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
        {/* <button className="w-full mt-3 bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800 transition">
          دیدن همه
        </button> */}
      </section>
      {/* آرایشگران */}
      <StylistsSection barbers={salonBarbers} />
      {/* ناوبری پایین */}
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow px-4 py-2 border-t flex justify-between items-center z-50 md:static md:shadow-none md:border-t-0 md:justify-center md:gap-8 max-w-xl mx-auto">
        <button className="flex flex-col items-center text-gray-500 text-xs md:text-sm font-normal transition hover:text-indigo-600">
          پروفایل
        </button>
        <button className="flex flex-col items-center text-gray-500 text-xs md:text-sm font-normal transition hover:text-indigo-600">
          ثبت
        </button>
        <button className="flex flex-col items-center text-gray-500 text-xs md:text-sm font-normal transition hover:text-indigo-600">
          زمان
        </button>
        <button className="flex flex-col items-center text-indigo-800 text-xs md:text-sm font-bold transition">
          صفحه اصلی
        </button>
      </nav>
    </div>
  );
}
