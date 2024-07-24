import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={GeistSans.className}>
      <ToastContainer position="bottom-center" />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
