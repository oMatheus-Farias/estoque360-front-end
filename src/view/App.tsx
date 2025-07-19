import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary';
import ErrorBoundaryFallback from './components/ErrorBoundaryFalback';
import AppRoutes from './Routes';

function App() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
