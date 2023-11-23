import styles from './App.module.scss';
// components
import Container from './components/Container/Container';
import Checkbox from './components/UI/Checkbox';
import Filters from './components/Filters/Filters';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';
import { FilterTypes } from './enumFaces/enums';
import { FilterSettings } from './interfaces';
import { useState } from 'react';
import { FiltersProvider, initialFilterSettings } from './components/Filters/FilterContext';

const App = () => {
   return (
      <Container>
         <FiltersProvider>
            <div className={styles.mainScreen}>
               <section className={styles.filtersSection}>
                  <h1>👾 JO-BOARD</h1>
                  <Filters />
               </section>
               <JobOffersScreen />
            </div>
         </FiltersProvider>
      </Container>
   );
};

export default App;
