import { act, fireEvent, render, screen } from '@testing-library/react';

import App from '../App';
import { describe, expect, it, vitest } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import fetchJobOffers from '../api';
import { mockData } from '../data/mockData';
import Checkbox from '../components/UI/Checkbox';

describe('App', () => {
   it('renders headline', () => {
      render(<App />);
      const headline = screen.getByText('👾 JO-BOARD');
      expect(headline).toBeInTheDocument();
   });
});

vitest.mock('./fetchJobOffers', () => ({
   fetchJobOffers: async () => {
      return Promise.resolve({
         data: mockData,
      });
   },
}));

describe('Test job offers filters', () => {
   let queryClient: QueryClient;

   beforeAll(() => {
      queryClient = new QueryClient({
         defaultOptions: {
            queries: {
               queryFn: fetchJobOffers,
            },
         },
      });
   });

   /**
    *    Because of the fact that we're using a mocked dataset for testing, we
    * can easily check the validity of our tests via the amount of offers found.
    */
   it('filters by job type', async () => {
      render(
         <QueryClientProvider client={queryClient}>
            <App />
         </QueryClientProvider>,
      );

      const allCheckboxes = screen.queryAllByTestId(/checkbox/i);
      act(() => {
         allCheckboxes.forEach((checkbox) => {
            checkbox.click();
         });
      });

      const offers = await screen.findAllByTestId(/jobOffer/i);
      expect(offers.length).toBe(17);
      act(() => {
         allCheckboxes[0].click();
      });

      const withoutFullTime = await screen.findAllByTestId(/jobOffer/i);
      expect(withoutFullTime.length).toBe(5);

      act(() => {
         allCheckboxes[1].click();
      });

      const withoutPartTime = await screen.findAllByTestId(/jobOffer/i);
      expect(withoutPartTime.length).toBe(4);

      act(() => {
         allCheckboxes[0].click();
      });

      const withFullTimeAgain = await screen.findAllByTestId(/jobOffer/i);
      expect(withFullTimeAgain.length).toBe(16);
   });

   it('filters by seniority', async () => {
      render(
         <QueryClientProvider client={queryClient}>
            <App />
         </QueryClientProvider>,
      );

      const allCheckboxes = screen.queryAllByTestId(/checkbox/i);
      act(() => {
         allCheckboxes.forEach((checkbox) => {
            checkbox.click();
         });
      });

      const offers = await screen.findAllByTestId(/jobOffer/i);
      expect(offers.length).toBe(17);
      act(() => {
         allCheckboxes[4].click();
      });

      const withoutLead = await screen.findAllByTestId(/jobOffer/i);
      expect(withoutLead.length).toBe(17);

      act(() => {
         allCheckboxes[5].click();
      });

      const withoutExpert = await screen.findAllByTestId(/jobOffer/i);
      expect(withoutExpert.length).toBe(15);

      act(() => {
         allCheckboxes[6].click();
      });

      const withoutSenior = await screen.findAllByTestId(/jobOffer/i);
      expect(withoutSenior.length).toBe(11);

      act(() => {
         allCheckboxes[7].click();
      });

      const withoutMid = await screen.findAllByTestId(/jobOffer/i);
      expect(withoutMid.length).toBe(5);
   });

   it('filters by location', async () => {
      render(
         <QueryClientProvider client={queryClient}>
            <App />
         </QueryClientProvider>,
      );

      const offers = await screen.findAllByTestId(/jobOffer/i);
      expect(offers.length).toBe(17);

      const input = await screen.findByPlaceholderText('Search location');
      act(() => {
         input.click();
         fireEvent.input(input, { target: { value: 'e' } });
      });

      const newOffers = await screen.findAllByTestId(/jobOffer/i);
      expect(newOffers.length).toBe(9);

      act(() => {
         input.click();
         fireEvent.input(input, { target: { value: 'Berlin' } });
      });

      const newestOffers = await screen.findAllByTestId(/jobOffer/i);
      expect(newestOffers.length).toBe(2);
   });

   it('filters by salary range', async () => {
      render(
         <QueryClientProvider client={queryClient}>
            <App />
         </QueryClientProvider>,
      );

      const offers = await screen.findAllByTestId(/jobOffer/i);
      expect(offers.length).toBe(17);

      const slider = (await screen.findByTestId('slider')) as HTMLInputElement;

      act(() => {
         fireEvent.input(slider, { target: { value: '53000' } });
      });

      const newOffers = await screen.findAllByTestId(/jobOffer/i);
      expect(newOffers.length).toBe(13);

      act(() => {
         fireEvent.input(slider, { target: { value: '114548' } });
      });

      const newestOffers = await screen.findAllByTestId(/jobOffer/i);
      expect(newestOffers.length).toBe(6);
   });

   it('clears filters', async () => {
      render(
         <QueryClientProvider client={queryClient}>
            <App />
         </QueryClientProvider>,
      );

      const allCheckboxes = screen.queryAllByTestId(/checkbox/i);
      act(() => {
         allCheckboxes.forEach((checkbox, i) => {
            if (i == 0 || i == 7 || i == 12) {
               console.log(checkbox.parentElement?.textContent);
               checkbox.click();
            }
         });
      });

      const offers = await screen.findAllByTestId(/jobOffer/i);
      expect(offers.length).toBe(2);

      const resetButton = await screen.findByTestId("Clear filters")
      act(() => {
         resetButton.click()
      })

      const resetOffers = await screen.findAllByTestId(/jobOffer/i);
      expect(resetOffers.length).toBe(17);
   });
});
