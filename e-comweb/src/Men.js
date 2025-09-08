import Header from "./header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import Dataproduct from "./AllData/Data";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Men() {
  const Data = useContext(Dataproduct);
  const [myData, setMyData] = useState(Data);
  const products = myData.map((event) => {
    if (event.category === "Men") {
      return (
        <Grid key={event.id} size={3}>
          <Card sx={{ maxWidth: 400, cursor: "pointer" }} >
            <Link to={`/Men/${event.id}`} >
              <CardMedia
                component="img"
                height="404"
                image={event.image}
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
                {event.name}
              </Typography>
            </CardContent>
            <div
              style={{
                display: "flex",
                margin: "7px 30px",
                justifyContent: "center",
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: "19px" }}>
                ${event.lowPrice}
              </Typography>
              <Typography
                sx={{
                  marginLeft: "15px",
                  textDecoration: "line-through red",
                  color: "#A9A9A9",
                  fontSize: "19px",
                }}
                
              >
                ${event.heightPrice}
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
      <Container maxWidth="xl" sx={{ display: "inline-block" }}>
        <section style={{ marginTop: "90px" }}>
          <Card
            sx={{
              display: "flex",
              margin: "30px 0px",
              borderRadius: "30px",
              background:
                "url(https://img.freepik.com/free-photo/image-young-man-give-warning-teaching-lesson-raising-one-finger-scold-looking-camera-patr_1258-159029.jpg?semt=ais_hybrid&w=740&q=80)",
              backgroundSize: "cover",
              height: "auto",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Grid container spacing={2} sx={{ width: "100%" }}>
              <Grid size={8} style={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "1px",
                    padding: "10px 30px",
                  }}
                >
                  <h1
                    style={{
                      textTransform: "uppercase",
                      fontSize: "70px",
                      color: "#FF7F50",
                    }}
                  >
                    flat 50% off
                  </h1>
                  <h3 style={{ fontSize: "40px", textAlign: "left" }}>
                    {" "}
                    <span style={{ color: "#FF7F50" }}> 12</span> Hours{" "}
                    <span style={{ color: "#FF7F50" }}>20</span> Mins
                  </h3>
                  <Button
                    variant="contained"
                    style={{
                      background: "#FF7F50",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "20px",
                      margin: "20px 0px",
                      width: "50%",
                    }}
                  >
                    Explore More
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </section>

        <section style={{}}>
          <div style={{ textAlign: "left" }}>
            <span style={{ fontWeight: "bold" }}>Showing 1-12</span> out of 54
            Products
          </div>
          <Box sx={{ width: "100%", margin: "50px 0px" }}>
            <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {products}
            </Grid>
          </Box>
        </section>
      </Container>
      <Footer />
    </>
  );
}
