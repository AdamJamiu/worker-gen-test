import type { Metadata } from "next";
import EngageDetails from "./components/modals/EngageDetails.modal";
import Sidebar from "./components/global/Sidebar";
import RightNav from "./components/global/RightNav";
import AppProvider from "./components/Provider";
import AgentSkills from "./components/modals/AgentSkills.modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./globals.css";

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
          <main className="h-full overflow-hidden">{children}</main>
          <EngageDetails />
          <AgentSkills />
        </AppProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
