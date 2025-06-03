import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Salon {
  name: string
  address: string
  img: string
  rate: number
}

interface NearbySalonsProps {
  salons: Salon[]
}

export default function NearbySalons({ salons }: NearbySalonsProps) {
  return (
    <section aria-labelledby="nearby-salons">
      <h3 id="nearby-salons" className="text-lg md:text-xl font-bold text-gray-800 text-right mb-4 md:mb-6">
        پیرایشگاه نزدیک
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {salons.map((salon, index) => (
          <article
            key={index}
            className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={salon.img || "/placeholder.svg"}
              alt="Exterior photo of سالن جاوید ایرانیان"
              width={60}
              height={60}
              className="rounded-lg object-cover"
            />
            <div className="flex-1 text-right">
              <h4 className="font-semibold text-gray-800">{salon.name}</h4>
              <p className="text-sm text-gray-500">{salon.address}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-sm font-medium">{salon.rate}</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </article>
        ))}
      </div>

      <Button className="w-full mt-4 md:mt-6 bg-[#363062] hover:bg-purple-700 text-white rounded-lg py-3">
        دیدن همه
      </Button>
    </section>
  )
}
