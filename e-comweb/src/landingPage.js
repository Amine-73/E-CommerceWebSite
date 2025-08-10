import Header from "./header"
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function landingPage(){
    


    return (
        <>
            <Header/>
            {/* {Start Landing Page} */}
            <section style={{height:"90vh",display:"flex",alignItems:"center",justifyContent:"start", backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/037/120/162/small_2x/ai-generated-generative-ai-shopping-cart-on-neon-gradient-background-80s-and-90s-style-minimalistic-shop-online-free-delivery-discounts-and-sale-concept-photo.jpg)`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div style={{padding:"30px 50px",margin:"0px 0px 0px 30px",width:"500px",color:"white"}} >
                    <div style={{lineHeight:"6em"}}>
                        <h3 style={{fontSize:"30px",textAlign:"start"}}>New Arrivals Only</h3>
                        <h1 style={{fontSize:"72px",textAlign:"start"}}>New 👋​ Collections for Everyone</h1>
                    </div>
                    <div style={{textAlign:"start"}}>
                        <Button style={{padding:"10px 40px",fontSize:"18px",borderRadius:"18px",background:"#00008B"}}  variant="contained">Last Collection <ArrowForwardIcon style={{fontSize:"26px"}}/></Button>
                    </div>
                </div>
            </section>
            {/* ================ {Start Landing Page} ============== */}

            {/* {Start Section Popular in Women} */}
            <section style={{margin:"80px 0px"}}>
                <div>
                    <div style={{lineHeight:"1em"}}>
                        <h1 style={{textAlign:"center",textTransform:"uppercase",fontSize:"40px"}}>Popular in women</h1>
                        <hr style={{width:"200px",height:"4px",background:"black",marginBottom:"60px",borderRadius:"10px"}}></hr>
                    </div>
                    <Container maxWidth="lg">
                        <Box  sx={{ width: '100%' }}>
                        <Grid  container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid  size={3}>
                                <Card sx={{ maxWidth: 400 }}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9igzce8KZlERMQ9NbVZIAvKIt8vEBjTdHAQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9igzce8KZlERMQ9NbVZIAvKIt8vEBjTdHAQ&s"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start"}}>
                                        Striped Flutter Sleeve Overtop Collor Peplum Hem Blouse
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px"}}>
                                        <Typography style={{fontWeight:"bold"}}>$80</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9"}} disbled>$180</Typography>
                                    </div>
                                    </Card>
                            </Grid>
                            <Grid size={3}>
                                <Card sx={{ maxWidth: 400 }}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHkbMIsqBZW7fF8bKOHs9J9tt3rnHS09d2Q&s"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' ,fontSize:"15px",fontWeight:"bold",textAlign:"start" }}>
                                        Striped Flutter Sleeve Overtop Collor Peplum Hem Blouse
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px"}}>
                                        <Typography style={{fontWeight:"bold"}}>$80</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9"}}>$180</Typography>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid size={3}>
                            <Card sx={{ maxWidth: 400 }}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-SxV7AafzYd6ieqog3z46yBZY-GiFr8KLg&s"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start" }}>
                                        Striped Flutter Sleeve Overtop Collor Peplum Hem Blouse
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold"}}>$80</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9"}}>$180</Typography>
                                    </div>
                                    </Card>
                            </Grid>
                            <Grid size={3}>
                            <Card sx={{ maxWidth: 400 }}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://media.johnlewiscontent.com/i/JohnLewis/ww-block18-130625-v1?fmt=auto"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start" }}>
                                        Striped Flutter Sleeve Overtop Collor Peplum Hem Blouse
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px"}}>
                                        <Typography style={{fontWeight:"bold"}}>$80</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9"}}>$180</Typography>
                                    </div>
                                    </Card>
                            </Grid>
                        </Grid>
                        </Box>
                    </Container>
                </div>
            </section>

            {/*============== {Start Section Popular in Women} ============*/}

        </>
    )
}