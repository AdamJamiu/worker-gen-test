// app/layout.js
import AppProvider from "./provider";
import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  DM_Sans,
  Inter,
  Open_Sans,
} from "next/font/google";
import AOSInitializer from "./components/AOSInitializer"; // Import the AOS initializer
import Preloader from "./components/Preloader";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "./components/provider/ReactQueryProvider";
import "aos/dist/aos.css"; // Import AOS CSS
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Fleetpro Admin Dashboard",
  description: "Fleetpro Super Admin Dashboard",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-openSans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolage.variable} ${openSans.variable} ${dmSans.variable}`}
      >
        <ReactQueryProvider>
          <AppProvider>
            <ToastContainer
              autoClose={3000}
              hideProgressBar={true}
              theme="light"
            />
            <Preloader />
            <AOSInitializer /> {/* Initialize AOS */}
            {children}
          </AppProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
