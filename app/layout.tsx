import { Header, ThemeSwitch } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import { ActiveSectionContenxtProvider } from "@/context/active-section-contenxt";
import { Toaster } from "react-hot-toast";
import { ThemeSwitchProvider } from "@/context/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nonis | Portfolio",
  description: "Giorgos Nonis a Fullstack Developer with expertise in Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}  bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="  bg-[#fbe2e3]
    absolute
    top-[-6rem]
    -z-10
    right-[11rem]
    h-[31.25rem]
    w-[31.25rem]
    rounded-full
    blur-[10rem]
    sm:w-[68.75rem]
    dark:bg-[#946263]"
        />
        <div
          className="bg-[#dbd7fb]
    absolute
    top-[-1rem]
    -z-10
    left-[-35rem]
    h-[31.25rem]
    w-[50rem]
    rounded-full
    blur-[10rem]
    sm:w-[68.75rem]
    md:left-[-33rem]
    lg:left-[-28rem]
    xl:left-[-15rem]
    2xl:left-[-5rem]
    dark:bg-[#676394]"
        />
        <ThemeSwitchProvider>
          <ActiveSectionContenxtProvider>
            <Header />
            <Toaster />
            {children}
            <ThemeSwitch />
          </ActiveSectionContenxtProvider>
        </ThemeSwitchProvider>
      </body>
    </html>
  );
}
