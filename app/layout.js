import "./globals.css";
import { SpaceProvider } from "@/context/SpaceContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ELITE DESIGNS | Architecture, Interior, Furniture & Product Design Studio",
  description:
    "Elite Designs by Mohammadali G. Tharadara (Designer + Educator, Ahmedabad). Thoughtful spaces for modern living across architecture, interior environments, bespoke & modular furniture, and industrial product design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <SpaceProvider>
          <Navbar />
          <main className="w-full pt-20 bg-surface flex-1">{children}</main>
          <Footer />
        </SpaceProvider>
      </body>
    </html>
  );
}
