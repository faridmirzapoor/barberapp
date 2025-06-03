import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

const iransans = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSans/woff2/IRANSansX-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/woff2/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/woff2/IRANSansX-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/woff2/IRANSansX-Demibold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/woff2/IRANSansX-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={cn(
          `bg-white text-neutral-12 ${iransans.className}`,
          iransans.variable
        )}
      >
        <NextTopLoader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
