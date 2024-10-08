"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <>
      <nav className="w-full mx-auto py-5 px-2 lg:px-0">
        <div className="max-w-[1080px] container flex flex-wrap justify-end space-x-5 items-center mx-auto">
          <w3m-button />
          {theme === "light" ? (
            <BiMoon
              size="25"
              onClick={switchTheme}
              className="text-[#9f9f9f] hover:cursor-pointer dark:text-[#605e8a]"
            />
          ) : (
            <BiSun
              size="20"
              onClick={switchTheme}
              className="text-[#9f9f9f] hover:cursor-pointer dark:text-[#605e8a]"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
