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
import Footer from "./Footer";


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
            <section style={{margin:"100px 0px"}}>
                <div>
                    <div style={{lineHeight:"1em"}}>
                        <h1 style={{textAlign:"center",textTransform:"uppercase",fontSize:"40px"}}>Popular in women</h1>
                        <hr style={{width:"200px",height:"4px",background:"black",marginBottom:"60px",borderRadius:"10px"}}></hr>
                    </div>
                    <Container maxWidth="lg">
                        <Box  sx={{ width: '100%' }}>
                        <Grid  container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid  size={3}>
                                <Card sx={{ maxWidth: 400,cursor:"pointer" }}>
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
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",justifyContent:"center",fontSize:"19px"}}>$80</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}} disbled>$180</Typography>
                                    </div>
                                    </Card>
                            </Grid>
                            <Grid size={3}>
                                <Card sx={{ maxWidth: 400 ,cursor:"pointer"}}>
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
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",justifyContent:"center",fontSize:"19px"}}>$80</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}}>$180</Typography>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid size={3}>
                                <Card sx={{ maxWidth: 400 ,cursor:"pointer"}}>
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
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$80</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}}>$180</Typography>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid size={3}>
                            <Card sx={{ maxWidth: 400,cursor:"pointer" }}>
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
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$80</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}}>$180</Typography>
                                    </div>
                                    </Card>
                            </Grid>
                        </Grid>
                        </Box>
                    </Container>
                </div>
            </section>

            {/*============== {End Section Popular in Women} ============*/}



            {/*============== {Start Section Popular in Children} ============*/}
            <section style={{margin:"100px 0px"}}>
                <div style={{lineHeight:"1em"}}>
                        <h1 style={{textAlign:"center",textTransform:"uppercase",fontSize:"40px"}}>Popular in women</h1>
                        <hr style={{width:"200px",height:"4px",background:"black",marginBottom:"60px",borderRadius:"10px"}}></hr>
                </div>

                <div>
                    <Container maxWidth="lg">
                        <Box  sx={{ width: '100%' }}>
                        <Grid  container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid  size={3}>
                                <Card sx={{ maxWidth: 400,cursor:"pointer" }}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvcflpTU2usyY1MyEIdAKRVY9aan5TLRUdQ&s"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start"}}>
                                        Boys Orange Colourblocked Hooded Sweatshirt
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$77</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}} disbled>$180</Typography>
                                    </div>
                                    </Card>
                            </Grid>
                            <Grid size={3}>
                                <Card sx={{ maxWidth: 400 ,cursor:"pointer"}}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSIFiZV4Ilmw2fYpNZapuE5p9GfyBiMidSw&s"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' ,fontSize:"15px",fontWeight:"bold",textAlign:"start" }}>
                                        Boys Orange Colourblocked Hooded Sweatshirt
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$77</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}}>$180</Typography>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid size={3}>
                                <Card sx={{ maxWidth: 400 ,cursor:"pointer"}}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6INEBUZyDIAzV62RAEn-DwO4qSTbuYQbnw&s"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start" }}>
                                        Boys Orange Colourblocked Hooded Sweatshirt
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$77</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}}>$180</Typography>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid size={3}>
                            <Card sx={{ maxWidth: 400,cursor:"pointer" }}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://img.joomcdn.net/2ef8229072c4e45fe2eec7841730f07a82a30aa0_original.jpeg"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start" }}>
                                        Boys Orange Colourblocked Hooded Sweatshirt
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$77</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}}>$180</Typography>
                                    </div>
                                    </Card>
                            </Grid>
                        </Grid>
                        </Box>


                        <Box  sx={{ width: '100%' ,margin:"50px 0px"}}>
                        <Grid  container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid  size={3}>
                                <Card sx={{ maxWidth: 400,cursor:"pointer" }}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/1279072/1.jpg?5578"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start"}}>
                                        Boys Orange Colourblocked Hooded Sweatshirt
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$77</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}} disbled>$180</Typography>
                                    </div>
                                    </Card>
                            </Grid>
                            <Grid size={3}>
                                <Card sx={{ maxWidth: 400 ,cursor:"pointer"}}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://i.pinimg.com/236x/94/1e/b7/941eb773d4de289124497ece181f3d9d.jpg"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' ,fontSize:"15px",fontWeight:"bold",textAlign:"start" }}>
                                        Boys Orange Colourblocked Hooded Sweatshirt
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$77</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}}>$180</Typography>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid size={3}>
                                <Card sx={{ maxWidth: 400 ,cursor:"pointer"}}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QFutiU9xa23VqhTo5zoe-b4Ie5ND2b9-CqF761_RrDe94YcDL7SaW_VYI5qwuNFQOAY&usqp=CAU"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start" }}>
                                        Boys Orange Colourblocked Hooded Sweatshirt
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$77</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}}>$180</Typography>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid size={3}>
                            <Card sx={{ maxWidth: 400,cursor:"pointer" }}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotpjgfwJc8fw7E51ZPn_YfYyETN5xHujgaw&s"
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start" }}>
                                        Boys Orange Colourblocked Hooded Sweatshirt
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>$77</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}}>$180</Typography>
                                    </div>
                                    </Card>
                            </Grid>
                        </Grid>
                        </Box>
                    </Container>
                </div>
                
            </section>

            {/*============== {End Section Popular in Children} ============*/}


            {/* ==========={Start Footer} ================== */}
            <Footer/>
            {/* ==========={End Footer} ================== */}

        </>
    )
}