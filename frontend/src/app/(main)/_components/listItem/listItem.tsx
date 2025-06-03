// import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { ReactNode } from "react";
import AuthorItem, { AuthorItemProps } from "./item/authorItem";
import BookItem, { BookItemProps } from "./item/bookItem";

type ListProps<T> = {
  title: string;
  moreBtnText: string;
  items: T[];
  emptyListText?: string;
};

const isBookItem = (
  item: BookItemProps | AuthorItemProps
): item is BookItemProps => {
  return (item as BookItemProps)?.author !== undefined;
};

const ListItem = <T extends BookItemProps | AuthorItemProps>({
  items,
  title,
  // moreBtnText,
  emptyListText = "هیچ آیتمی پیدا نشد",
}: ListProps<T>): ReactNode => {
  return (
    <div
      className={`w-full ${
        isBookItem(items[0])
          ? "h-[240px] md:h-[310px]"
          : "h-[172px] md:h-[220px]"
      }`}
    >
      <div className="flex justify-between items-center px-2 pb-4 md:pb-6">
        <p className="font-bold md:text-xl">{title}</p>
        {/* <Button size="responsive">{moreBtnText}</Button> */}
      </div>
      {items.length !== 0 ? (
        <Carousel
          opts={{
            align: "end",
            direction: "rtl",
          }}
          className="w-full"
        >
          <CarouselContent className="ml-4 gap-x-3 md:gap-x-4">
            {items.map((data, index) => (
              <CarouselItem
                key={index}
                className="w-[130px] md:w-[170px] basis-auto"
              >
                {isBookItem(data) ? (
                  <BookItem {...data} />
                ) : (
                  <AuthorItem {...data} />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <p className="text-start text-lg ">{emptyListText}</p>
      )}
    </div>
  );
};

export default ListItem;
