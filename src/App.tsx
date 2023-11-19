import { useEffect, useState } from 'react';
import './App.module.scss';

// import { useQuery } from '@tanstack/react-query';
import { fetchJobOffers } from './helpers/api';

// components
import Container from './components/Container/Container';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';

const App = () => {
   const [jobOffers, setJobOffers] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await fetchJobOffers();
            setJobOffers(result);
         } catch (error) {
            console.error('Error fetching job offers');
         }
      };

      fetchData();
   }, []);

   return (
      <Container>
         <JobOffersScreen offers={jobOffers} />
      </Container>
   );
};

export default App;
