import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {toggleButtonGroupClasses,} from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import CardMedia from "@mui/material/CardMedia";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Header from "./header";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Dataproduct from "./AllData/Data";


export default function Product(){
  const {productId}=useParams();
  const Data=useContext(Dataproduct);
  // const [MyProduct,setMyProduct]=useState(null)
  const  MyProduct=Data.find((e)=>e.id===productId);
  // useEffect(()=>{
  //   const  MyProduct=MenData.find((e)=>e.id===productId);
  //   setMyProduct(foundProduct);
  // },[ ])
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  gap: '2rem',
  [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    },
  [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
    },
  [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
    {
      borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
    },
}));

  return (
    <div style={{display:'flex'}}>
    <Header/>
    <section style={{display:"flex",alignItems:"center",justifyContent:"center",alignContent:"center",alignmentBaseline:"central",margin:"5% auto"}}>
      <Box sx={{ flexGrow: 1,margin:"30px 15%" }}>
        <Grid container spacing={5}>
          <Grid size={6} sx={{height:"auto"}}>
            <Grid container spacing={2}>
                <CardMedia
                  component="img"
                  height="590"
                  image={MyProduct.image}
                  alt="image_Product"
                  style={{backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:"center",marginTop:"47px"}}
              />
              </Grid>

          </Grid>

            <Grid size={6}>
              <div style={{textAlign:"left"}}>
                <h1 style={{fontSize:"40px"}}>Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket</h1>
                <div style={{color:"gold",marginBottom:"10px"}}>
                  <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                </div>
                <div style={{fontSize:"20px"}}>
                  <span style={{textDecoration:"line-through #000",fontWeight:"bold"}}>{MyProduct.heightPrice}</span><span style={{color:"red",padding:"0px 12px",fontWeight:"bold"}}>{MyProduct.lowPrice}</span>
                </div>
                <p>{MyProduct.name}</p>
                <h4 style={{fontSize:"20px"}}>Select Size</h4>
                <div>
                  <StyledToggleButtonGroup
                    
                    exclusive
                    
                    aria-label="text alignment"
                  >
                    <ToggleButton value="left" aria-label="left aligned">
                      S
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                      M
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                      L
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified" >
                      XL
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified" >
                      XXL
                    </ToggleButton>
                  </StyledToggleButtonGroup>
                  
                </div>
                <Button variant="contained" sx={{margin:"20px 0px",padding:"10px 30px",background:"red"}}>Add To Cart</Button>
                <div>
                  <p><span style={{fontWeight:"bold"}}>Category :</span>Women,T-shirt ,Crop Top</p>
                  <p><span style={{fontWeight:"bold"}}>Tags :</span> Modern,Latest</p>
                </div>
              </div>
            </Grid>
            
        </Grid>
        </Box>
    </section>
    </div>
  );
};

