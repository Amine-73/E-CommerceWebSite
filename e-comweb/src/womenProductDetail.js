import { useParams } from "react-router-dom";
import { useContext } from "react";
import Dataproduct from "./AllData/Data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function WomenProductDetail(){
    const {WomenId}=useParams();
    const Data=useContext(Dataproduct)
    const productWomen=Data.AllDataWomen;

    const MyProduct=productWomen.find((e)=>e.id===Number(WomenId))
    return(
        <div>
            <Card key={MyProduct.id}  sx={{ maxWidth: 400,cursor:"pointer" }}>
                                    <CardMedia
                                        component="img"
                                        height="404"
                                        image={MyProduct.image}
                                        alt="Clothes"
                                        // style={{backgroundImage:`url()`}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:"15px",fontWeight:"bold" ,textAlign:"start"}}>
                                        {MyProduct.name}
                                        </Typography>
                                    </CardContent>
                                    <div style={{display:'flex',margin:"7px 30px",justifyContent:"center"}}>
                                        <Typography style={{fontWeight:"bold",fontSize:"19px"}}>{MyProduct.lowPrice}</Typography>
                                        <Typography sx={{marginLeft:"15px",textDecoration:"line-through red",color:"#A9A9A9",fontSize:"19px"}} disbled>{MyProduct.heightPrice}</Typography>
                                    </div>
                                    </Card>
        </div>
    )
}