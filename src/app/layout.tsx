import type { Metadata } from "next";
import Sidebar from "./components/global/Sidebar";
import RightNav from "./components/global/RightNav";
import "./globals.css";
import AppProvider from "./components/Provider";

export const metadata: Metadata = {
  title: "Worker gen test",
  description: "worker gen front end test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-segoe">
        <AppProvider>
          <Sidebar />
          <RightNav />
          <main>{children}</main>
        </AppProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
