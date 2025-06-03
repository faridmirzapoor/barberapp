"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Barbershop locations in Kerman, Iran
const barbershops = [
  {
    id: 1,
    name: "آرایشگاه مردانه پارسیان",
    lat: 30.2839,
    lng: 57.0834,
    address: "کرمان، خیابان جمهوری",
  },
  {
    id: 2,
    name: "سالن آقایان کیانی",
    lat: 30.2901,
    lng: 57.0721,
    address: "کرمان، میدان آزادی",
  },
  {
    id: 3,
    name: "آرایشگاه مدرن",
    lat: 30.2756,
    lng: 57.0912,
    address: "کرمان، خیابان شهید بهشتی",
  },
  {
    id: 4,
    name: "سالن جاوید ایرانیان",
    lat: 30.2945,
    lng: 57.0634,
    address: "کرمان، بازار آهنگ شیمی، میدان بهمن",
  },
  {
    id: 5,
    name: "آرایشگاه VIP",
    lat: 30.2712,
    lng: 57.0789,
    address: "کرمان، خیابان ۲۲ بهمن",
  },
  {
    id: 6,
    name: "سالن آقایان رضوی",
    lat: 30.2823,
    lng: 57.0945,
    address: "کرمان، خیابان امام خمینی",
  },
]

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize the map
    const map = L.map(mapRef.current).setView([30.2839, 57.0834], 13)

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map)

    // Custom icon for barbershops
    const barbershopIcon = L.divIcon({
      html: `
        <div style="
          background-color: #f97316;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        ">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      `,
      className: "custom-barbershop-icon",
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    })

    // User location icon
    const userIcon = L.divIcon({
      html: `
        <div style="
          background-color: #7c3aed;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        ">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      `,
      className: "custom-user-icon",
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    })

    // Add user location marker (center of Kerman)
    L.marker([30.2839, 57.0834], { icon: userIcon })
      .addTo(map)
      .bindPopup(
        '<div style="text-align: right; font-family: Arial;"><strong>موقعیت شما</strong><br/>کرمان، ایران</div>',
      )

    // Add barbershop markers
    barbershops.forEach((shop) => {
      L.marker([shop.lat, shop.lng], { icon: barbershopIcon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: right; font-family: Arial; min-width: 200px;">
            <strong>${shop.name}</strong><br/>
            <small style="color: #666;">${shop.address}</small><br/>
            <button style="
              background-color: #7c3aed;
              color: white;
              border: none;
              padding: 4px 8px;
              border-radius: 4px;
              margin-top: 4px;
              cursor: pointer;
              font-size: 12px;
            ">مشاهده جزئیات</button>
          </div>
        `)
    })

    mapInstanceRef.current = map

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <section className="bg-white rounded-2xl p-4 md:p-6 shadow-sm" aria-labelledby="map-heading">
      <h3 id="map-heading" className="text-lg md:text-xl font-bold text-gray-800 text-right mb-4 md:mb-6">
        نزدیک شما روی نقشه!
      </h3>
      <div
        ref={mapRef}
        className="h-48 md:h-64 rounded-lg overflow-hidden border border-gray-200"
        style={{ zIndex: 1 }}
      />
      <div className="mt-3 text-sm text-gray-500 text-right">
        <span className="inline-flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          آرایشگاه‌ها
        </span>
        <span className="inline-flex items-center gap-2 mr-4">
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          موقعیت شما
        </span>
      </div>
    </section>
  )
}
