import { Literata } from "next/font/google";
import "./globals.css";
import Header from "./header";
import localFont from "next/font/local";
import Footer from "./footer";
import "./animations.css";
import logo from "@/public/images/logoDark.png"

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
      path: "../public/fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#DE4B99", // Adjust as needed for Cerrene's color theme
};

export const metadata = {

  title: "CERRENE | Clean Meets Repair",
  description: "CERRENE offers high-quality cleaning and repair services, combining reliability and expertise to keep your home and business spotless and functional.",
  keywords: "Cerrene, cleaning services, repair services, home repairs, business cleaning, facility management, professional cleaning, plumbing services, electrical services",
  author: "Ayomide Ogu | Bard Design Agency", // Replace with the actual author
  openGraph: {
    title: "CERRENE | Clean Meets Repair",
    description: "CERRENE provides top-notch cleaning and repair services to ensure your home and business environments are well-maintained.",
    url: "https://cerrene.com",
    siteName: "CERRENE",
    locale: "en-US",
    type: "website",
    image: "/path-to-logo.png", // Update with a path to your logo or image
  },

  canonicalUrl: "https://cerrene.com",
  type: "website",
  charset: "UTF-8",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "_oFKdqCJVp-svhJ2vW47uQbswYIYWc0eKX1oN5oTBw0", // Replace with your Google verification code
  },
  googleSiteVerification: "_oFKdqCJVp-svhJ2vW47uQbswYIYWc0eKX1oN5oTBw0", // Replace this with your actual Google Search Console verification code
  bingSiteVerification: "your-bing-verification-code", // Replace this with your Bing verification code
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CERRENE",
    url: "https://cerrene.com",
    logo: logo, // Update with your logo path
    description: "CERRENE offers professional cleaning and repair services to ensure your home and business environments are maintained with care.",
    sameAs: [
      "https://www.linkedin.com/company/cerrene", // Update with your social media URLs
      "https://www.instagram.com/cerreneservices/",
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${literata.className}`}>
        <Header />
       <div>{children}</div> 
        <Footer />
      </body>
    </html>
  );
}
