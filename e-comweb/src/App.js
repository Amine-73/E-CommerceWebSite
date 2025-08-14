import logo from './logo.svg';
import './App.css';
import LandingPage from './landingPage';
import { Route,Routes } from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/LandingPage' index element={<LandingPage/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='Kids' element={<Kids/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
