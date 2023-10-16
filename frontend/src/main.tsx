import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback: FC<{error: {message: string}}> = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
