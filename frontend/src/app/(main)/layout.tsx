import { FC, ReactNode } from "react";
// import Header from "./_components/header/header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="border mx-2 md:mx-8 my-2 md:my-6 lg:mx-16 py-3 md:py-6 px-2 md:px-6 lg:px-16 rounded-lg min-h-dvh">
      {/* <Header /> */}
      {children}
    </main>
  );
};

export default Layout;
