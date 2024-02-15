import Banner from "../layouts/bannerHome";
import Header from "../layouts/header";

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

export default function Home() {

  
 
  return (
<>
<Header/>
<Banner/>
</>

  );
}
