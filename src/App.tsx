import './App.css';
import Container from './components/Container/Container';
import Checkbox from './components/Filters/Checkbox';

const App = () => {
   return (
      <Container>
         <h1>JoBoard 🛹</h1>
         <Checkbox text={'Temporary text'} />
         <Checkbox text={'Temporary text2'} />
      </Container>
   );
};

export default App;
