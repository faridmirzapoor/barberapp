import Link from "next/link";
// import { MenuUrls } from "../dummyData/data";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { MenuDataItem } from "../../header";

type DesktopNavProps = {
  menuData: MenuDataItem[];
};

export const DesktopNav: FC<DesktopNavProps> = ({ menuData }) => {
  return (
    <NavigationMenu
      dir="rtl"
      className="flex-grow  justify-center absolute top-5 lg:right-[calc(50%-160px)] xl:right-[calc(50%-179px)] hidden lg:flex"
    >
      <NavigationMenuList className="flex">
        {menuData.map(({ items, name, link }, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className="lg:text-base xl:text-xl">
              {name}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[250px] gap-3 p-4 md:w-[400px] md:grid-cols-4 lg:w-[550px] ">
                {items.map(({ name, link }, index) => (
                  <li key={index}>
                    <NavigationMenuLink
                      asChild
                      className="flex cursor-pointer select-none items-center rounded-md p-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <Link href={link}>
                        <p className="line-clamp-1">{name}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
                <li className="col-start-4 row-start-2">
                  <Link href={link}>
                    <Button>همه {name}</Button>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
