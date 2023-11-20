import { useQuery } from '@tanstack/react-query';
import { fetchJobOffers } from './helpers/api';
import './App.module.scss';

// components
import Container from './components/Container/Container';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';

const App = () => {
   const query = useQuery({
      queryKey: ['jobOffers'],
      queryFn: fetchJobOffers,
   });

   console.log(query);

   return (
      <Container>
         <JobOffersScreen offers={query.data} />
      </Container>
   );
};

export default App;
