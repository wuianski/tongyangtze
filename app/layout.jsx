import "./globals.css";
import Header from "@/components/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LayoutTransition } from "@/components/LayoutTransition";

export const metadata = {
  title: "Tong Yang-Tze",
  description: "Tong Yang-Tze Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="stylesheet" href="https://use.typekit.net/fll2djb.css" />
      </head>
      <body>
        <LayoutTransition
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
        >
          <Header />
          <main>
            <AppRouterCacheProvider>{children} </AppRouterCacheProvider>
          </main>
        </LayoutTransition>
      </body>
    </html>
  );
}
