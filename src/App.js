import './App.css';
import 'animate.css';
import { Header } from './components/header/Header';
import { Banner } from './components/hero/Banner';
import { Service } from './components/services/Service';
import { Team } from './components/team/Team';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Team/>
     <Service/>
    </div>
  );
}

export default App;
