import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "TONG YANG TZE",
  description: "TONG YANG TZE's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/fll2djb.css" />
      </head>
      <body>
        <Header />
        <main>
          <AppRouterCacheProvider>{children} </AppRouterCacheProvider>
        </main>
      </body>
    </html>
  );
}
