import { Crimson_Pro } from "next/font/google"; 
import "./globals.css";
import Providers from "@/components/commons/Providers";

const crimsonPro = Crimson_Pro({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "USD Artificial Intelligence Research Lab (ᗩ𝕀)",
  description: "(2015) Research dissemination on Artificial Intelligence, Machine Learning, Computer Vision, Data Mining, and Big Data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={crimsonPro.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
