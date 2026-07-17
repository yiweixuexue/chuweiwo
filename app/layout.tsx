import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "屮微我｜新中式定制",
    template: "%s｜屮微我",
  },
  description: "屮微我新中式定制工作室，以命理气韵、一对一专属设计与非遗手作，定制独属于你的东方风骨。",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
