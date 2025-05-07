import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <LocalCafeIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Lokel Kafe
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Ana Sayfa
          </Button>
          <Button color="inherit" component={RouterLink} to="/menu">
            Menü
          </Button>
          <Button color="inherit" component={RouterLink} to="/gallery">
            Galeri
          </Button>
          <Button color="inherit" component={RouterLink} to="/reviews">
            Yorumlar
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 