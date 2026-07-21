import type { Metadata } from "next";
import "./globals.css";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "屮微我｜新中式定制",
    template: "%s｜屮微我",
  },
  description: "屮微我新中式定制工作室，以命理气韵、一对一专属设计与非遗手作，定制独属于你的东方风骨。",
  other: { "codex-preview": "development" },
  icons: { icon: `${siteBasePath}/favicon.svg`, shortcut: `${siteBasePath}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <style>{`:root {
          --hero-image: url("${siteBasePath}/images/hero.png");
          --modern-chinese-women-image: url("${siteBasePath}/images/modern-chinese-women.png");
          --qipao-atelier-home-image: url("${siteBasePath}/images/qipao-atelier-home.png");
          --mens-tailoring-home-image: url("${siteBasePath}/images/mens-tailoring-home.png");
          --lookbook-women-image: url("${siteBasePath}/images/lookbook-women.webp");
          --lookbook-men-image: url("${siteBasePath}/images/lookbook-men.png");
          --craftsmanship-home-image: url("${siteBasePath}/images/DSC08884-2.jpg");
        }`}</style>
        {children}
      </body>
    </html>
  );
}
