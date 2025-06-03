'use client'
// app/barber/[id]/page.jsx
import { Card } from "@/app/(main)/_components/image_slider/card";
import { Carousel } from "@/app/(main)/_components/image_slider/carousal";
import MoreDetails from "@/app/(main)/_components/moreDetails/moreDetails";
import ReserveModal from "@/app/(main)/_components/reserveModal";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

// فرضی: اطلاعات آرایشگر، قابل تغییر/دریافت از API
const barber = {
  name: "امیرعباس ستاکی",
  avatar: "/img/profile.jpg",
  rate: 4.7,
  totalCustomers: 312,
  tags: ["اصلاح سر", "رنگ مو", "پاکسازی صورت", "دکلره", "کراتین"],
  about:
    "بیش از ۱۰ سال تجربه در خدمات زیبایی و کوتاهی مو، تخصص در اصلاح و رنگ مو با جدیدترین متدها. بیش از ۱۰ سال تجربه در خدمات زیبایی و کوتاهی مو، تخصص در اصلاح و رنگ مو با جدیدترین متدها. بیش از ۱۰ سال تجربه در خدمات زیبایی و کوتاهی مو، تخصص در اصلاح و رنگ مو با جدیدترین متدها. بیش از ۱۰ سال تجربه در خدمات زیبایی و کوتاهی مو، تخصص در اصلاح و رنگ مو با جدیدترین متدها. بیش از ۱۰ سال تجربه در خدمات زیبایی و کوتاهی مو، تخصص در اصلاح و رنگ مو با جدیدترین متدها.",
  portfolio: ["/cut1.jpg", "/cut2.jpg", "/cut3.jpg"], // این تصاویر را باید به public اضافه کنید
};

const carouselItems = ["/img/image3.webp", "/img/image4.jpg"];

export default function BarberProfile() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="min-h-screen bg-white rounded-2xl pb-16 md:pb-0" dir="rtl">
      {/* هدر و تصویر پروفایل */}
      <section className="p-4 flex justify-center">
        <div className="relative w-full max-w-xl rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg overflow-hidden py-8 flex flex-col items-center">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-indigo-100 shadow mb-3 overflow-hidden">
            <Image
              src={barber.avatar}
              width={144}
              height={144}
              alt="پروفایل آرایشگر"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="text-xl md:text-2xl font-bold text-gray-900">
            {barber.name}
          </div>
          <div className="flex gap-6 mt-2 text-gray-600 text-sm md:text-base">
            <div>
              امتیاز:{" "}
              <span className="text-yellow-500 font-bold">{barber.rate}</span>
            </div>
            <div>
              مشتری:{" "}
              <span className="font-semibold">{barber.totalCustomers}+</span>
            </div>
          </div>
        </div>
      </section>

      {/* برچسب مهارت‌ها */}
      <section className="px-4 py-2 max-w-xl mx-auto">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {barber.tags.map((tag) => (
            <div
              key={tag}
              className="bg-blue-100 px-2 md:px-4 py-1 rounded text-xs md:text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </section>

      {/* درباره */}
      <section className="px-4 py-2 max-w-xl mx-auto">
        <MoreDetails content={barber.about} title="درباره آرایشگر" />
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* دکمه رزرو */}
      <section
        className="px-4 pt-4 max-w-xl mx-auto"
        onClick={() => setShowModal(true)}
      >
        <ReserveModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedTime(null);
          }}
          barberName="امیرعباس ستاکی"
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          onReserve={async (time) => {
            try {
              const response = await fetch(
                "http://127.0.0.1:8000/bookings/bookings-barber/",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    date: time.date, // Make sure your modal sends this format
                    time: time.time,
                    note: time.note || "",
                    service: time.service || 0,
                  }),
                }
              );

              if (!response.ok) {
                throw new Error("خطا در رزرو وقت");
              }

              alert("رزرو با موفقیت انجام شد!");
              setShowModal(false);
              setSelectedTime(null);
            } catch (error) {
              alert(error.message);
            }
          }}
        />
        <button className="w-full bg-[#363062] text-white py-2 rounded-lg hover:bg-indigo-800 transition font-bold">
          رزرو وقت با {barber.name}
        </button>
      </section>

      {/* ناوبری پایین مانند قبلی */}
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow px-4 py-2 border-t flex justify-between items-center z-50 md:static md:shadow-none md:border-t-0 md:justify-center md:gap-8 max-w-xl mx-auto">
        <button className="flex flex-col items-center text-gray-500 text-xs md:text-sm font-normal transition hover:text-indigo-600">
          پروفایل
        </button>
        <button className="flex flex-col items-center text-gray-500 text-xs md:text-sm font-normal transition hover:text-indigo-600">
          خدمات
        </button>
        <button className="flex flex-col items-center text-gray-500 text-xs md:text-sm font-normal transition hover:text-indigo-600">
          نمونه کارها
        </button>
        <button className="flex flex-col items-center text-indigo-800 text-xs md:text-sm font-bold transition">
          خانه
        </button>
      </nav>
    </div>
  );
}
