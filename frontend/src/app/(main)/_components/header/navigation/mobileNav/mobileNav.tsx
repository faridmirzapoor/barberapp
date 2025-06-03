import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { FiMenu } from "react-icons/fi";
import CustomAccordion from "./customAccordion/customAccordion";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { MenuDataItem } from "../../header";
import Link from "next/link";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useState } from "react";

type MobileNavProps = {
  menuData: MenuDataItem[];
};

export const MobileNav: FC<MobileNavProps> = ({ menuData }) => {
  // const [language, setLanguage] = useState("fa");

  return (
    <div className="lg:hidden">
      <Drawer direction="right">
        <DrawerTrigger className="mt-1">
          <DrawerTitle>
            <FiMenu />
          </DrawerTitle>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col gap-7 p-4 w-3/4">
          <CustomAccordion menuData={menuData} />
          <div className="flex justify-center gap-3">
            <Link href={"/login"}>
              <Button variant="secondary">ورود</Button>
            </Link>

            <Link href={"/sign-up"}>
              <Button>ثبت نام</Button>
            </Link>
          </div>
          {/* <Select dir="rtl" onValueChange={setLanguage} defaultValue={language}>
            <SelectTrigger>
              <SelectValue placeholder="Select a verified email to display" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fa"> فارسی</SelectItem>
              <SelectItem value="en"> English</SelectItem>
              <SelectItem value="ar"> العربية</SelectItem>
            </SelectContent>
          </Select> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
};
