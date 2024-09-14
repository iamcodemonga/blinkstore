import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import WalletSetup from "@/providers/WalletSetup";
// import WalletSetup from "@/components/WalletSetup";


export const metadata: Metadata = {
  title: "sales link for your products - Bliinkstore",
  description: "Sell your products on social and non-social platforms using generated blockchain links. Supercharging your sales experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white text-black`} >
        <WalletSetup>
          {children}
        </WalletSetup>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
      </body>
    </html>
  );
}
