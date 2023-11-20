import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.scss';

import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
   </React.StrictMode>,
);
