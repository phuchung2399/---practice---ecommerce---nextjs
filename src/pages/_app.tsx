import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { Provider } from "react-redux";
import store from "src/store/redux-toolkit/store";
import { debounce } from "debounce";
import { saveState } from "@/components/common/browser-storage";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {

  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 1)
  );

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;