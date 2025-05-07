import React from 'react';
import { Container, Typography, ImageList, ImageListItem } from '@mui/material';

const galleryImages = [
  {
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Kafe İç Mekan',
  },
  {
    img: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Kahve Hazırlama',
  },
  {
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Tatlılar',
  },
  {
    img: 'https://images.unsplash.com/photo-1517663154410-3d881b7e1e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Türk Kahvesi',
  },
  {
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Latte',
  },
  {
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Cheesecake',
  },
];

const Gallery = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Galeri
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {galleryImages.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: '8px' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Gallery; 