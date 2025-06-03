import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ListItemSkeleton = () => {
  return (
    <div className="w-full">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center px-2 pb-2 md:pb-6">
        <Skeleton className="h-6 w-32 md:w-48" /> {/* Title Skeleton */}
        <Skeleton className="h-10 w-24 md:w-32" /> {/* Button Skeleton */}
      </div>

      {/* Carousel Skeleton */}
      <Carousel
        opts={{
          align: "end",
          direction: "rtl",
        }}
        className="w-full"
      >
        <CarouselContent className="ml-4 gap-x-3 md:gap-x-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-[130px] md:w-[170px] basis-auto">
              {/* Item Skeleton */}
              <div className="block relative w-[130px] md:w-[170px]">
                <Skeleton className="aspect-[68/100] w-full h-full" /> {/* Image Skeleton */}
                <div className="absolute bottom-0 z-0 h-1/2 w-full px-2">
                  <div className="flex justify-between mt-[25px] md:mt-[50px]">
                    <Skeleton className="h-4 w-20 md:w-24" /> {/* Title Skeleton */}
                    <Skeleton className="h-4 w-8 md:w-12" /> {/* Rate Skeleton */}
                  </div>
                  <Skeleton className="h-3 w-24 md:w-32 mt-1 md:mt-4" /> {/* Author Skeleton */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ListItemSkeleton;