"use client";

import Header from "../layouts/header";
import "../assets/css/globals.css";
import { Roboto_Flex as Roboto } from "next/font/google";
import { ReactNode } from "react";
import Image from "next/image";
import ptBR from "dayjs/locale/pt-br";
import dayjs from "dayjs";

dayjs.locale(ptBR);

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-Br" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${roboto.variable} overflow-x-hidden bg-complement1 font-sans`}
      >
        
        <Header />
        
      </body>
    </html>
  );
}
