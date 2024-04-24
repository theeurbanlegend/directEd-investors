import { QueryClient, QueryClientProvider } from "react-query";
import { Props } from "../types";

function QueryProvider(props: Props) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
}
export default QueryProvider;
