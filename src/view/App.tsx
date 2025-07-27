import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

import { AuthProvider } from '@/app/contexts/AuthContext/Provider';
import { queryClient } from '@/app/lib/queryClient';

import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorBoundaryFallback } from './components/ErrorBoundaryFalback';
import { AppRoutes } from './Routes';

function App() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AppRoutes />
            <Toaster richColors={true} position="top-center" duration={6000} theme="dark" />
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
