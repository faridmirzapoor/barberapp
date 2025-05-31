"use client";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
import React, { useEffect } from "react";

const Error = ({
  error,
}: {
  error: Error & { digest?: string }
}) => {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          500 - خطای سرور
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          از طرف ما مشکلی پیش آمد. لطفا بعدا دوباره تلاش کنید
        </p>

        {/* Back to Home Button */}
          <Button size="lg">بازگشت به صفحه اصلی</Button>
      </div>
    </div>
  );
};

export default Error;
