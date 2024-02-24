import React, { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { queryClient } from 'lib/react-query';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary
      fallback={<div>Algo deu errado!</div>}
      onError={console.error}
    >
      {children}
    </ErrorBoundary>
  </QueryClientProvider>
);
