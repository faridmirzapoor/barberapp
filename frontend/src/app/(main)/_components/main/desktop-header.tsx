import Image from "next/image"
import { Scissors, Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface User {
  name: string
  img: string
}

interface DesktopHeaderProps {
  user: User
}

export default function DesktopHeader({ user }: DesktopHeaderProps) {
  return (
    <header className="hidden md:flex items-center justify-between p-6 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <div className="bg-purple-600 p-2 rounded-lg">
          <Scissors className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">سالن آرایش</h1>
      </div>
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="sm" aria-label="Search">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="sm" aria-label="Notifications">
          <Bell className="w-5 h-5" />
        </Button>
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
            <p className="text-sm text-gray-500">تهران، دانشگاه باهنر کرمان</p>
          </div>
        </div>
      </div>
    </header>
  )
}
