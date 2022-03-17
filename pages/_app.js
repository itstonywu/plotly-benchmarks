import { QueryClient, QueryClientProvider } from "react-query";

import "../styles/globals.css";
import makeServer from "../server";

const queryClient = new QueryClient();

makeServer();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
