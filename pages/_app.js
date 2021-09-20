import * as Sentry from "@sentry/nextjs";
import Layout from "../components/layout";
import { ContextProvider } from "../context";
import "../styles/base.scss";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <ContextProvider>
        <div id="portal"></div>
        {getLayout(<Component {...pageProps} />)}
      </ContextProvider>
    </>
  );
}

export default Sentry.withErrorBoundary(MyApp, {
  fallback: (
    <p>
      Йой! На цій сторінці сталася помилка. Обновіть сторінку або зверніться до{" "}
      <a href="mailto:rostzelik@gmail.com">підтримки</a>.
    </p>
  ),
});
