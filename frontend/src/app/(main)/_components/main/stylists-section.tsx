import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Barber {
  name: string
  rate: number
  img: string
}

interface StylistsSectionProps {
  barbers: Barber[]
}

export default function StylistsSection({ barbers }: StylistsSectionProps) {
  return (
    <section className="bg-white rounded-2xl p-4 md:p-6 shadow-sm" aria-labelledby="stylists-heading">
      <h3 id="stylists-heading" className="text-lg md:text-xl font-bold text-gray-800 text-right mb-4 md:mb-6">
        آرایشگران
      </h3>
      <div className="flex overflow-x-scroll whitespace-nowrap gap-4 py-4 mb-4 md:mb-6 lg:flex-col max-h-[40vh]">
        {barbers.map((barber, index) => (
          <article key={index} className="flex-shrink-0 text-center lg:flex lg:items-center lg:gap-4 lg:text-right">
            <div className="relative mx-auto lg:mx-0 lg:flex-shrink-0">
              <Image
                src={barber.img || "/placeholder.svg"}
                alt={`Portrait of stylist ${barber.name}`}
                width={100}
                height={105}
                className="rounded-full object-cover aspect-square w-[100px] h-[105px]"
              />
              <div
                className="absolute w-[100px] h-[105px] z-10 rounded-full bottom-0"
                style={{
                  backgroundImage: 'url("/img/front-gradient.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full z-20">
                {barber.name}
              </div>
            </div>
            <div className="lg:flex-1">
              <div className="hidden lg:flex items-center justify-end gap-1 mt-1">
                <span className="text-sm">4.8</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </article>
        ))}
      </div>

      <Button className="w-full bg-[#363062] hover:bg-purple-700 text-white rounded-lg py-3">دیدن همه</Button>
    </section>
  )
}
