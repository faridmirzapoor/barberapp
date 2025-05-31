// import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - صفحه مورد نظر یافت نشد
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          صفحه‌ای که به دنبال آن هستید، وجود ندارد. ممکن است جابجا یا حذف شده
          باشد.
        </p>

        {/* Back to Home Button */}
        <Link href="/">
          <Button size="lg">بازگشت به صفحه اصلی</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
