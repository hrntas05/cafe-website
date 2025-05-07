import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

const menuItems = [
  {
    id: 1,
    name: 'Türk Kahvesi',
    description: 'Geleneksel Türk kahvesi',
    price: '₺50',
    image: 'https://unsplash.com/photos/a-cup-of-coffee-on-a-table-XkJpVdda1BA'
  },
  {
    id: 2,
    name: 'Latte',
    description: 'Espresso ve buharla ısıtılmış süt',
    price: '₺90',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Cheesecake',
    description: 'Ev yapımı cheesecake',
    price: '₺100',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Tiramisu',
    description: 'İtalyan usulü tiramisu',
    price: '₺100',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const Menu = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Menümüz
      </Typography>
      <Grid container spacing={4}>
        {menuItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography>
                  {item.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" color="primary">
                    {item.price}
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