"use client"
import Navbar from "./components/Navbar";

import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "./store/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
