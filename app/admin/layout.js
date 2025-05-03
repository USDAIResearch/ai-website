import ToastMessage from "@/components/commons/Toast";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      {children}
      <ToastMessage />
    </div>
  );
}
