import Header from "./header"
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Kids(){
    return (
        <>
        <Header/>
            <Container>
                <section>
                    <Card sx={{ display: 'flex' ,margin:"30px 0px",borderRadius:"30px",background:'url(https://img.freepik.com/free-photo/interested-gentle-tender-young-s-ginger-woman-red-warm-sweater-pointing-looking-upper-left_1258-142103.jpg?semt=ais_hybrid&w=740&q=80)',backgroundSize:"cover",height:"auto",backgroundRepeat:"no-repeat"}}>
                        <Grid container spacing={2} sx={{width:"100%"}}>
                            <Grid size={8} style={{display:"flex",}}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' ,lineHeight:"1px",padding:"10px 30px"}}>
                                    <h1 style={{textTransform:"uppercase",fontSize:"70px",color:"#fff"}}>flat 50% off</h1>
                                    <h3 style={{fontSize:"40px",textAlign:"left"}}> <span style={{color:"#fff"}}> 12</span> Hours <span style={{color:"#fff"}}>20</span> Mins</h3>
                                    <Button variant="contained" style={{background:"#FF7F50",color:"#fff",padding:"10px",borderRadius:"20px",margin:"20px 0px",width:"50%"}}>Explore More</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </section>
                
                <section style={{}}>
                    <div style={{textAlign:"left"}}>
                        <span style={{fontWeight:"bold"}}>Showing 1-12</span> out of 54 Products
                    </div>
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
                </section>

                <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"200px"}}>
                                    
                                        <LocalMallIcon  sx={{fontSize:"59px"}}/>
                                        <Typography
                                            variant="h2"
                                            noWrap
                                            component="a"
                                            href="#app-bar-with-responsive-menu"
                                            sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            marginLeft:"10px"
                                            }}
                                        >
                                            SHOPPER
                                        </Typography>
                            </div>
                
                                <div style={{margin:"25px 0px"}} >
                                    <a href="" style={{textDecoration:"none",padding:"15px",fontSize:"19px",color:"#A9A9A9"}}>Company</a>
                                    <a href="" style={{textDecoration:"none",padding:"15px",fontSize:"19px",color:"#A9A9A9"}}>Products</a>
                                    <a href="" style={{textDecoration:"none",padding:"15px",fontSize:"19px",color:"#A9A9A9"}}>Offices</a>
                                    <a href="" style={{textDecoration:"none",padding:"15px",fontSize:"19px",color:"#A9A9A9"}}>About</a>
                                    <a href="" style={{textDecoration:"none",padding:"15px",fontSize:"19px",color:"#A9A9A9"}}>Contact</a>
                                </div>
                
                                <div style={{margin:"35px 0px"}} >
                                    <a href="https://whatsApp.com" target="blank_1" style={{margin:"0px 6px"}}><WhatsAppIcon style={{fontSize:"40px",color:"#000"}}/></a>
                                    <a href="https://Instagram.com" target="blank_2" style={{margin:"0px 6px"}}><InstagramIcon style={{fontSize:"40px",color:"#000"}}/></a>
                                    <a href="https://LinkedIn.com" target="blank_3" style={{margin:"0px 6px"}}><LinkedInIcon style={{fontSize:"40px",color:"#000"}}/></a>
                                    <a href="https://Facebook.com" target="blank_4" style={{margin:"0px 6px"}}><FacebookIcon style={{fontSize:"40px",color:"#000"}}/></a>
                                </div>
            </Container>
            <div style={{background:"black",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"1px"}}>
                                <p style={{color:"#fff",fontWeight:"bold"}}>Copyright @ 2023 -All Right Reserved ,Created By Mr AMINE CHANNA </p>
            </div>
        </>
    )
}