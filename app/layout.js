import "./globals.css";
import { SpaceProvider } from "@/context/SpaceContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Growspace | Modular Spatial Architecture & Frame Planner",
  description:
    "Reclaim dead vertical volume in compact homes. Diagnose circulation bottlenecks, explore tactile BWR ply & MS tube joinery, and build custom 2D modular frames.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-charcoal selection:bg-charcoal selection:text-canvas">
        <SpaceProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SpaceProvider>
      </body>
    </html>
  );
}
