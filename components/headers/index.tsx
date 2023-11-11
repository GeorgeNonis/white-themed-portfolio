"use client";
import { links } from "@/config/data";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="
    fixed
    top-0
    left-1/2 
    h-[4.5rem] 
    w-full
    rounded-none
    border
    border-white
    border-opacity-40
    bg-white
    bg-opacity-80
    shadow-lg
    shadow-black/[0.03]
    backdrop-blur-[0.5rem]
    sm:top-6
    sm:h-[3.25rem]
    sm:w-[36rem]
    sm:rounded-full 
    dark:bg-gray-950 
    dark:border-black/40
    dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex  w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="h-3/4 flex items-center justify-center"
                >
                  <Link
                    href={link.hash}
                    className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};
export default Header;
