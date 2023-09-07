import "../style/global.css";
import Layout from "@components/Layout";
import ShopiProvider from "../context";
import AuthProvider from "../context/auth";
import ProtectRoute from "../components/ProtectRoutes";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ShopiProvider>
        <Layout>
          <ProtectRoute>
            <Component {...pageProps} />
          </ProtectRoute>
        </Layout>
      </ShopiProvider>
    </AuthProvider>
  );
}
