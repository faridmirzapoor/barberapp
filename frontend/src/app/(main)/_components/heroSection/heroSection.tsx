import { Carousel } from "../image_slider/carousal";
import { Card } from "../image_slider/card";
import Image from "next/image";
// import BookItem from "../listItem/item/bookItem";
import { IBook } from "@/types/api/IBook.interface";

const HeroSection = () => {
  const carouselItems = ["/img/image1.png", "/img/image2.jpg"];

  // Mocked book data
  const bookLists: {
    search_results: IBook[];
    popular_books: IBook[];
    top_authors: IBook[];
  } = {
    search_results: [],
    popular_books: [
      { id: 1, title: "کتاب اول", author: "نویسنده اول", cover: "/img/book1.jpg", likes: 100 }, // mock structure
      { id: 2, title: "کتاب دوم", author: "نویسنده دوم", cover: "/img/book2.jpg", likes: 200 },
      { id: 3, title: "کتاب سوم", author: "نویسنده سوم", cover: "/img/book3.jpg", likes: 300 },
    ],
    top_authors: [],
  };

  return (
    <section className="flex mt-12 lg:h-auto h-[400px]">
      <div className="hidden lg:flex flex-col lg:w-[40%] w-full">
        <div className="flex justify-evenly bg-black bg-opacity-70 px-12 py-8">
          <div className="flex flex-col gap-8 w-1/3">
            <p className="text-white text-center flex justify-center xl:text-2xl text-lg font-primary-demibold">
              بیشترین مطالعه این هفته کاربران
            </p>
            <div className="flex flex-col justify-center items-center bg-[#D9D9D9] font-primary-regular p-2">
              <p className="block">مطالعه</p>
              <span className="block font-primary-black">۳۵۶۶</span>
            </div>
          </div>
          <div className="min-h-[162px]">
            {/* <BookItem {...bookLists.popular_books[2]} /> */}
          </div>
        </div>
        <div className="flex justify-evenly bg-black bg-opacity-70 px-12 py-8">
          <div className="flex flex-col gap-8 w-1/3">
            <p className="text-white text-center flex justify-center xl:text-2xl text-lg font-primary-demibold">
              بیشترین پسندیدن این هفته کاربران
            </p>
            <div className="flex flex-col justify-center items-center bg-[#D9D9D9] font-primary-regular p-2">
              <p className="block">پسندیدن</p>
              <span className="block font-primary-black">۷۸۲</span>
            </div>
          </div>
          <div className="min-h-[162px]">
            {/* <BookItem {...bookLists.popular_books[0]} /> */}
          </div>
        </div>
      </div>
      <div className="relative flex lg:w-[60%] w-full items-stretch">
        <Carousel autoplay={true} delay={3000} stopOnInteraction={true}>
          {carouselItems.map((item, index) => (
            <Card key={index}>
              <div>
                <Image
                  src={item}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <Image
                  src={"/img/front-gradient.png"}
                  alt="gradient"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute top-[calc(100%-128px)] flex justify-center w-full h-full flex font-primary-demibold text-white">
                <p dir="rtl">۱۰ مقاله برتر در مورد مطالعه بهتر ۲۰۲۴</p>
              </div>

              <div className="absolute top-[calc(100%-92px)] flex justify-center w-full h-full flex font-primary-demibold text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.625 17.2167L15.7783 11.3017C18.0092 8.89836 17.9108 5.88003 16.4067 4.04753C15.6583 3.13503 14.5683 2.53419 13.3067 2.50169C12.2292 2.47336 11.0967 2.86003 10.0042 3.70336C8.90833 2.86003 7.7725 2.47336 6.69333 2.50169C5.43083 2.53503 4.33917 3.13503 3.59 4.04753C2.085 5.88169 1.99417 8.90003 4.23333 11.3025L9.38583 17.2167C9.54417 17.3967 9.76917 17.5 10.005 17.5C10.1225 17.4999 10.2385 17.4745 10.3453 17.4256C10.4522 17.3767 10.5472 17.3055 10.6242 17.2167H10.625Z"
                    fill="#7E699F"
                  />
                </svg>
                <span className="text-primary">پسندیدن ۵۶۲</span>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
