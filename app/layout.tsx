import "../assets/css/globals.css";
import { Roboto_Flex as Roboto } from "next/font/google";
import { ReactNode } from "react";
import ptBR from "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { Metadata } from "next";

dayjs.locale(ptBR);

export const metadata = {
  title: "Mixservlog",
  description: "",
  openGraph: {
    title: "Mixservlog",
    description: "",
    url: "",
    siteName: "",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "banner full desktop",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-Br" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${roboto.variable} overflow-x-hidden bg-complement1 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
