import { AspectRatio } from "@/components/ui/aspect-ratio";
import { API_URL } from "@/configs/global";
import { IBook } from "@/types/api/IBook.interface";
import { englishToPersianNumber } from "@/utils/helper/englishToPersianNumber";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export type BookItemProps = Pick<
  IBook,
  "images" | "author" | "title" | "id" | "rate"
>;

const BookItem: FC<BookItemProps> = ({ images, title, rate, id, author }) => {
  return (
    <Link
      href={`/book/${id}`}
      className="block relative w-[130px] md:w-[170px]"
    >
      <AspectRatio ratio={68 / 100} className="bg-primary overflow-hidden">
        <Image
          src={API_URL + images}
          alt={title}
          width={170}
          height={250}
          className="object-fill aspect-[4/5] w-full h-full"
        />
      </AspectRatio>
      <div
        className={`absolute bottom-0 z-0 h-1/2 w-full px-2`}
        style={{
          background:
            "linear-gradient(180deg, rgba(141, 141, 141, 0) 0%, #000000 84.67%)",
        }}
      >
        <div className="flex justify-between mt-[25px] md:mt-[50px] text-sm  md:text-base">
          <p className="text-white line-clamp-1">{title}</p>
          <p className="text-gold">{englishToPersianNumber(rate ?? "")}</p>
        </div>
        <p className="text-white text-[10px]  md:text-sm mt-1 md:mt-4 line-clamp-1">
          {author}
        </p>
      </div>
    </Link>
  );
};

export default BookItem;
