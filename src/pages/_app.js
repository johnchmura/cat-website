import "@/styles/globals.css";
import "@fontsource/poppins";
//import "@fontsource/inter";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap"
          rel="stylesheet"
        />
      <Component {...pageProps} />
    </>
  );
}