'use client'

import React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Extend the CarouselProps interface to accept `autoplay`, `delay`, etc.
interface CarouselProps {
  children: React.ReactNode
  autoplay?: boolean
  delay?: number
  stopOnInteraction?: boolean
  className?: string
}

export function Carousel({
  children,
  autoplay = false,
  delay = 2000,
  stopOnInteraction = true,
}: CarouselProps) {
  const plugin = React.useRef(
    autoplay ? Autoplay({ delay, stopOnInteraction }) : undefined
  )

  return (
    <BaseCarousel
      opts={{
        direction: "rtl"
      }}
      plugins={plugin.current ? [plugin.current] : undefined}
      className="w-full mx-auto flex flex-shrink items-stretch"
      onMouseEnter={plugin.current?.stop}
      onMouseLeave={plugin.current?.reset}
    >
      <CarouselContent>
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-full">{child}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </BaseCarousel>
  )
}
