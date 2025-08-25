import "./App.css";
import LandingPage from "./landingPage";
import { Route, Routes } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Login from "./loginPage";
import SingUp from "./SingUp";
import { useContext, useState } from "react";
import Dataproduct from "./AllData/Data";
import MenProductDetail from "./DataProducts";
import Cart from "./Cart";


function App() {
  const Data = useContext(Dataproduct);
  const [myData, setMyData] = useState(Data);
  const productPaths=['/Men/:productId','/Women/:productId','/Kids/:productId']
  return (
    <div className="App">
      <Dataproduct.Provider value={myData}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Men" element={<Men />} />
          {
            productPaths.map(path=>(
              <Route key={path} path={path} element={<MenProductDetail />} />
            ))
          }
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="" />
        </Routes>
      </Dataproduct.Provider>
    </div>
  );
}

export default App;
