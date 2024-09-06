import { Literata } from "next/font/google";
import "./globals.css";
import Header from "./header";
import localFont from "next/font/local";
import Footer from "./footer";
import "./animations.css";

const literata = Literata({
  subsets: ["greek"],
  style: ["normal", "italic"],
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Black.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata = {
  title: "CERRENE",
  description: "Clean meats Repairs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${literata.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
