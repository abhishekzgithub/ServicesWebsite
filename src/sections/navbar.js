import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router'

const pages = ['Products', 'Pricing', 'Servcies', 'ContactUs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {

    setAnchorElNav(null);
    console.log(page)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handlePrint=(data)=>{
    alert(`data`);
  };

  return (
    <AppBar position="sticky"
    sx={{
            bgcolor:'red',
            // maxWidth:900,
          }}
    >
      <Container maxWidth="md">
        <Toolbar variant="regular" 
          disableGutters
          sx={{
            bgcolor:"inherit",
            border: "solid",
          }}
          >
          {/* -- for normal web */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 35,ml:3, display: { xs: 'none', md: 'flex' } }}
              >
                LOGO
            </Typography>
          <Box
            sx={{
              flexGrow:1,
              display: { xs: 'none', md: 'flex' }

            }}
            >
            
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu.bind(this,page)}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* ---mobile version due to xs=flex */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
              
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                LOGO
            </Typography>
            {/* --- */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;