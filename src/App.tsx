import './App.module.scss';
// components
import Container from './components/Container/Container';
import Checkbox from './components/UI/Checkbox';
import Filters from './components/Filters/Filters';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';
import { FilterTypes } from './enumFaces/enums';
import { FilterSettings } from './enumFaces/interfaces';
import { useState } from 'react';
import {
   FiltersProvider,
   initialFilterSettings,
} from './components/Filters/FilterContext';

const App = () => {
   return (
      <Container>
         <h1>JoBoard 🛹</h1>
         <FiltersProvider>
            <Filters />
            <JobOffersScreen />
         </FiltersProvider>
      </Container>
   );
};

export default App;
