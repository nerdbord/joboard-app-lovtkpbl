import { render, screen } from '@testing-library/react';
import App from '../App';
import { expect } from 'vitest';

describe('App', () => {
   it('renders headline', () => {
      render(<App />);
      const headline = screen.getByText('👾 JO-BOARD');
      expect(headline).toBeInTheDocument();
   });
});
