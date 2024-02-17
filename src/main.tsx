import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import fetchJobOffers from './api';
import { Analytics } from '@vercel/analytics/react';

import './index.scss';

import App from './App';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         queryFn: fetchJobOffers,
      },
   },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
         <Analytics />
      </QueryClientProvider>
   </React.StrictMode>,
);
