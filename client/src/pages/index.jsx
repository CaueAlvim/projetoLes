import AppBarSearch from '../components/AppBarSearch';
import Carousel from '../components/Carousel'
import { Grid } from '@mui/material'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

function Index() {
  const [backgroundColor, setBackgroundColor] = useState('#22272e');

  const products = [
    { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100' },
    { id: 2, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$200' },
    { id: 3, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$300' },
    { id: 4, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100' },
    { id: 5, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$200' },
    { id: 6, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$300' },
    { id: 7, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100' },
    { id: 8, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$200' },
    { id: 9, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$300' },
    { id: 10, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100' },
    { id: 11, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$200' },
    { id: 12, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$300' },
  ];

  return (
    <>
      <Grid sx={{ overflow: 'hidden' }}>
        <AppBarSearch />

        <Grid container sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: backgroundColor, alignItems: 'center' }}>
          <Carousel setBgColor={setBackgroundColor} />

          <Grid container item xs={12} sx={{backgroundColor: '#f1f1f1', height: 'auto', width: '91vw', borderRadius: '10px', marginBottom: '1.5rem' }}>
            {products.map((product) => (
              <Grid item xs={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Footer/>
      </Grid>
    </>
  )
}

export default Index