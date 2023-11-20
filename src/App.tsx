import './App.module.scss';

// components
import Container from './components/Container/Container';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';

const App = () => {
   return (
      <Container>
         <JobOffersScreen />
      </Container>
   );
};

export default App;
