import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DesktopNav, MobileNav } from "./navigation";
import UserPanel from "./navigation/userPanel/userPanel";
import { API_URL } from "@/configs/global";
import { IAuthor, ITopic } from "@/types/api/IAuthor.interface";
import { IBook } from "@/types/api/IBook.interface";
import Link from "next/link";
import UsernameDisplay from "./displayUsername";
import IsLoggedState from "./isLoggedState";

export type MenuDataItem = {
  name: string;
  link: string;
  items: { name: string; link: string }[];
};

const Header = async () => {
  // Fetch authors
  const authorData = await fetch(`${API_URL}/authors`);
  const authors: IAuthor[] = await authorData
    .json()
    .then((data) => data.authors);

  // Fetch books
  const bookData = await fetch(`${API_URL}/books`);
  const books: IBook[] = await bookData.json().then((data) => data.all_books);

  const genreData = await fetch(`${API_URL}/topics/`);
  const allGenres = await genreData.json();
  const genres = allGenres.slice(0, 7); 

  const menuData: MenuDataItem[] = [
    {
      name: "ژانرها",
      items: genres.map((genre: any) => ({
        name: genre.name,
        link: `/genre/${genre.id}`, 
      })),
      link: "/genre",
    },
    {
      name: "نویسندگان",
      items: authors.slice(0, 7).map((author) => ({
        name: author.name,
        link: `/author/${author.id}`,
      })),
      link: "/author",
    },
    {
      name: "کتاب ها",
      items: books.slice(0, 7).map((book) => ({
        name: book.title,
        link: `/book/${book.id}`,
      })),
      link: "/book",
    },
  ];

  const isLogged = <IsLoggedState />;

  return (
    <header
      className="flex items-center justify-between px-3 py-2 relative"
      dir="rtl"
    >
      <MobileNav menuData={menuData} />
      <Link
        href={"/"}
        className="absolute lg:static top-[8px] right-[calc(50%-14px)] sm:right-[calc(50%-20px)]"
      >
        <Avatar className="w-7 h-7 sm:w-10 sm:h-10 lg:h-14 lg:w-14">
          <AvatarImage src="/img/logo.jpg" />
          <AvatarFallback className="bg-purple-1"></AvatarFallback>
        </Avatar>
      </Link>
      <DesktopNav menuData={menuData} />
      <div className="flex gap-2 md:gap-4 items-center text-gold flex-shrink-0">
        <UserPanel />
      </div>
      {isLogged && <UsernameDisplay />}
    </header>
  );
};

export default Header;