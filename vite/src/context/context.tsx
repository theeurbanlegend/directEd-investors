import { Props } from '../types';
import QueryProvider from './queryClientProvider'

export function AppContextProvider({ children }:Props) {
  return (
    <QueryProvider>
        {children}
    </QueryProvider>
  );
}
