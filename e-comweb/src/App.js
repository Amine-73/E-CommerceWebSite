import './App.css';
import LandingPage from './landingPage';
import { Route,Routes } from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Login from './loginPage';
import SingUp from './SingUp';
import { useContext } from "react";
import Dataproduct from "./AllData/Data";

function App() {
  const Data=useContext(Dataproduct)
  return (
    <div className="App">
      <Dataproduct.Provider value={Data}>
      <Routes>
        <Route path='/'   element={<LandingPage/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SingUp' element={<SingUp/>}/>
      </Routes></Dataproduct.Provider>
    </div>
  );
}

export default App;
