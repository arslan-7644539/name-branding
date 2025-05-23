import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Sidebarnavigation from "@/components/Sidebar-navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fashion Store",
  description: "Your premium fashion destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Header />
        <div className="flex">
          <Sidebarnavigation />
          <main className="flex-1 min-h-screen overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
