export default function MobileStatusBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white text-sm md:hidden">
      <span className="font-medium">19:27</span>
      <div className="flex items-center gap-1">
        <div className="flex gap-1">
          <div className="w-1 h-3 bg-black rounded-full"></div>
          <div className="w-1 h-3 bg-black rounded-full"></div>
          <div className="w-1 h-3 bg-black rounded-full"></div>
          <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-6 h-3 bg-black rounded-sm ml-1"></div>
      </div>
    </div>
  )
}
