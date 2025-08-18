import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

  const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
export default function header(){



    return (
        <section style={{borderBottom:"1px solid #A9A9A9",background:"#ffff",position:"fixed",width:"100%",zIndex:"99"}}>
        <Container maxWidth="xl">
        <Toolbar disableGutters >
          <LocalMallIcon  sx={{fontSize:"27px"}}/>
          <Typography
            variant="h4"
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
              marginLeft:"10px",
              color:"black",
            }}
          >
            SHOPPER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            //   onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
            //   anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            //   open={Boolean(anchorElNav)}
            //   onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
            
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display:"flex" ,alignItems:"center",justifyContent:"center"}}>
            
              <Button
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2,mx:2, color: 'black', display: 'block',fontSize:"20px" }}
              >
                <Link to='/' style={{textDecoration:"none",color:"#000"}}>Shop</Link> 
              </Button>
              <Button
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2,mx:2,color: 'black', display: 'block' ,fontSize:"20px"}}
              >
                <Link to='/Men' style={{textDecoration:"none",color:"#000"}}>Men</Link> 
              </Button>
              <Button
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2,mx:2, color: 'black', display: 'block',fontSize:"20px" }}
              >
                <Link to='/WoMen' style={{textDecoration:"none",color:"#000"}}>Women</Link> 
              </Button>
              <Button
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2,mx:2, color: 'black', display: 'block',fontSize:"20px" }}
              >
                <Link to='/Kids' style={{textDecoration:"none",color:"#000"}}>Kids</Link> 
              </Button>
            
          </Box>
          <Box sx={{ flexGrow: 0 ,my:1,mx:2}}>
            <Link to="/Login"><Button variant="outlined" size="medium" sx={{color:"black",border:"1px solid black",borderRadius:"15px",padding:"5px 24px"}}>
              Login
            </Button></Link>
            <Tooltip title="Your Shop" sx={{marginLeft:"16px"}}>
              <IconButton>
                <ShoppingCartOutlinedIcon fontSize="medium" />
                <CartBadge badgeContent={1} color="primary" overlap="circular" />
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
        </section>
    )
}