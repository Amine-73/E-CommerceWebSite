import Header from "./header"
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';




export default function Men(){
    return (
        <>
            <Header/>
            <Container>
                <section>
                    <Card sx={{ display: 'flex' ,background:"#A9A9A9"}}>
                        <Grid container spacing={2} sx={{width:"100%"}}>
                            <Grid size={8} style={{background:"green",display:"flex",}}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' ,lineHeight:"1px",padding:"10px 30px"}}>
                                    <h1 style={{textTransform:"uppercase",fontSize:"50px"}}>flat 50% off</h1>
                                    <h3 style={{fontSize:"30px",textAlign:"left"}}> <span> 12</span> Hours <span>20</span> Mins</h3>
                                    <Button variant="contained">Contained</Button>
                                </Box>
                                
                                
                            </Grid>
                            <Grid size={4} style={{background:"red"}}>

                            </Grid>
                        
                        </Grid>
                    </Card>
                </section>
            </Container>
        </>
    )
}