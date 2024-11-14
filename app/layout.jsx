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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  shrinkToFit: "no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon/icon.png" type="image/png" sizes="32x32" />
        <link rel="stylesheet" href="https://use.typekit.net/fll2djb.css" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
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
