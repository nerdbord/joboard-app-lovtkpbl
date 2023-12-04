import styles from './App.module.scss';
// components
import Filters from './components/Filters/Filters';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';
import { FiltersProvider } from './components/Filters/FilterContext';
import Container from './components/Container/Container';

const App = () => {
   return (
      <FiltersProvider>
         <Container>
            <div className={styles.mainScreen}>
               <section className={styles.filtersSection}>
                  <h1>👾 JO-BOARD</h1>
                  <Filters />
               </section>
               <JobOffersScreen />
            </div>
         </Container>
      </FiltersProvider>
   );
};

export default App;
