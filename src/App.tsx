// react
import { useState } from 'react';

// styles
import styles from './App.module.scss';

// hooks
import useIsSmallScreen from './hooks/useSmallScreen';

// enums
import { ButtonType } from './enums';

// components
import Filters from './components/Filters/Filters';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';

import { FiltersProvider } from './providers/Filters/FilterContext';
import Container from './components/Container/Container';
import Button from './components/UI/Button';

const App = () => {
   const isSmallScreen = useIsSmallScreen(768); // this should be changed with breakpoint in css

   const [isFiltersShown, setIsFiltersShown] = useState(false);

   const showFilters = () => {
      setIsFiltersShown((prevState) => !prevState);
   };
   return (
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
   );
};

export default App;
