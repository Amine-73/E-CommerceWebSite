import Header from "./header";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import Dataproduct from "./AllData/Data";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const MyData = useContext(Dataproduct);
  const [myProduct, setMyProduct] = useState(MyData);
  const productsWomen = myProduct.map((t) => {
    if (t.category === "WomenCatalogue") {
      return (
        <Grid key={t.id} size={3}>
          <Card sx={{ maxWidth: 400, cursor: "pointer" }}>
            <Link to={"/Women"}>
              <CardMedia
                component="img"
                height="404"
                image={t.image}
                alt="Clothes"
                // style={{backgroundImage:`url()`}}
              />
            </Link>
            <CardContent>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "15px",
                  fontWeight: "bold",
                  textAlign: "start",
                }}
              >
                {t.name}
              </Typography>
            </CardContent>
            <div
              style={{
                display: "flex",
                margin: "7px 30px",
                justifyContent: "center",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  justifyContent: "center",
                  fontSize: "19px",
                }}
              >
                {t.lowPrice}
              </Typography>
              <Typography
                sx={{
                  marginLeft: "15px",
                  textDecoration: "line-through red",
                  color: "#A9A9A9",
                  fontSize: "19px",
                }}
              >
                {t.heightPrice}
              </Typography>
            </div>
          </Card>
        </Grid>
      );
    }
  });

  const productsChildren = myProduct.map((t) => {
    if (t.category === "ChildrenCatalogue") {
      return (
        <Grid key={t.id} size={3}>
          <Card sx={{ maxWidth: 400, cursor: "pointer" }}>
            <Link to={"/Kids"}>
              <CardMedia
                component="img"
                height="404"
                image={t.image}
                alt="Clothes"
                // style={{backgroundImage:`url()`}}
              />
            </Link>
            <CardContent>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "15px",
                  fontWeight: "bold",
                  textAlign: "start",
                }}
              >
                {t.name}
              </Typography>
            </CardContent>
            <div
              style={{
                display: "flex",
                margin: "7px 30px",
                justifyContent: "center",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  justifyContent: "center",
                  fontSize: "19px",
                }}
              >
                {t.lowPrice}
              </Typography>
              <Typography
                sx={{
                  marginLeft: "15px",
                  textDecoration: "line-through red",
                  color: "#A9A9A9",
                  fontSize: "19px",
                }}
              >
                {t.heightPrice}
              </Typography>
            </div>
          </Card>
        </Grid>
      );
    }
  });

  return (
    <>
      <Header />
      {/* {Start Landing Page} */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/037/120/162/small_2x/ai-generated-generative-ai-shopping-cart-on-neon-gradient-background-80s-and-90s-style-minimalistic-shop-online-free-delivery-discounts-and-sale-concept-photo.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            padding: "30px 50px",
            margin: "0px 0px 0px 30px",
            width: "500px",
            color: "white",
          }}
        >
          <div style={{ lineHeight: "6em" }}>
            <h3 style={{ fontSize: "30px", textAlign: "start" }}>
              New Arrivals Only
            </h3>
            <h1 style={{ fontSize: "72px", textAlign: "start" }}>
              New 👋​ Collections for Everyone
            </h1>
          </div>
          <div style={{ textAlign: "start" }}>
            <Link to={"/Login"}>
              <Button
                style={{
                  padding: "10px 40px",
                  fontSize: "18px",
                  borderRadius: "18px",
                  background: "#00008B",
                }}
                variant="contained"
              >
                Last Collection{" "}
                <ArrowForwardIcon style={{ fontSize: "26px" }} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* ================ {Start Landing Page} ============== */}

      {/* {Start Section Popular in Women} */}
      <section style={{ margin: "100px 0px" }}>
        <div>
          <div style={{ lineHeight: "1em" }}>
            <h1
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "40px",
              }}
            >
              Popular in women
            </h1>
            <hr
              style={{
                width: "200px",
                height: "4px",
                background: "black",
                marginBottom: "60px",
                borderRadius: "10px",
              }}
            ></hr>
          </div>
          <Container maxWidth="xl">
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {productsWomen}
              </Grid>
            </Box>
          </Container>
        </div>
      </section>

      {/*============== {End Section Popular in Women} ============*/}

      {/*============== {Start Section Exclusive Offers} ============*/}
      <Container maxWidth="xl">
        <section
          style={{
            borderRadius: "30px",
            background:
              "url(https://img.freepik.com/free-photo/beautiful-coquettish-woman-trendy-dress-make-up-looking-thoughtful-aside-gazing-up-with-dreamy-smile-playing-with-hair-standing-against-pink-background_1258-123305.jpg?semt=ais_hybrid&w=740&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "35px 70px",
          }}
        >
          <div style={{ textAlign: "left", width: "50%" }}>
            <h1 style={{ fontSize: "60px" }}>Exclusive Offers For You</h1>
            <h3 style={{ fontSize: "20px", fontFamily: "serif" }}>
              ONLY ON BEST SELLERS PRODUCTS
            </h3>
          </div>
          <div style={{ textAlign: "left" }}>
            <Button
              variant="contained"
              sx={{
                background: "black",
                color: "whit",
                borderRadius: "20px",
                padding: "16px 40px",
                fontWeight: "bold",
              }}
            >
              Subscribe
            </Button>
          </div>
        </section>
      </Container>
      {/*============== {End Section Exclusive Offers} ============*/}

      {/*============== {Start Section Popular in Children} ============*/}
      <section style={{ margin: "100px 0px" }}>
        <div style={{ lineHeight: "1em" }}>
          <h1
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: "40px",
            }}
          >
            Popular in Children
          </h1>
          <hr
            style={{
              width: "200px",
              height: "4px",
              background: "black",
              marginBottom: "60px",
              borderRadius: "10px",
            }}
          ></hr>
        </div>

        <div>
          <Container maxWidth="xl">
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {productsChildren}
              </Grid>
            </Box>
          </Container>
        </div>
      </section>
      {/*============== {End Section Popular in Children} ============*/}
      <Container maxWidth="xl">
        <section style={{ margin: "80px 0px" }}>
          <div
            style={{
              background:
                "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkit.com%2Fpng%2Ffull%2F318-3182497_bg-background-gradient-fade-png.png&f=1&nofb=1&ipt=9d7e1baad1f5557ca010610e4a8ae988b3d9fb7f8bdcea4e51e3116976d9d804)",
              padding: "70px",
              borderRadius: "30px",
            }}
          >
            <div style={{ margin: "40px 0px" }}>
              <h1 style={{ fontSize: "50px", color: "#000" }}>
                Get Exclusive Offers On Your Email
              </h1>
              <h3 style={{ fontSize: "25px", color: "#fff" }}>
                Subscribe to our newsletter and stay updated
              </h3>
            </div>
            <div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "60%" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "70px",
                }}
              >
                <Grid
                  container
                  spacing={3}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid size={8}>
                    <TextField
                      style={{ borderRadius: "60px" }}
                      fullWidth
                      label="Your Email Id"
                      id="fullWidth"
                    />
                  </Grid>
                  <Grid size={4} sx={{ display: "flex" }}>
                    <Button
                      variant="contained"
                      sx={{
                        background: "black",
                        color: "whit",
                        borderRadius: "20px",
                        padding: "0px 30px",
                        fontWeight: "bold",
                      }}
                    >
                      Subscribe
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </section>
      </Container>

      {/* ==========={Start Footer} ================== */}

      <Footer />

      {/* ==========={End Footer} ================== */}
    </>
  );
}
