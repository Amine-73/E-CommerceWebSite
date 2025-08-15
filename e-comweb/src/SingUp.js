import TextField from '@mui/material/TextField';
import Header from './header';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';



export default function SingUp(){
    return(
        <>
        <Header/>
        <section style={{height:"92vh",background:"#FFB6C1",display:"flex"}}>
            <Container>
                
                    <form style={{background:"#fff",width:"50%",margin:"10% auto",padding:"40px 40px",borderRadius:"20px"}}>

                        <Grid container spacing={2} sx={{textAlign:"left"}}>
                        <Grid item xs={12} sx={{width:"100%",padding:"10px"}}>
                            <Typography variant='h3' sx={{fontWeight:"bold"}}>SignUp</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{width:"100%",padding:"10px"}}>
                            <TextField sx={{width:"100%"}} id="outlined-basic" label="Your Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sx={{width:"100%",padding:"10px"}}>
                            <TextField sx={{width:"100%"}} id="outlined-basic" label="Adress Email" variant="outlined" />
                        </Grid>
                    
                        <Grid item xs={12} sx={{width:"100%",padding:"10px"}}>
                                <TextField sx={{width:"100%"}} id="outlined-basic" type="password" label="Password" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sx={{width:"100%",padding:"10px"}}>
                                <Button sx={{width:"100%",padding:"15px 0",background:"#FF4500"}} variant="contained">Continue</Button>
                        </Grid>
                        <Grid item xs={12} sx={{width:"100%",padding:"10px"}}>
                            <Typography variant='p'>Already have an account ? <Link to='/Login' style={{color:"red",fontWeight:"bold"}}>Click here</Link></Typography>
                        </Grid>
                        <Grid item xs={12} sx={{width:"100%",padding:"10px"}}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="By continuiing, i gree to the Terms Of use & privacy Policy" />
                            </FormGroup>
                        </Grid>
                        </Grid>
                    </form>
                    
                
            </Container>
        </section>
        </>
    )
}