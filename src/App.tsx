// styles
import styles from './App.module.scss';

// hooks
import useIsSmallScreen from './hooks/useSmallScreen';

// components
import Filters from './components/Filters/Filters';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';
import { FiltersProvider } from './components/Filters/FilterContext';
import Container from './components/Container/Container';
import Button from './components/UI/Button';
import { ButtonType } from './enums';
import { useState } from 'react';

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
                  <h1>👾 JO-BOARD</h1>
                  {isSmallScreen ? (
                     <Button type={ButtonType.Filters} onClick={showFilters}>
                        Filter offers
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
