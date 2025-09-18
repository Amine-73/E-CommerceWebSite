import LandingPage from "./Components/Home/landingPage";
import { Route, Routes } from "react-router-dom";
import Men from "./Components/Products/Men";
import Women from "./Components/Products/Women";
import Kids from "./Components/Products/Kids";
import Login from "./Components/Login/Login";
import { useContext, useEffect, useState } from "react";
import Dataproduct from "./AllData/Data";
import MenProductDetail from "./Components/ProductSelected/DataProducts";
import Cart from "./Components/Carts/Cart";
import { CartProvider } from "./Contexts/CartContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// Style pour la modale
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const Data = useContext(Dataproduct);
  const [myData, setMyData] = useState(Data);
  // L'état est défini ici dans le composant parent
  const [open, setOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const [myList, setMyList] = useState([
    { id: 1, name: "Amine", Email: "amine@gmail.com", password: "123123" },
    { id: 2, name: "iman", Email: "iman@gmail.com", password: "000000" },
    { id: 3, name: "brahim", Email: "brahim@gmail.com", password: "000000" },
  ]);
  const [name, setName] = useState("Login");
  const productPaths = [
    "/Men/:productId",
    "/Women/:productId",
    "/Kids/:productId",
  ];

  const handleClose = () => {
    setOpen(false);
    setLoginStatus(null);
  };

  const getModalMessages = () => {
    // Cas pour l'état initial (null)
    if (loginStatus === null) {
      return {
        title: "Authentification...",
        description: "Vérification en cours.",
      };
    }

    if (loginStatus === false) {
      if (name === "Login") {
        return {
          title: "Échec Login.",
          description: "Veuillez vérifier vos informations et réessayer.",
        };
      } else {
        return {
          title: "Échec SignUp.",
          description:
            'Please Verify your Information ,"The email aready have" ',
        };
      }
    } else if (loginStatus === true) {
      if (name === "Login") {
        return {
          title: "Login Succès!",
          description: "Vous allez être redirigé(e) sous peu.",
        };
      } else {
        return {
          title: "SignIn Succès!",
          description: "Vous allez être redirigé(e) sous peu.",
        };
      }
    }
  };

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("myList"));
    setMyList(storageList);
  }, []);

  const modalMessages = getModalMessages();

  return (
    <div className="App">
      <Dataproduct.Provider value={myData}>
        <CartProvider>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/Men" element={<Men />} />
            {productPaths.map((path) => (
              <Route key={path} path={path} element={<MenProductDetail />} />
            ))}
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Kids" element={<Kids />} />
            <Route
              path="/"
              element={
                <Login
                  name={name}
                  setName={setName}
                  myList={myList}
                  setMyList={setMyList}
                  setOpen={setOpen}
                  setLoginStatus={setLoginStatus}
                />
              }
            />
            <Route path="" />
          </Routes>
        </CartProvider>

        {/* Les fonctions de modification de l'état sont passées comme props au composant enfant Login */}

        {/* La prop 'open' est passée à la modale pour la contrôler */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: loginStatus ? "green" : "red" }}
            >
              {modalMessages.title}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, color: loginStatus ? "green" : "red" }}
            >
              {modalMessages.description}
            </Typography>
          </Box>
        </Modal>
      </Dataproduct.Provider>
    </div>
  );
}

export default App;
