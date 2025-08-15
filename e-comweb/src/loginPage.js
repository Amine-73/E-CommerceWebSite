import TextField from '@mui/material/TextField';
import Header from './header';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export default function Login(){
    return(
        <>
        <Header/>
        <section style={{height:"auto",background:"#FFB6C1",display:"flex"}}>
            <Container>
                
                    <form style={{background:"#fff",width:"50%",margin:"15% auto",padding:"75px 40px",borderRadius:"20px"}}>
                        <Grid container spacing={2} sx={{textAlign:"left"}}>
                            <Grid item xs={12} sx={{width:"100%",padding:"10px"}}>
                            <Typography variant='h3' sx={{fontWeight:"bold"}}>Login</Typography>
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
                            <Typography variant='p'>Create an account <Link to='/SingUp' style={{color:"red",fontWeight:"bold"}}>Click here</Link></Typography>
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