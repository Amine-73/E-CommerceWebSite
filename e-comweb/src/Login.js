import TextField from "@mui/material/TextField";
// import Header from "./header";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useContext, useState } from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AdbIcon from '@mui/icons-material/Adb';
import Box from "@mui/material/Box";


const Header = () => {
  return (
    <AppBar position="static" sx={{ background: '#fff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FF4500', 
              textDecoration: 'none',
            }}
          >
            SHOPPER
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FF4500', 
              textDecoration: 'none',
            }}
          >
            SHOPPER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <LocalMallIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};



export default function Login({setLoginStatus,setOpen}){
  const [name, setName] = useState("Login");
  const [AllInput, setALLInput] = useState({
    name: "",
    Email: "",
    password: "",
  });
  const myList = [
    { id: 1, name: "Amine", Email: "amine@gmail.com", password: "123123" },
    { id: 2, name: "mohammed", Email: "mohammed@gmail.com", password: "000000" },
    { id: 3, name: "mohammed", Email: "mohammed@gmail.com", password: "000000" }
  ];

  const handleSignUp = () => {
    setName(h => h === "Login" ? "SignUp" : "Login");
  };

  const handleCheck = () => {
    const accountFound = myList.some(user =>
      user.Email === AllInput.Email && user.password === AllInput.password
    );
    
    // On utilise la prop setLoginStatus pour mettre à jour l'état dans le parent
    setLoginStatus(accountFound);
    // On utilise la prop setOpen pour mettre à jour l'état dans le parent
    setOpen(true);
  };

  return (
    <>
      <section style={{ height: "auto", background: "#FFB6C1", display: "flex" }}>
        <Container>
          <form
            style={{
              background: "#fff",
              width: "50%",
              margin: "15% auto",
              padding: "75px 40px",
              borderRadius: "20px",
            }}
            onSubmit={event => event.preventDefault()}
          >
            <Grid container spacing={2} sx={{ textAlign: "left" }}>
              <Grid  sx={{ width: "100%", padding: "10px" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {name}
                </Typography>
              </Grid>
              {name !== "Login" && (
                <Grid  sx={{ width: "100%", padding: "10px" }}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="first-name"
                    label="Your Name"
                    variant="outlined"
                    value={AllInput.name}
                    onChange={(event) => {
                      setALLInput({ ...AllInput, name: event.target.value });
                    }}
                    type="text"
                  />
                </Grid>
              )}
              <Grid  sx={{ width: "100%", padding: "10px" }}>
                <TextField
                  sx={{ width: "100%" }}
                  id="Adress-Email"
                  label="Adress Email"
                  variant="outlined"
                  type="email"
                  value={AllInput.Email}
                  onChange={(event) => {
                    setALLInput({ ...AllInput, Email: event.target.value });
                    }}
                />
              </Grid>
              <Grid  sx={{ width: "100%", padding: "10px" }}>
                <TextField
                  sx={{ width: "100%" }}
                  id="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={AllInput.password}
                  onChange={(event) => {
                    setALLInput({ ...AllInput, password: event.target.value });
                  }}
                />
              </Grid>
              <Grid  sx={{ width: "100%", padding: "10px" }}>
                <Button
                  sx={{
                    width: "100%",
                    padding: "15px 0",
                    background: "#FF4500",
                  }}
                  type="submit"
                  variant="contained"
                  disabled={
                    AllInput.Email.length === 0 ||
                    AllInput.password.length === 0 ||
                    (name !== "Login" && AllInput.name.length === 0)
                  }
                  onClick={handleCheck}
                >
                  Continue
                </Button>
              </Grid>
              <Grid  sx={{ width: "100%", padding: "10px" }}>
                <Typography variant="body1">
                  {" "}
                  {name === "Login"
                    ? "Create an account"
                    : "Already Have Account"}{" "}
                  <span
                    onClick={handleSignUp}
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Click here
                  </span>
                </Typography>
              </Grid>
              <Grid  sx={{ width: "100%", padding: "10px" }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="By continuing, I agree to the Terms of Use & Privacy Policy"
                    required
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </form>
        </Container>
      </section>
    </>
  );
};






























// export default function Login({open}) {
//   const [name, setName] = useState("Login");
//   const [AllInput, setALLInput] = useState({
//     name: "",
//     Email: "",
//     password: "",
//   });
//   const List = [
//     { id: 1, name: "Amine", Email: "amine@gmail.com", password: "123123" },
//     { id: 2, name: "mohammed", Email: "mohammed@gmail.com", password: "000000" },
//   ];
//   function handlSignUp() {
//     if (name === "Login") {
//       setName("SignUp");
//     } else {
//       setName("Login");
//     }
//   }
  

//   function handleCheck(){
//     // setLoginStatus(true);
//     // setOpen(true)
    
//   }



  




//   return (
//     <>
//       <section
//         style={{ height: "auto", background: "#FFB6C1", display: "flex" }}
//       >
//         <Container>
//           <form
//             style={{
//               background: "#fff",
//               width: "50%",
//               margin: "15% auto",
//               padding: "75px 40px",
//               borderRadius: "20px",
//             }}
//             onSubmit={event=>{
//               event.preventDefault()
//             }}
//           >
//             <Grid container spacing={2} sx={{ textAlign: "left" }}>
//               <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
//                 <Typography variant="h3" sx={{ fontWeight: "bold" }}>
//                   {name}
//                 </Typography>
//               </Grid>

//               {name === "Login" ? (
//                 <div></div>
//               ) : (
//                 <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
//                   <TextField
//                     sx={{ width: "100%" }}
//                     id="first-name"
//                     label="Your Name"
//                     variant="outlined"
//                     value={AllInput.name}
//                     onChange={(event) => {
//                       setALLInput({ ...AllInput, name: event.target.value });
//                     }}
//                     type="Name"
//                     target
//                   />
//                 </Grid>
//               )}

//               <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
//                 <TextField
//                   sx={{ width: "100%" }}
//                   id="Adress-Email"
//                   label="Adress Email"
//                   variant="outlined"
//                   type="Email"
//                   value={AllInput.Email}
//                   onChange={(event) => {
//                     setALLInput({ ...AllInput, Email: event.target.value });
//                   }}
//                 />
//               </Grid>
//               <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
//                 <TextField
//                   sx={{ width: "100%" }}
//                   id="password"
//                   type="password"
//                   label="Password"
//                   variant="outlined"
//                   value={AllInput.password}
//                   onChange={(event) => {
//                     setALLInput({ ...AllInput, password: event.target.value });
//                   }}
//                 />
//               </Grid>
//               <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
//                 <Button
//                   sx={{
//                     width: "100%",
//                     padding: "15px 0",
//                     background: "#FF4500",
//                   }}
//                   type="submit"
//                   variant="contained"
//                   disabled={
//                     AllInput.Email.length === 0 ||
//                     AllInput.password.length === 0 ||
//                     (name === "Login" ? "" : AllInput.name.length === 0)
//                   }
//                   onClick={handleCheck}
//                 >
//                   Continue
//                 </Button>
//               </Grid>
//               <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
//                 <Typography variant="p">
//                   {" "}
//                   {name === "Login"
//                     ? "Create an account"
//                     : "Already Have Account"}{" "}
//                   <span
//                     onClick={handlSignUp}
//                     style={{
//                       color: "red",
//                       fontWeight: "bold",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Click here
//                   </span>
//                 </Typography>
//               </Grid>
//               <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
//                 <FormGroup>
//                   <FormControlLabel
//                     control={<Checkbox />}
//                     label="By continuiing, i gree to the Terms Of use & privacy Policy"
//                     required
//                   />
//                 </FormGroup>
//               </Grid>
//             </Grid>
//           </form>
//         </Container>
//       </section>
//     </>
//   );
// }
