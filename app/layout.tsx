import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuki-nakamura-portfolio-five.vercel.app"),
  title: "YUKI NAKAMURA | Web Designer & Front-end Developer",
  description: "想いを、伝わるデザインへ。見た人の心を動かす美しくて使いやすいWebサイトをつくります。Webデザイン × フロントエンド開発。",
  openGraph: {
    title: "YUKI NAKAMURA | Web Designer & Front-end Developer",
    description: "想いを、伝わるデザインへ。見た人の心を動かす美しくて使いやすいWebサイトをつくります。",
    images: ["/images/portfolio/01-hero.png"],
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Noto+Sans+JP:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#08090D] text-[#F5F4F0] selection:bg-[#8B83FF] selection:text-[#08090D]">
        {children}
      </body>
    </html>
  );
}
