import { useState } from 'react';
import styles from './App.module.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FiltersProvider } from './providers/Filters/FilterContext';
import useIsSmallScreen from './hooks/useSmallScreen';
import { ButtonType } from './enums';
import fetchJobOffers from './api';

// components
import Filters from './components/Filters/Filters';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';
import Container from './components/Container/Container';
import Button from './components/UI/Button';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         queryFn: fetchJobOffers,
      },
   },
});

const App = () => {
   const isSmallScreen = useIsSmallScreen(768); // this should be changed with breakpoint in css

   const [isFiltersShown, setIsFiltersShown] = useState(false);

   const showFilters = () => {
      setIsFiltersShown((prevState) => !prevState);
   };
   return (
      <QueryClientProvider client={queryClient}>
         <FiltersProvider>
            <Container>
               <div className={styles.mainScreen}>
                  <section className={styles.filtersSection}>
                     <h1>
                        <a href="" className={styles.mainLink}>
                           👾 JO-BOARD
                        </a>
                     </h1>
                     {isSmallScreen ? (
                        <Button
                           type={isFiltersShown ? ButtonType.FiltersActive : ButtonType.Filters}
                           onClick={showFilters}
                        >
                           {isFiltersShown ? 'Close' : 'Filter offers'}
                        </Button>
                     ) : (
                        !isSmallScreen && <Filters />
                     )}
                  </section>
                  {isFiltersShown && isSmallScreen && <Filters />}
                  <JobOffersScreen />
               </div>
            </Container>
         </FiltersProvider>
      </QueryClientProvider>
   );
};

export default App;
