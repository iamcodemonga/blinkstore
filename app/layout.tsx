import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import WalletSetup from "@/providers/WalletSetup";
import ProgressBar from "@/components/ProgressBar";
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
      <head>
        <link rel="icon" href="/favicon.png" />
        {/* <script src="//code.tidio.co/opp8uj7g7tacwbzmyilha6yc9krag117.js" async></script> */}
      </head>
      <body className={`bg-white text-black`} >
        <ProgressBar>
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
        </ProgressBar>
      </body>
    </html>
  );
}
