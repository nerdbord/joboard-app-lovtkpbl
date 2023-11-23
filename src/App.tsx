import styles from './App.module.scss';
// components
import Container from './components/Container/Container';
import Filters from './components/Filters/Filters';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';
import { FiltersProvider } from './components/Filters/FilterContext';

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
