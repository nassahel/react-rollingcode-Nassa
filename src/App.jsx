import './App.css';
import Cards from './components/cards';
import Count from './components/count';
import { NavBar } from './components/nav/index';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Count />
      <Cards />
    </div>
  );
}

export default App;
