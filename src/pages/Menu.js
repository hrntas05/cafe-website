import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products') // terminalde ilk bunu yaz
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Menümüz
      </Typography>
      <Grid container spacing={2}>
        {menuItems.map((item) => (
          <Grid item key={item.id} xs={6} sm={4} md={3}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                maxWidth: 200,
                margin: '0 auto',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 3
                }
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                <Typography gutterBottom variant="subtitle1" component="h2" sx={{ 
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  lineHeight: 1.2
                }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ 
                  fontSize: '0.8rem',
                  color: 'text.secondary',
                  mb: 1
                }}>
                  {item.description}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold' }}>
                    {item.price} TL
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Menu; 