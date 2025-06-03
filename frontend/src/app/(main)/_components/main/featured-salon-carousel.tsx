import Image from "next/image"
import { Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/app/(main)/_components/image_slider/carousal"

interface FeaturedSalonCarouselProps {
  carouselItems: string[]
}

export default function FeaturedSalonCarousel({ carouselItems }: FeaturedSalonCarouselProps) {
  return (
    <div className="mt-4 md:mt-0">
      <div className="relative flex w-full items-stretch">
        <Carousel autoplay={true} delay={3000} stopOnInteraction={true}>
          {carouselItems.map((item, index) => (
            <Card key={index} className="relative overflow-hidden rounded-2xl">
              <CardContent className="p-0">
                <div className="relative h-48 md:h-64 lg:h-80">
                  <Image
                    src={item || "/placeholder.svg"}
                    alt="Interior of سالن جاوید ایرانیان"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Orange scissors icon */}
                  <div className="absolute top-4 left-4 bg-orange-500 p-2 md:p-3 rounded-lg">
                    <Scissors className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  {/* Salon name */}
                  <div className="absolute bottom-16 md:bottom-20 right-4 text-white text-right">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">سالن جاوید ایرانیان</h3>
                  </div>

                  {/* Book button */}
                  <Button className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 md:px-8 py-2 md:py-3">
                    !رزرو کن
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
