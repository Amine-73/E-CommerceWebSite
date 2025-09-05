import "./App.css";
import LandingPage from "./landingPage";
import { Route, Routes } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Login from "./Login";
import { useContext, useState } from "react";
import Dataproduct from "./AllData/Data";
import MenProductDetail from "./DataProducts";
import Cart from "./Cart";
import {CartProvider} from "./Contexts/CartContext";
import BasicModal from "./Modul";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Style pour la modale
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};






function App() {
  const Data = useContext(Dataproduct);
  const [myData, setMyData] = useState(Data);
  // L'état est défini ici dans le composant parent
  const [open, setOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const productPaths=['/Men/:productId','/Women/:productId','/Kids/:productId']





  const handleClose = () => {
    setOpen(false);
    setLoginStatus(null);
  };

  
  return (
    <div className="App">
      {/* <Dataproduct.Provider value={myData}>  */}
        
        {/* <CartProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Men" element={<Men />} />
          {
            productPaths.map(path=>(
              <Route key={path} path={path} element={<MenProductDetail />} />
            ))
          }
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Login" element={<Login />} />
          <Route path="" />
        </Routes></CartProvider>

          {/* Les fonctions de modification de l'état sont passées comme props au composant enfant Login */}
        <Login setOpen={setOpen} setLoginStatus={setLoginStatus} />
        {/* La prop 'open' est passée à la modale pour la contrôler */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:loginStatus ? "green" : "red"}}>
              {loginStatus ? 'Login successful!' : 'Login failed.'}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2,color:loginStatus ? "green" : "red" }}  >
              {loginStatus ? 'You will be redirected shortly.' : 'Please check your credentials and try again.'}
            </Typography>
          </Box>
        </Modal>

      {/* </Dataproduct.Provider> */}

        


    </div>
  );
}




export default App;
