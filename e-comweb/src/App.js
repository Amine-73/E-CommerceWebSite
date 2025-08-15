import './App.css';
import LandingPage from './landingPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Login from './loginPage';
import SingUp from './SingUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'   element={<LandingPage/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SingUp' element={<SingUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
