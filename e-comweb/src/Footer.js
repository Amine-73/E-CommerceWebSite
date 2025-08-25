import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <>
      <Container maxWidth="xl">
        

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
  );
}
