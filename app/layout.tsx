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
      <body className={`bg-transparent text-black w-full`} >
        <ProgressBar>
          <WalletSetup>
            {/* <div className="fixed top-0 left-0 -z-10 h-full w-full">
              <div className="relative h-full w-full bg-transparent">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
              </div>
            </div> */}
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
