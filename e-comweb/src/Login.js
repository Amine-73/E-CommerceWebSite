import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({
  name,
  setName,
  setLoginStatus,
  setOpen,
  setMyList,
  myList,
}) {
  const navigate = useNavigate();
  // const [name, setName] = useState("Login");
  const [AllInput, setALLInput] = useState({
    name: "",
    Email: "",
    password: "",
  });

  const [ischecked, setIsChecked] = useState(false);
  const handleSignUp = () => {
    setName((h) => (h === "Login" ? "SignUp" : "Login"));
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  console.log(validateEmail("aminemail.com"));
  function handlCheckInput() {
    if (name === "Login") {
      return (
        AllInput.Email.length === 0 ||
        AllInput.password.trim().length <= 4 ||
        !ischecked
      );
    } else {
      return (
        AllInput.Email.length === 0 ||
        AllInput.password.trim().length >= 4 ||
        AllInput.name.trim().length === 0 ||
        !ischecked
      );
    }
  }

  const handleCheck = () => {
    if (validateEmail(AllInput.Email)) {
      if (name === "Login") {
        const accountFound = myList.some(
          (user) =>
            user.Email === AllInput.Email && user.password === AllInput.password
        );
        // On utilise la prop setLoginStatus pour mettre à jour l'état dans le parent
        setLoginStatus(accountFound);
        // On utilise la prop setOpen pour mettre à jour l'état dans le parent
        setOpen(true);

        if (accountFound) {
          setTimeout(() => {
            navigate("/home");
            setOpen(false);
          }, 3000);
        }
      } else {
        const existeEmail = myList.some(
          (event) => event.Email === AllInput.Email
        );
        if (existeEmail) {
          setLoginStatus(false);
          setOpen(true);
        } else {
          const newUser = {
            id: myList.length + 1,
            name: AllInput.name,
            Email: AllInput.Email,
            password: AllInput.password,
          };
          const updateList = [...myList, newUser];
          setMyList(updateList);
          localStorage.setItem("myList", JSON.stringify(updateList));
          setLoginStatus(true);
          setOpen(true);
          setTimeout(() => {
            navigate("/home");
            setOpen(false);
          }, 2000);
        }
      }
    } else {
      setLoginStatus(false);
    }
  };

  return (
    <>
      <section
        style={{ height: "auto", background: "#FFB6C1", display: "flex" }}
      >
        <Container>
          <form
            style={{
              background: "#fff",
              width: "50%",
              margin: "15% auto",
              padding: "75px 40px",
              borderRadius: "20px",
            }}
            onSubmit={(event) => event.preventDefault()}
          >
            <Grid container spacing={2} sx={{ textAlign: "left" }}>
              <Grid sx={{ width: "100%", padding: "10px" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {name}
                </Typography>
              </Grid>
              {name !== "Login" && (
                <Grid sx={{ width: "100%", padding: "10px" }}>
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
              <Grid sx={{ width: "100%", padding: "10px" }}>
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
              <Grid sx={{ width: "100%", padding: "10px" }}>
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
              <Grid sx={{ width: "100%", padding: "10px" }}>
                <Button
                  sx={{
                    width: "100%",
                    padding: "15px 0",
                    background: "#FF4500",
                  }}
                  type="submit"
                  variant="contained"
                  disabled={handlCheckInput()}
                  onClick={handleCheck}
                >
                  Continue
                </Button>
              </Grid>
              <Grid sx={{ width: "100%", padding: "10px" }}>
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
              <Grid sx={{ width: "100%", padding: "10px" }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    checked={ischecked}
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                    }}
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
}
