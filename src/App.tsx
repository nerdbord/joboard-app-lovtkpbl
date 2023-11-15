import './App.css';

// components
import Container from './components/Container/Container';
import JobOffer from './components/JobOffers/JobOffer';
import Input from './components/UI/Input';

const App = () => {
   return (
      <Container>
         <h1>JoBoard 🛹</h1>
         <Input icon="search" placeholder="Search for" />
         <Input icon="location" placeholder="Search location" />
         <JobOffer />
      </Container>
   );
};

export default App;
