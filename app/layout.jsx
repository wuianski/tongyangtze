import "./globals.css";
import Header from "@/components/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LayoutTransition } from "@/components/LayoutTransition";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Tong Yang-Tze",
  description: "Tong Yang-Tze Official Website",
  openGraph: {
    title: "Tong Yang-Tze",
    description: "Tong Yang-Tze Official Website",
    images: [
      {
        url: "https://tongyangtze.com/Index_Desktop.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://tongyangtze.com/contact.png", // Must be an absolute URL
        width: 1920,
        height: 1280,
        alt: "My custom alt",
      },
    ],
  },
  icons: {
    icon: "/icon/icon.png",
  },
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
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* <link rel="icon" href="/icon/icon.png" type="image/png" sizes="32x32" /> */}
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
      <GoogleAnalytics gaId="G-P95ZN0CFW9" />
    </html>
  );
}
