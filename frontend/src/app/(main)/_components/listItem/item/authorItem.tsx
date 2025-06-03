import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/configs/global";
import { IAuthor } from "@/types/api/IAuthor.interface";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type AuthorItemProps = Pick<IAuthor, "name" | "photo" | "id">;

const AuthorItem: FC<AuthorItemProps> = ({ photo = "", name, id }) => {
  return (
    <Link href={`/author/${id}`} className="block text-center">
      {/* Author Photo */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto">
        <AspectRatio ratio={1 / 1} className="bg-primary overflow-hidden">
          <Image
            src={API_URL + photo} // Assuming `photo` is a valid URL
            alt={name}
            fill
            className="object-cover"
          />
        </AspectRatio>
      </div>

      {/* Author Name */}
      <p className="mt-2 text-sm md:text-base font-medium text-gray-800 line-clamp-1">
        {name}
      </p>
    </Link>
  );
};

export default AuthorItem;
