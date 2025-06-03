import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FC } from "react";
import { MenuDataItem } from "../../../header";
import { Button } from "@/components/ui/button";

type CustomAccordionProps = {
  menuData: MenuDataItem[];
};

const CustomAccordion: FC<CustomAccordionProps> = ({ menuData }) => {
  return (
    <Accordion type="single" className="flex flex-col gap-3" collapsible>
      {menuData.map(({ items, name, link }, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-none "
        >
          <AccordionTrigger className="relative overflow-hidden bg-white transition-all duration-300 group py-2.5 px-4 rounded-lg [&[data-state=open]>svg]:text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-3 to-purple-2 opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100" />
            <span className="relative group-data-[state=open]:text-white">
              {name}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            <ul className="flex flex-col gap-2">
              {items.map(({ link, name }, index) => (
                <li
                  key={index}
                  className="hover:bg-slate-100 px-4 py-2 rounded-lg"
                >
                  <Link href={link}>{name}</Link>
                </li>
              ))}
              <li className=" px-4 py-2 rounded-lg">
                <Link href={link}>
                  <Button>همه {name}</Button>
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
