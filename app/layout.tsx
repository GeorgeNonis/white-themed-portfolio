import { Header, ThemeSwitch } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import { ActiveSectionContenxtProvider } from "@/context/active-section-contenxt";
import { Toaster } from "react-hot-toast";
import { ThemeSwitchProvider } from "@/context/theme-switch";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nonis | Portfolio",
  description: "Giorgos Nonis a Fullstack Developer with expertise in Frontend",
};

const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#0b1220] dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <div className="absolute top-[-8rem] right-[8rem] h-[34rem] w-[34rem] rounded-full bg-cyan-200/80 blur-[110px] sm:w-[56rem] dark:bg-cyan-900/35" />
          <div className="absolute top-[2rem] left-[-28rem] h-[30rem] w-[44rem] rounded-full bg-sky-200/70 blur-[100px] sm:w-[58rem] md:left-[-24rem] lg:left-[-18rem] xl:left-[-10rem] dark:bg-blue-950/45" />
          <div className="absolute bottom-[-10rem] left-1/2 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-teal-100/60 blur-[120px] dark:bg-teal-950/30" />
        </div>
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
