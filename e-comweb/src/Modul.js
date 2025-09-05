import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const handleClose = () => setOpen(false);
  const [open,setOpen]=useState(true);
  const [LoginStatus,setLoginStatus]=useState(false)
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={0}>
            <Grid size={2} sx={{width:"20%"}}>
                {LoginStatus ? <CheckCircleIcon sx={{ fontSize: "35px", color: "green" }} /> : <FeedbackIcon sx={{ fontSize: "35px", color: "red" }} />}
                
              
            </Grid>
            <Grid size={10} sx={{width:"80%"}}>
              <Typography id="modal-modal-title" variant="h5" component="h2" sx={LoginStatus ? {color:"green"} : {colo:"red"}}>
                {LoginStatus ? "Login Successful! Welcome." : "Please try again." }
                
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
