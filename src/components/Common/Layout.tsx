import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <main className="mx-auto max-w-full min-h-[100vh]">
        <Sidebar />
        <div className="w-full min-h-[100vh] pl-[40px] lg:pl-[220px] lg:pr-[60px]">
          <Navbar />
          <div className="pt-[20px] pl-[20px] sm:pl-[30px] md:pl-[220px] lg:pl-0">
            {children}
          </div>
        </div>
        <Toaster position="bottom-center" />
      </main>
    </>
  );
};

export default Layout;
