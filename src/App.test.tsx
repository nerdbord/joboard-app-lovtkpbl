import { getAllByText, getByText, render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import fetchJobOffers from './api';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         queryFn: fetchJobOffers,
      },
   },
});

test('test123', () => {
   render(
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>,
   );

   const words = screen.getByText(/JO-BOARD/);

    expect(words);
   
});
