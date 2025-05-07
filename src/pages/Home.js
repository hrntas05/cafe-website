import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
}));

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Lokel Kafe'ye Hoş Geldiniz
          </Typography>
          <Typography variant="h5" gutterBottom>
            En lezzetli kahveler ve tatlılar burada
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 4 }} onClick={() => navigate('/menu')}>
            Menüyü Görüntüle
          </Button>
        </Container>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Neden Biz?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 300 }}>
            <Typography variant="h6" gutterBottom>
              Taze Malzemeler
            </Typography>
            <Typography>
              Her gün taze malzemelerle hazırlanan lezzetli yiyecekler
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', maxWidth: 300 }}>
            <Typography variant="h6" gutterBottom>
              Sıcak Ortam
            </Typography>
            <Typography>
              Rahat ve samimi bir ortamda keyifli vakit geçirin
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', maxWidth: 300 }}>
            <Typography variant="h6" gutterBottom>
              Özel Menü
            </Typography>
            <Typography>
              Özenle hazırlanmış özel menü seçenekleri
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 