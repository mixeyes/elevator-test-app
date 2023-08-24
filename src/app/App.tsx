import React, { Suspense, lazy } from 'react';
import { GlobalStyle } from '../styles';
import { Layout } from '../components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const ConfigPage = lazy(() => import('../pages/ConfigPage'));
const ElevatorsPage = lazy(() => import('../pages/ElevatorsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" Component={ConfigPage} />
              <Route path="/elevators" Component={ElevatorsPage} />
              <Route path="*" Component={NotFoundPage} />
            </Routes>
          </Layout>
        </Router>
      </Suspense>
    </>
  );
};
