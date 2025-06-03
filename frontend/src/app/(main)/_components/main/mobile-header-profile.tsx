import Image from "next/image"
import { MapPin } from "lucide-react"

interface User {
  name: string
  img: string
}

interface MobileHeaderProfileProps {
  user: User
}

export default function MobileHeaderProfile({ user }: MobileHeaderProfileProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white md:hidden">
      <div className="flex items-center gap-3">
        <Image
          src={user.img || "/placeholder.svg"}
          alt="Profile picture of فرید میرزایور"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="text-right">
          <h2 className="font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            تهران، دانشگاه باهنر کرمان
          </p>
        </div>
      </div>
    </div>
  )
}
