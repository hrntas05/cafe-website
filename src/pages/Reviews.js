import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Rating, Box } from '@mui/material';

const reviews = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    rating: 5,
    comment: 'Harika bir kafe! Kahveleri çok lezzetli ve ortam çok sıcak. Kesinlikle tekrar geleceğim.',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Mehmet Demir',
    rating: 4,
    comment: 'Tatlıları muhteşem, özellikle cheesecake\'i denemenizi öneririm.',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    name: 'Zeynep Kaya',
    rating: 5,
    comment: 'Çalışanlar çok ilgili ve güleryüzlü. Kahvelerinin kalitesi gerçekten çok iyi.',
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 4,
    name: 'Ali Öztürk',
    rating: 4,
    comment: 'Sakin ve huzurlu bir ortam. Ders çalışmak için ideal bir yer.',
    avatar: 'https://i.pravatar.cc/150?img=4'
  }
];

const Reviews = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Müşteri Yorumları
      </Typography>
      <Grid container spacing={4}>
        {reviews.map((review) => (
          <Grid item key={review.id} xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar src={review.avatar} sx={{ mr: 2 }} />
                  <Typography variant="h6">
                    {review.name}
                  </Typography>
                </Box>
                <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                <Typography>
                  {review.comment}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews; 