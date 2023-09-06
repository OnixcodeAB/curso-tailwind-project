import "../style/global.css";
import Layout from "@components/Layout";
import ShopiProvider from "../context";
import { authProvider } from "../context/auth";

export default function App({ Component, pageProps }) {
  return (
    <ShopiProvider>
      <authProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </authProvider>
    </ShopiProvider>
  );
}
