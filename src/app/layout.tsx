import { Metadata } from "next";
import Header from "../components/Header";
import "../global.css";

export const metadata: Metadata = {
  title: "Michael Web Solutions - Turn your website visitors into customers",
  description:
    "Grow your business with a website designed to impress. Michael Web Solutions specializes in crafting websites build to increase user engagment.",
  openGraph: {
    title: "Michael Web Solutions - Turn your website visitors into customers",
    description:
      "Grow your business with a website designed to impress. Michael Web Solutions specializes in crafting websites build to increase user engagment.",
    url: "https://www.jkmichael.com",
    siteName: "Michael Web Solutions",
    images: [
      {
        url: "https://www.jkmichael.com/MWS_OG_Image.jpg",
        width: 1200,
        height: 630,
        alt: "Michael Web Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page bg-gray-900">
        <Header />
        <div className="container mx-auto max-w-7xl p-3 md:p-8 min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}
