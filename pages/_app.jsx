import "../style/global.css";
import Layout from "@components/Layout";
import ShopiProvider from "../context";

export default function App({ Component, pageProps }) {
  return (
    <ShopiProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopiProvider>
  );
}
