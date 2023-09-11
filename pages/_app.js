import "../styles/globals.css";
import { NFTProvider } from "../context/useContext";

export default function App({ Component, pageProps }) {
  return (
    <NFTProvider>
      <Component {...pageProps} />
    </NFTProvider>
  );
}
