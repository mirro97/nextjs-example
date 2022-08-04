import "../styles/globals.css";
import Layout from "./Layout";

function MyApp({ Component, pageProps }) {
  let data = pageProps;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
