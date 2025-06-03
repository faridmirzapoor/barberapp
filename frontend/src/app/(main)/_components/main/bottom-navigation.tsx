import { Search, Heart, Home, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BottomNavigation() {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 md:hidden"
    >
      <Button variant="ghost" aria-label="Home">
        <Home className="w-6 h-6" />
      </Button>
      <Button variant="ghost" aria-label="Search">
        <Search className="w-6 h-6" />
      </Button>
      <Button variant="ghost" aria-label="Favorites">
        <Heart className="w-6 h-6" />
      </Button>
      <Button variant="ghost" aria-label="Profile">
        <User className="w-6 h-6" />
      </Button>
    </nav>
  )
}
