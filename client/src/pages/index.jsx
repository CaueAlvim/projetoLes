import AppBar from '../components/AppBar'
import Carousel from '../components/Carousel'
import { Grid } from '@mui/material'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

function Index() {
  const [backgroundColor, setBackgroundColor] = useState('#22272e');

  const products = [
    { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100' },
    { id: 2, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$200' },
    { id: 3, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$300' },
  ];

  return (
    <>
      <Grid sx={{ overflow: 'hidden' }}>
        <AppBar />

        <Grid sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 4.2rem)', backgroundColor: backgroundColor, alignItems: 'center' }}>
          <Carousel setBgColor={setBackgroundColor} />

          <Grid container sx={{ overflow: 'hidden', backgroundColor: 'white', height: '100%', width: '91vw', borderRadius: '10px' }}>
            {products.map((product) => (
              <Grid item xs={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Index