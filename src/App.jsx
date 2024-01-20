import { QueryClient, QueryClientProvider } from "react-query";
import { ExchangeRate } from "./components/ExchangeRate";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 60000
    }
  }
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRate />
    </QueryClientProvider>
  );
};

export default App;
