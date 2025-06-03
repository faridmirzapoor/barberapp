"use client"; // تبدیل به Client Component

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLogoutUser from "@/services/auth/logout"; // وارد کردن هوک سفارشی

const UserPanel = () => {
  const logout = useLogoutUser(); // استفاده از هوک سفارشی

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger>
        <Avatar className="w-7 h-7 sm:w-10 sm:h-10 lg:h-14 lg:w-14">
          <AvatarImage />
          <AvatarFallback className="bg-primary"></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="text-[12px] py-0.5 lg:text-base md:py-1">
          <button onClick={logout}>خروج</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserPanel;
{
  /* <DropdownMenuItem className="text-[12px] py-0.5 lg:text-base md:py-1">
          پروفایل
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[12px] py-0.5 lg:text-base md:py-1">
          کتاب های من
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[12px] py-0.5 lg:text-base md:py-1">
          نشان شده ها
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[12px] py-0.5 lg:text-base md:py-1">
          پرداخت ها
        </DropdownMenuItem> */
}
