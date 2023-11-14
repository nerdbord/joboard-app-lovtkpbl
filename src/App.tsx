import './App.css';
import Container from './components/Container/Container';
import Checkbox from './components/Filters/Checkbox';
import Filters from './components/Filters/Filters';

const App = () => {
   return (
      <Container>
         <h1>JoBoard 🛹</h1>
   <Filters />
      </Container>
   );
};

export default App;
