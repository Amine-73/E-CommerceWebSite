import TextField from "@mui/material/TextField";
import Header from "./header";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("Login");
  const [AllInput, setALLInput] = useState({
    name: "",
    Email: "",
    password: "",
  });
  const myList = [
    { id: 1, name: "Amine", Email: "amine@gmail.com", password: "123123" },
  ];
  function handlSignUp() {
    if (name === "Login") {
      setName("SignUp");
    } else {
      setName("Login");
    }
  }
  return (
    <>
      <Header />
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
          >
            <Grid container spacing={2} sx={{ textAlign: "left" }}>
              <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {name}
                </Typography>
              </Grid>

              {name === "Login" ? (
                <div></div>
              ) : (
                <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="first-name"
                    label="Your Name"
                    variant="outlined"
                    value={AllInput.name}
                    onChange={(event) => {
                      setALLInput({ ...AllInput, name: event.target.value });
                    }}
                    type="Name"
                    target
                  />
                </Grid>
              )}

              <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
                <TextField
                  sx={{ width: "100%" }}
                  id="Adress-Email"
                  label="Adress Email"
                  variant="outlined"
                  type="Email"
                  value={AllInput.Email}
                  onChange={(event) => {
                    setALLInput({ ...AllInput, Email: event.target.value });
                  }}
                />
              </Grid>
              <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
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
              <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
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
                    (name === "Login" ? "" : AllInput.name.length === 0)
                  }
                >
                  Continue
                </Button>
              </Grid>
              <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
                <Typography variant="p">
                  {" "}
                  {name === "Login"
                    ? "Create an account"
                    : "Already Have Account"}{" "}
                  <span
                    onClick={handlSignUp}
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
              <Grid xs={12} sx={{ width: "100%", padding: "10px" }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="By continuiing, i gree to the Terms Of use & privacy Policy"
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
