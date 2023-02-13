import type { AppProps } from "next/app";
import { AppProvider } from "../components/AppContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default App;
