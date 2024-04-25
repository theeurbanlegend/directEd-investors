import { Props } from "../types";
import QueryProvider from "./queryClientProvider";
import { UserProvider } from "./userContext";

export function AppContextProvider({ children }: Props) {
  return (
    <UserProvider>
      <QueryProvider>{children}</QueryProvider>
    </UserProvider>
  );
}
